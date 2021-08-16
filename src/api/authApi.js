import axios from "./config";
import * as jwt from "jsonwebtoken";

class AuthApi {
  async login({ email, password }) {
    return axios.post("/login", {
      username: email,
      password
    })
    .then(p => p.data.access_token)
    .catch(e => {
      console.log(e)
      return e.message
    })
  }

  async register({ email, password }) {
    return axios.post("/users", {
      username: email,
      password
    })
    .then(p => p.data)
    .catch(e => {
      console.log(e)
      return e.message
    })
  }

  me(accessToken) {
    return new Promise((resolve, reject) => {
      try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        // Decode access token
        const user = jwt.decode(accessToken);
        resolve(user)
      } catch (err) {
        console.error('[Auth Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }
}

export const authApi = new AuthApi();
