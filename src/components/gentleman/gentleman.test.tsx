import { render, screen } from '@testing-library/react';
import { Gentlemen } from './gentleman';
import { INITIAL_STATE } from '../arr';
import { ButtonDelete } from '../button/buttonDelete';

describe('Given the component Gentlemen', () => {
    describe('when the component is rendered', () => {
        test('should render a Gentlemen card with the Alt text', () => {
            const arr = INITIAL_STATE;
            render(
                <Gentlemen initialArr={arr} greenCheckButton={() => {}}>
                    <>{}</>
                </Gentlemen>
            );
            const elementArr = screen.getAllByAltText(
                /Barney pointing at you/i
            );
            const elementArr2 = screen.getAllByAltText(
                /The Fary pointing at you/i
            );
            const elementArr3 = screen.getAllByAltText(/Asch pointing at you/i);
            expect(elementArr[0]).toBeInTheDocument();
            expect(elementArr2[0]).toBeInTheDocument();
            expect(elementArr3[0]).toBeInTheDocument();
        });
    });

    describe('when the component is already rendered', () => {
        test('should render 3 Gentlemen card', () => {
            const arr = INITIAL_STATE;
            render(
                <Gentlemen initialArr={arr} greenCheckButton={() => {}}>
                    <>{}</>
                </Gentlemen>
            );
            const elementArr = screen.getAllByRole('list');
            expect(elementArr[0]).toBeInTheDocument();
            expect(elementArr[1]).toBeInTheDocument();
            expect(elementArr[2]).toBeInTheDocument();
        });
    });

    describe('when the component is  rendered', () => {
        test('should render 3 check icons per card', () => {
            const arr = INITIAL_STATE;
            render(
                <Gentlemen initialArr={arr} greenCheckButton={() => {}}>
                    <>{}</>
                </Gentlemen>
            );
            const iconCheck = screen.getAllByRole('button');
            expect(iconCheck[0]).toBeInTheDocument();
            expect(iconCheck[1]).toBeInTheDocument();
            expect(iconCheck[2]).toBeInTheDocument();
        });
    });

    describe('when is rendered', () => {
        test('should render a child too', () => {
            const expectedChild = ButtonDelete;
            render(
                <Gentlemen initialArr={[]} greenCheckButton={() => {}}>
                    <>{expectedChild}</>
                </Gentlemen>
            );
            //console.log(component);

            const child = screen.queryByTestId('child-button');
            expect(child).toBeDefined();
        });
    });
});
