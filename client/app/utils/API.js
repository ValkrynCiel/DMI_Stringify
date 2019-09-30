import axios from 'axios';

class API {
  static API_URL = 'http://localhost:3000/api/strings';

  static err = `Oops! Something went wrong. Check that you are online and/or that the server is running on port 5000.`;

  static async getStrings() {
    try {
      const { data } = await axios.get(this.API_URL);
      return data.strings;
    } catch (err) {
      throw Error(this.err);
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
      throw Error(this.err);
    }
  }
}

export default API;
