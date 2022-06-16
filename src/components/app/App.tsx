import { useState } from 'react';
import { Gentlemen } from '../gentleman/gentleman';

import { Header } from '../header/header';
import { ButtonDelete } from '../button/buttonDelete';
import { Button } from '../buttonSelect/buttonSelect';

//import { ButtonSelect } from '../buttonSelect/buttonSelect';
import { Info } from '../info/info';
import { INITIAL_STATE } from '../arr';

function App() {
    const [initialArr, setInitialArr] = useState(INITIAL_STATE);

    const handleButton = (selectedValue: boolean): void => {
        setInitialArr(
            initialArr.map((item) => ({ ...item, selected: selectedValue }))
        );
    };

    const counterFunc = () => {
        let counter = 0;
        initialArr.forEach((item) => {
            item.selected && counter++;
        });
        return counter;
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
                <Gentlemen>
                    <ButtonDelete></ButtonDelete>
                </Gentlemen>
            </main>
        </div>
    );
}
export default App;
