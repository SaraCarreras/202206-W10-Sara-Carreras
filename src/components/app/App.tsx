import React from 'react';

//import bertin from '../../img/bertin.jpg';

import { Gentlemen } from '../gentleman/gentleman';

import { Header } from '../header/header';

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
                    <button className="button button--select">
                        Select all
                    </button>
                </section>
                <main className="main">
                    {
                        <Gentlemen></Gentlemen>
                        /*AQUI ESTABA DIV GENTLEMEN */
                    }
                </main>
            </div>
        </>
    );
}
