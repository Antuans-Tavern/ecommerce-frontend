import { ComponentType } from 'react';
import { createStore } from '../src/redux/store';
import '../styles/globals.css';

function App({
  Component,
  pageProps,
}: {
  Component: ComponentType;
  pageProps: Record<string, unknown>;
}) {
  return <Component {...pageProps} />;
}

export default createStore().withRedux(App);
