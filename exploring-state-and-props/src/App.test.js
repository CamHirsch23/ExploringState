import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders User Profile heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/User Profile/i);
    expect(headingElement).toBeInTheDocument();
});

test('renders Change Name button', () => {
    render(<App />);
    const buttonElement = screen.getByText(/Change Name/i);
    expect(buttonElement).toBeInTheDocument();
});

test('renders Edit button', () => {
    render(<App />);
    const buttonElement = screen.getByText(/Edit/i);
    expect(buttonElement).toBeInTheDocument();
});