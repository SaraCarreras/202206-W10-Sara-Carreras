import { render, screen } from '@testing-library/react';
import { Info } from './info';

describe('Given the component Info', () => {
    describe('When the component is rendered', () => {
        test('shows the number of selected gentlemen', () => {
            const initialValue = 2;
            render(<Info counter={initialValue} />);
            const counterValue = screen.getByText(/2/i);
            expect(counterValue).toBeInTheDocument();
        });
    });

    describe('When all gentlemen are selected', () => {
        test('shows the number 3', () => {
            const allSelected = 3;
            render(<Info counter={allSelected} />);
            const counterValue = screen.getByText(/3/i);
            expect(counterValue).toBeInTheDocument();
        });
    });
});
