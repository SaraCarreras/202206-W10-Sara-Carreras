import { fireEvent, render, screen } from '@testing-library/react';
import { ButtonDelete } from './buttonDelete';
import { INITIAL_STATE } from '../arr';

describe('Given the component ButtonDelete', () => {
    describe('When the component is clicked', () => {
        test('then should unselect a card', () => {
            const arr = INITIAL_STATE;
            const deleteMock = jest.fn();
            render(
                <ButtonDelete
                    initialArr={arr}
                    handleDeleteButton={deleteMock}
                ></ButtonDelete>
            );

            const deleteButtons = screen.queryAllByTestId('child-button');
            fireEvent.click(deleteButtons[0]);
            expect(deleteMock).toHaveBeenCalled();
        });
    });
});
