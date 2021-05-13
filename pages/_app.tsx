import { configureStore, createReducer, EnhancedStore } from "@reduxjs/toolkit";
import withRedux from "next-redux-wrapper";
import "../styles/globals.css";

const makeStore = (_?: any): EnhancedStore =>
  configureStore({
    reducer: createReducer({}, (builder) => builder),
  });

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default withRedux(makeStore)(App);
