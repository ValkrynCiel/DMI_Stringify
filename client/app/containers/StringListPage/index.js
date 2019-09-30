import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import reducer from 'containers/App/reducer';
import injectSaga from 'utils/injectSaga';
import saga from 'containers/App/saga';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectStrings,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import { loadStrings } from 'containers/App/actions';
import H2 from 'components/H2';
import Notification from 'components/Notification';
import PageWrapper from 'components/PageWrapper';
import StringList from './StringList';
import StringDisplay from './StringDisplay';

const key = 'global';

class StringListPage extends Component {
  async componentDidMount() {
    /** only attempt to load strings if they aren't found in redux */
    if (!this.props.strings) {
      await this.props.loadStrings();
    }
  }

  displayStringList(strings) {
    // display strings unless there is an error
    return (
      <StringList>
        {strings &&
          strings.map(({ id, string }, i) => (
            <StringDisplay key={id} i={i}>
              <p>{string}</p>
            </StringDisplay>
          ))}
      </StringList>
    );
  }

  render() {
    const { loading, error, strings } = this.props;
    return (
      <PageWrapper>
        <H2>String List</H2>
        {this.displayStringList(strings)}
        <Notification show={error || loading} error={error}>
          <p>{error || (loading && 'Loading...')}</p>
        </Notification>
      </PageWrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  strings: makeSelectStrings(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const mapDispatchToProps = {
  loadStrings: () => loadStrings(),
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
)(StringListPage);
