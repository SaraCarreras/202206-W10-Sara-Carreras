import { render, screen } from '@testing-library/react';
import { Gentlemen } from './gentleman';
import { INITIAL_STATE } from '../arr';

describe('Given the component Gentlemen', () => {
    describe('When the component is rendered', () => {
        test('should render a Gentlemen card with the Profession  text each one', () => {
            const arr = INITIAL_STATE;
            render(
                <Gentlemen initialArr={arr} greenCheckButton={() => {}}>
                    <>{}</>
                </Gentlemen>
            );
            const elementArr = screen.getAllByText(/Profession/i);
            expect(elementArr[0]).toBeInTheDocument();
            expect(elementArr[1]).toBeInTheDocument();
            expect(elementArr[2]).toBeInTheDocument();
        });

        //test('should have an array received by props', () => {});
    });
});

describe('When the component is rendered', () => {
    test('should render a Gentlemen card with the Alt text', () => {
        const arr = INITIAL_STATE;
        render(
            <Gentlemen initialArr={arr} greenCheckButton={() => {}}>
                <>{}</>
            </Gentlemen>
        );
        const elementArr = screen.getAllByAltText(/Barney pointing at you/i);
        const elementArr2 = screen.getAllByAltText(/The Fary pointing at you/i);
        const elementArr3 = screen.getAllByAltText(/Asch pointing at you/i);
        expect(elementArr[0]).toBeInTheDocument();
        expect(elementArr2[0]).toBeInTheDocument();
        expect(elementArr3[0]).toBeInTheDocument();
    });
});
