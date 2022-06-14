import { Gentlemen } from '../gentleman/gentleman';
import { Header } from '../header/header';
import { ButtonDelete } from '../button/buttonDelete';

import { ButtonSelect } from '../buttonSelect/buttonSelect';
import { Info } from '../info/info';

export function Layout() {
    return (
        <div className="container">
            <Header></Header>

            <section className="controls">
                <Info></Info>
                <ButtonSelect></ButtonSelect>
            </section>

            <main className="main">
                <Gentlemen>
                    <ButtonDelete></ButtonDelete>
                </Gentlemen>
            </main>
        </div>
    );
}
