import { render, screen } from '@testing-library/react';
import TestComponent from './TestComponent';

describe('TestComponent component', () => {
  it('renders without crashing', () => {
    render(<TestComponent name="Next.js Developer" />);

    const greetingSentence = screen.getByText(/Hello, Next.js Developer/i);

    expect(greetingSentence).toBeInTheDocument();
  });
});
