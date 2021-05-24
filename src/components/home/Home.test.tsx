import Home from './Home';
import { render, screen } from 'utils/test-utils';

test('Renders Home without crashing', () => {
  render(<Home />);

  expect(screen.getByText('Welcome to Ecommerce App')).toBeInTheDocument();
});
