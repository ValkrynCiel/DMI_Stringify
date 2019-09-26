import React, { Component } from 'react';
import WordList from './WordList';
import WordDisplay from './WordDisplay';

export default class WordListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'],
    };
  }

  render() {
    return (
      <WordList>
        {this.state.words.map((w, i) => (
          <WordDisplay key={w} i={i}>
            <p>{w}</p>
          </WordDisplay>
        ))}
      </WordList>
    );
  }
}
