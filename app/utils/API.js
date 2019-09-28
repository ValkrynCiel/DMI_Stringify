import axios from 'axios';

class API {
  static API_URL = 'http://localhost:3000/api/strings';

  static async getStrings() {
    try {
      const { data } = await axios.get(this.API_URL);

      if (!data.strings) {
        throw Error('Oops! Something went wrong on our part.');
      }
      return data.strings;
    } catch (err) {
      if (err.message.includes('Network Error')) {
        throw Error(
          'Uh oh. You may be offline or you may have stopped the server.',
        );
      }
      throw err;
    }
  }

  static async postString(id, string) {
    try {
      const res = await axios.post(this.API_URL, {
        string,
        id,
      });
      return res.strings;
    } catch (err) {
      throw Error('something went wrong');
    }
  }
}

export default API;
