import { useEffect, useState } from 'react';
import { INITIAL_STATE } from '../arr';

//import { INITIAL_STATE } from '../arr';
//import { Button } from '../button/button';

export function Info() {
    const [counter, setCounter] = useState(0);

    const handleClick = (allSelected: number) => {
        setCounter((prev) => (prev = allSelected));
        console.log('click', counter);
    };

    return (
        <>
            <p className="info">{counter} gentlemen pointing at you</p>
            <button
                className="button button--select"
                onClick={() => handleClick(INITIAL_STATE.length)}
            >
                Select all
            </button>
        </>
    );
}
