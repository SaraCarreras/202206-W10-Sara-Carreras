export function Info({ counter }: { counter: number }) {
    /*  const handleClick = (allSelected: number) => {
        setCounter((prev) => (prev = allSelected));
        console.log('click', counter);
    };
    */
    return <p className="info">{counter} gentlemen pointing at you</p>;
}
