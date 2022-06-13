import { useEffect, useState } from 'react';
import { iCaspArr } from '../interfaces/gentleman';
import { INITIAL_STATE } from '../arr';
import { Button } from '../button/button';

export function Info() {
    const [gentleman, setGentleman] = useState<Array<iCaspArr>>([]);

    useEffect(() => {
        setGentleman(INITIAL_STATE);
    }, []);

    return (
        <>
            {gentleman.map((gentle) => {
                return (
                    <>
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
                        <Button></Button>
                    </>
                );
            })}
            ;
        </>
    );
}
