import { FC, ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';

const AllTheProviders: FC = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => <>{children}</>;

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
