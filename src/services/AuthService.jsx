import * as React from "react";
import { addOauthToken } from "../redux/actions";
import store from "../redux/store";

export default class AuthService {
  createCheckAuthJson() {
    const token = this.getLatestToken();
    return this.buildJson(token);
  }

  getLatestToken() {
    const tokensIndex = store.getState().oAuthTokens.length - 1;
    return store.getState().oAuthTokens[tokensIndex];
  }

  buildJson(token) {
    return {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
  }
}
