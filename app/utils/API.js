import axios from 'axios';

class API {
  static API_URL = 'http://localhost:3000/api/words';

  static async getWords() {
    try {
      const { data } = await axios.get(this.API_URL);

      if (!data.words) {
        throw Error('Oops! Something went wrong on our part.');
      }
      return data.words;
    } catch (err) {
      if (err.message.includes('Network Error')) {
        throw Error(
          'Uh oh. You may be offline or you may have stopped the server.',
        );
      }
      throw err;
    }
  }

  static async postWord(word) {
    const res = await axios.post(this.API_URL, {
      word,
    });
    return res.word;
  }
}

export default API;
