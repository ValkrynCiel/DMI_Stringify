import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

export class NewStringPage extends Component {
  constructor(props) {
    super(props);
    this.onAddString = this.onAddString.bind(this);
  }
  /** index.js is connected to redux but the form needs an event handler to call addString() */

  async onAddString(id, string) {
    await this.props.onAddString(id, string);
  }

  render() {
    const { error, note } = this.props;
    return (
      <PageWrapper>
        <H2>Add a new string</H2>
        <NewStringForm handleAddString={this.onAddString} />
        <Notification error={error} show={note || error}>
          <p>{note || error}</p>
        </Notification>
      </PageWrapper>
    );
  }
}

NewStringPage.propTypes = {
  onAddString: PropTypes.func,
  note: PropTypes.string,
  error: PropTypes.string,
};

export const mapStateToProps = createStructuredSelector({
  error: makeSelectError(),
  note: makeSelectNotification(),
});

export const mapDispatchToProps = {
  onAddString: (id, string) => addString(id, string),
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
