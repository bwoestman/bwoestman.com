import { Navbar } from "./navigation/Navbar";
import * as React from "react";

import { AuthProvider, AuthConsumer } from "react-check-auth";
import { Routes } from "./routes";

import { addOauthToken } from "./redux/actions";
import store from "./redux/store";
import AuthService from "./services/AuthService";

store.dispatch(
  addOauthToken(
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU2ZGJhMGQ0Y2QwNjExNDJkYWEzNTI0YmFmMGVhZGYxMWQyMWIwODM0ZTM5NTUyOTcwODdlNDc1OWYwOWY5ZTc5ODMyZDdhMDcyNTY5ZWYyIn0.eyJhdWQiOiIxIiwianRpIjoiNTZkYmEwZDRjZDA2MTE0MmRhYTM1MjRiYWYwZWFkZjExZDIxYjA4MzRlMzk1NTI5NzA4N2U0NzU5ZjA5ZjllNzk4MzJkN2EwNzI1NjllZjIiLCJpYXQiOjE1MzQxNDU1NDYsIm5iZiI6MTUzNDE0NTU0NiwiZXhwIjoxNTY1NjgxNTQ2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.OFjHqkjq9-YzcHSFJqK53mMGD8JHNEafre6gyWr-31_sblCrCgroayAIa_wYXmVE89i7PwtFgs-glM0MN4hr26ZbPo_nkuK6F1fXKUlIn5sC2y3hRY676nacHafcMx0wwSlO0JprbNzm7cM1uFFDFB00fe8tOvomM63jS-f6xsaCbwhnLrrQLa8vk5rL74SWX0mO1hyWqVdEv9_CDhAIgEKyRpR-QCPD_VP-7eqgYWkBmxOwlWdEHs7kyEm4r54EVvNKsaT3Qpjx-6EgOoDi4-Pn9_gpY2w5HT_k0M57VnKHxqTu0_9Q2DC3KsK_bp2FFAPm3KBLijrcTcwkd4eNGT2GEFx-bvNoCuMH7LcZpofRE4w0pN9spvyEWJThGyq-ao72gqHCh7PdFrwONc5MZsu6SsqhbrCUZvWrWi_Kqore6srOKQV3GC_IJEgcLuDRJJYXHNJwYtVgpQ87XTonz4FYfz2d36mLHvZg45hduf1wqQVldHKaG3loTtQDAMRe5hm_iEtfEwc9oPdgUE6irQ1qa3eif6LYf2d9kBZRvjUKGHE01SVDX7XjFqIBnCP95l3bNETkq9L6reJpi1fb4CskOikgZznSq71cG1lTmIdboj15bf3SWY9uj7G9pVUqNMXlCmUgfh6zQ63tCGixlzqWZrdltuDKuGLcDzwadnI"
  )
);

let as = new AuthService();
const reqOptions = as.createCheckAuthJson();

let authUrl = "http://bwoestmanapi.test/api/details";

const App = () => {
  return (
    <AuthProvider authUrl={authUrl} reqOptions={reqOptions}>
      <div className="app">
        <Navbar title="bdub" />
        <Routes />
      </div>
    </AuthProvider>
  );
};

export default App;
