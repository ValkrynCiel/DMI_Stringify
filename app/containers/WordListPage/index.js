import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import reducer from 'containers/App/reducer';
import injectSaga from 'utils/injectSaga';
import saga from 'containers/App/saga';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectWords,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import { loadWords } from 'containers/App/actions';
import H2 from 'components/H2';
import PageWrapper from './PageWrapper';
import WordList from './WordList';
import WordDisplay from './WordDisplay';

const key = 'global';

class WordListPage extends Component {
  async componentDidMount() {
    if (!this.props.words) {
      await this.props.loadWords();
    }
  }

  render() {
    const { loading, error, words } = this.props;
    return loading ? (
      <h1>loading</h1>
    ) : (
      <PageWrapper>
        <H2>Word List</H2>
        {error ? (
          <h1>{error}</h1>
        ) : (
          <WordList>
            {words.map((w, i) => (
              <WordDisplay key={i} i={i}>
                <p>{w}</p>
              </WordDisplay>
            ))}
          </WordList>
        )}
      </PageWrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  words: makeSelectWords(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const mapDispatchToProps = {
  loadWords: () => loadWords(),
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
)(WordListPage);
