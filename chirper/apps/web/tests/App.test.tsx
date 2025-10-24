import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App Component', () => {
  test('renders the app correctly', () => {
    render(<App />);
    const linkElement = screen.getByText(/Welcome to Chirper/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('contains navigation links', () => {
    render(<App />);
    const homeLink = screen.getByText(/Home/i);
    const profileLink = screen.getByText(/Profile/i);
    expect(homeLink).toBeInTheDocument();
    expect(profileLink).toBeInTheDocument();
  });
});