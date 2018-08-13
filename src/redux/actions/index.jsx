import { ADD_OAUTH_TOKEN } from "../constants/action-types";

export const addOauthToken = oAuthToken => ({
  type: ADD_OAUTH_TOKEN,
  payload: oAuthToken
});
