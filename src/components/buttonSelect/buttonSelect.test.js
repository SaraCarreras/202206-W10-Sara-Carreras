import { render, screen } from '@testing-library/react';
import { ButtonSelect } from './buttonSelect';

describe('Given the component buttonSelect', () => {
    describe('When the component is rendered', () => {
        test('renders Sellect all as button name', () => {
            render(<ButtonSelect />);
            const buttoName = screen.getByText(/Select all/i);
            expect(buttoName).toBeInTheDocument();
        });
    });

    describe('When the component is selected', () => {
        test('shows Unselect all as button name', () => {
            render(<ButtonSelect allSelected={true} handleButton={() => {}} />);
            const buttoNameUnselec = screen.getByText(/Unselect all/i);
            expect(buttoNameUnselec).toBeInTheDocument();
        });
    });
});
