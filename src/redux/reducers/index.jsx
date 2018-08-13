import { ADD_OAUTH_TOKEN } from "../constants/action-types";
const initialState = {
  oAuthTokens: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_OAUTH_TOKEN:
      state.oAuthTokens.concat(action.payload);
      return { ...state, oAuthTokens: [...state.oAuthTokens, action.payload] };
    default:
      return state;
  }
};
export default rootReducer;
