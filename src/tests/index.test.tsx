import App from '../../pages/index';
import { render, screen } from 'utils/test-utils';

test('Renders app without crashing', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', { name: 'Welcome to Next.js!' })
  ).toBeInTheDocument();
});
