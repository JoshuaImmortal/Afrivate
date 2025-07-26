import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import LandingPage from './LandingPage';

const renderWithRouter = (component) => {
  return render(
    <HashRouter>
      {component}
    </HashRouter>
  );
};

describe('LandingPage', () => {
  test('renders main heading', () => {
    renderWithRouter(<LandingPage />);
    const headingElement = screen.getByText(/Welcome to AfriVate/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders get started button', () => {
    renderWithRouter(<LandingPage />);
    const buttonElement = screen.getByRole('link', { name: /Get Started/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.getAttribute('href')).toBe('#/register');
  });

  test('renders login button', () => {
    renderWithRouter(<LandingPage />);
    const buttonElement = screen.getByRole('link', { name: /Login/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.getAttribute('href')).toBe('#/login');
  });

  test('renders features section', () => {
    renderWithRouter(<LandingPage />);
    const featuresHeading = screen.getByText(/Why Choose AfriVate/i);
    expect(featuresHeading).toBeInTheDocument();
    
    const features = [
      'Secure Transactions',
      'Fast Processing',
      'Low Fees'
    ];
    
    features.forEach(feature => {
      const featureElement = screen.getByText(feature);
      expect(featureElement).toBeInTheDocument();
    });
  });
}); 