//import React from 'react';

import { Gentlemen } from '../gentleman/gentleman';
import { Header } from '../header/header';

import { ButtonSelect } from '../buttonSelect/buttonSelect';
import { Info } from '../info/info';

export function App() {
    return (
        <>
            <div className="container">
                <Header></Header>

                <section className="controls">
                    <Info></Info>
                    <ButtonSelect></ButtonSelect>
                </section>

                <main className="main">
                    <Gentlemen></Gentlemen>
                </main>
            </div>
        </>
    );
}
