import { fireEvent, render, screen } from '@testing-library/react';
import { ButtonDelete } from './buttonDelete';
import { INITIAL_STATE } from '../arr';
import userEvent from '@testing-library/user-event';

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
            //console.log(component);

            const deleteButon = screen.queryAllByTestId('child-button');
            userEvent.click(deleteButon);
            expect(deleteMock).toHaveBeenCalled();
        });
    });
});
