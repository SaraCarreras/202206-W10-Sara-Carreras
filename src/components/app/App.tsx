import { useState } from 'react';
import { Gentlemen } from '../gentleman/gentleman';

import { Header } from '../header/header';
import { ButtonDelete } from '../button/buttonDelete';
import { ButtonSelect } from '../buttonSelect/buttonSelect';
import { Info } from '../info/info';
import { INITIAL_STATE } from '../arr';

function App() {
    const [initialArr, setInitialArr] = useState(INITIAL_STATE);

    const handleButton = (selectedButton: boolean): void => {
        setInitialArr(
            initialArr.map((item) => ({ ...item, selected: selectedButton }))
        );
    };

    const counterFunc = () => {
        let counter = 0;
        initialArr.forEach((item) => {
            item.selected && counter++;
        });
        return counter;
    };

    const deleteFromArr = (elementId: number) => {
        setInitialArr(
            initialArr.filter((item) => item.id !== elementId && item)
        );
    };
    const greenCheckButton = (elementId: number) => {
        setInitialArr(
            initialArr.map((item) =>
                item.id === elementId
                    ? { ...item, selected: !item.selected }
                    : item
            )
        );
    };
    return (
        <div className="container">
            <Header></Header>

            <section className="controls">
                <Info counter={counterFunc()}></Info>
                <ButtonSelect
                    allSelected={initialArr.every((item) => item.selected)}
                    handleButton={handleButton}
                ></ButtonSelect>
            </section>

            <main className="main">
                <Gentlemen
                    initialArr={initialArr}
                    greenCheckButton={greenCheckButton}
                >
                    <ButtonDelete
                        initialArr={initialArr}
                        handleDeleteButton={deleteFromArr}
                    ></ButtonDelete>
                </Gentlemen>
            </main>
        </div>
    );
}
export default App;
