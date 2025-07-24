import { render, screen } from '@testing-library/react';
import LandingPage from './pages/LandingPage';

test('renders landing page with main heading and Get Started button', () => {
  render(<LandingPage />);
  const heading = screen.getByText(/Welcome to AfriVate/i);
  const getStartedButton = screen.getByRole('link', { name: /Get Started/i });
  expect(heading).toBeInTheDocument();
  expect(getStartedButton).toBeInTheDocument();
});
