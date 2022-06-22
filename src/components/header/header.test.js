import { render, screen } from '@testing-library/react';
import { Header } from './header';

test('renders The pointing gentlemen app title', () => {
    render(<Header />);
    const titleElement = screen.getByText(/The pointing gentlemen/i);
    expect(titleElement).toBeInTheDocument();
});
