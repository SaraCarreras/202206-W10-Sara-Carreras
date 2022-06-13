//aqí va la parte del html con la li o el ul de gentlemen, useState? min 10
import { caspArr } from '../arr';
import { useState } from 'react';

//MOSTRAR IMÁGENES INTERANDO SOBRE ARR.TSX

export function Gentlemen() {
    const [gentleman, setGentleman] = useState(caspArr);

    return (
        <ul className="gentlemen">
            {gentleman.map((gentle) => {
                return (
                    <li className="gentleman">
                        <div className="gentleman__avatar-container">
                            <img
                                className="gentleman__avatar"
                                src={require('../../../src/img/' +
                                    gentle.picture)}
                                alt={gentle.alternativeText}
                            />
                            <span className="gentleman__initial">
                                {gentle.initial}
                            </span>
                        </div>
                        <div className="gentleman__data-container">
                            <h2 className="gentleman__name">{gentle.name}</h2>
                            <ul className="gentleman__data-list">
                                <li className="gentleman__data">
                                    <span className="gentleman__data-label">
                                        Profession:
                                    </span>
                                    {gentle.profession}
                                </li>
                                <li className="gentleman__data">
                                    <span className="gentleman__data-label">
                                        Status:
                                    </span>
                                    {gentle.status}
                                </li>
                                <li className="gentleman__data">
                                    <span className="gentleman__data-label">
                                        Twitter:
                                    </span>
                                    {gentle.twitter}
                                </li>
                            </ul>
                        </div>
                        <i className="icon gentleman__icon fas fa-check"></i>
                        <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
                        <button className="button button--point-me">
                            Point me!
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}
