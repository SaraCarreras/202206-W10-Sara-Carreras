import { useState } from 'react';
import { Gentlemen } from '../gentleman/gentleman';

import { Header } from '../header/header';
import { ButtonDelete } from '../button/buttonDelete';
import { Button } from '../buttonSelect/buttonSelect';
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

    const deleteFromArr = (gentId: number) => {
        setInitialArr(initialArr.filter((item) => item.id !== gentId && item));
    };
    const greenCheckButton = (gentId: number) => {
        setInitialArr(
            initialArr.map((item) =>
                item.id === gentId
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
                <Button
                    allSelected={initialArr.every((item) => item.selected)}
                    handleButton={handleButton}
                ></Button>
            </section>

            <main className="main">
                <Gentlemen initialArr={initialArr}>
                    <ButtonDelete
                        initialArr={initialArr}
                        handleDeleteButton={deleteFromArr}
                        greenCheckButton={greenCheckButton}
                    ></ButtonDelete>
                </Gentlemen>
            </main>
        </div>
    );
}
export default App;
