import { Story } from '@storybook/react';
import Home from './Home';

export const Primary: Story = () => <Home />;

Primary.storyName = 'Primary component';

const defaultComponent = {
  title: 'Components/Home',
  component: Home,
};

export default defaultComponent;
