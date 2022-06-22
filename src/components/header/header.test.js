import { render, screen } from '@testing-library/react';
import { Header } from './header';

describe('Given the component Header', () => {
    describe('When the component is rendered', () => {
        test('renders The pointing gentlemen app title', () => {
            render(<Header />);
            const titleElement = screen.getByText(/The pointing gentlemen/i);
            expect(titleElement).toBeInTheDocument();
        });
    });
});
