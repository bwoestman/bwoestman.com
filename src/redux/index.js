import store from "../redux/store/index";
import { addOauthToken } from "../redux/actions/index";

window.store = store;
window.addOauthToken = addOauthToken;
