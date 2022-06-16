import { iCaspArrType } from '../interfaces/gentleman';

export function Gentlemen({
    children,
    initialArr,
}: {
    children: JSX.Element;
    initialArr: iCaspArrType;
}) {
    return (
        <>
            <ul className="gentlemen">
                {initialArr.map((gentle) => {
                    return (
                        <li
                            key={gentle.id}
                            className={
                                'gentleman' +
                                (gentle.selected ? ' selected' : '')
                            }
                        >
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
                                <h2 className="gentleman__name">
                                    {gentle.name}
                                </h2>
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

                            {children}
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
