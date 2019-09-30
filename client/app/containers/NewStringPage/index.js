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
import Notification from 'components/Notification';
import NewStringForm from './NewStringForm';

const key = 'global';

class NewStringPage extends Component {
  constructor(props) {
    super(props);
    this.addString = this.addString.bind(this);
  }
  /** index.js is connected to redux but the form needs an event handler to call addString() */

  async addString(id, string) {
    await this.props.addString(id, string);
  }

  render() {
    const { error, note } = this.props;
    return (
      <PageWrapper>
        <H2>Add a new string</H2>
        <NewStringForm handleAddString={this.addString} />
        <Notification error={error} show={note || error}>
          <p>{note || error}</p>
        </Notification>
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
