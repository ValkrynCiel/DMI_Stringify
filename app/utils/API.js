import axios from 'axios';

class API {
  static API_URL = 'http://localhost:3010/api/strings';

  static async getStrings() {
    try {
      const { data } = await axios.get(this.API_URL);
      return data.strings;
    } catch (err) {
      if (err.message.includes('Network Error')) {
        throw Error(
          `Oops! We couldn't connect to the server. Is the server running on port 5000?`,
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
      throw Error(
        `Oops! This string couldn't be sent. Is the server running on port 5000?`,
      );
    }
  }
}

export default API;
