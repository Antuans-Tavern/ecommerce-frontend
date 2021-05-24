import { FC, ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/styles';
import MuiTheme from '../../styles/muiTheme';
import { createStore } from 'redux/store';

const AllTheProviders: FC = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => <ThemeProvider theme={MuiTheme}>{children}</ThemeProvider>;

createStore().withRedux(AllTheProviders);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) =>
  render(ui, {
    wrapper: AllTheProviders,
    ...options,
  });

export * from '@testing-library/react';

export { customRender as render };
