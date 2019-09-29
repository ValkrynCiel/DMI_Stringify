import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import reducer from 'containers/App/reducer';
import injectSaga from 'utils/injectSaga';
import saga from 'containers/App/saga';
import { addString } from 'containers/App/actions';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectError,
  makeSelectNotification,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import PageWrapper from 'components/PageWrapper';
import SuccessNote from 'components/SuccessNote';
import NewStringForm from './NewStringForm';

const key = 'global';

class NewStringPage extends Component {
  constructor(props) {
    super(props);
    this.addString = this.addString.bind(this);
  }

  addString(id, string) {
    this.props.addString(id, string);
  }

  render() {
    const {note, error} = this.props;
    return (
      <PageWrapper>
        <H2>Add a new string</H2>
        <NewStringForm err={error} handleAddString={this.addString} />
        <SuccessNote note={note}>
          <p>{note}</p>
        </SuccessNote>
      </PageWrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  error: makeSelectError(),
  note: makeSelectNotification(),
});

const mapDispatchToProps = {
  addString: (id, string) => addString(id, string),
};

const withSaga = injectSaga({ key, saga });
const withReducer = injectReducer({ key, reducer });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withConnect,
  withSaga,
)(NewStringPage);
