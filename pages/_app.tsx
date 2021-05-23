import { ThemeProvider } from '@material-ui/styles';
import { ComponentType } from 'react';
import { createStore } from '../src/redux/store';
import MuiTheme from '../styles/muiTheme';

function App({
  Component,
  pageProps,
}: {
  Component: ComponentType;
  pageProps: Record<string, unknown>;
}) {
  return (
    <ThemeProvider theme={MuiTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default createStore().withRedux(App);
