import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ThemeProvider } from '@material-ui/styles';
import { ComponentType } from 'react';
import { createStore } from '../src/redux/store';
import MuiTheme from '../styles/muiTheme';

const client = new ApolloClient({
  uri: process.env.baseURL ?? '',
  cache: new InMemoryCache(),
});

function App({
  Component,
  pageProps,
}: {
  Component: ComponentType;
  pageProps: Record<string, unknown>;
}) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={MuiTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default createStore().withRedux(App);
