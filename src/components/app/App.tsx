//import React from 'react';

import { Gentlemen } from '../gentleman/gentleman';
import { Header } from '../header/header';
import { Info } from '../info/info';
import { ButtonSelect } from '../buttonSelect/buttonSelect';

export function App() {
    return (
        <>
            <Header></Header>
            <div className="container">
                <header className="main-header">
                    <h1 className="main-title">The pointing gentlemen</h1>
                </header>
                <section className="controls">
                    <p className="info">0 gentlemen pointing at you</p>
                    <ButtonSelect></ButtonSelect>
                </section>

                <main className="main">
                    <Gentlemen></Gentlemen>
                </main>
            </div>
        </>
    );
}
