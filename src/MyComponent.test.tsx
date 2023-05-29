import React from 'react';
import { render, screen } from '@testing-library/react';
import { MyComponent } from './MyComponent';

test('render text', () => {
  render(<MyComponent />);
  const spanElement = screen.getByText(/Hello/i);
  expect(spanElement).toBeInTheDocument();
});
