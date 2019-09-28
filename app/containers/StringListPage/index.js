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
import PageWrapper from 'components/PageWrapper';
import StringList from './StringList';
import StringDisplay from './StringDisplay';

const key = 'global';

class StringListPage extends Component {
  async componentDidMount() {
    if (!this.props.strings || this.props.error) {
      await this.props.loadStrings();
    }
  }

  render() {
    const { loading, error, strings } = this.props;
    return loading ? (
      <h1>loading</h1>
    ) : (
      <PageWrapper>
        <H2>String List</H2>
        {error ? (
          <h1>{error}</h1>
        ) : (
          <StringList>
            {strings.map(({ id, string }, i) => (
              <StringDisplay key={id} i={i}>
                <p>{string}</p>
              </StringDisplay>
            ))}
          </StringList>
        )}
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
