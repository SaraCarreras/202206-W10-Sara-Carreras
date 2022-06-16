import { iCaspArrType } from '../interfaces/gentleman';
export function ButtonDelete({
    handleDeleteButton,
    initialArr,
    greenCheckButton,
}: {
    handleDeleteButton: (elementId: number) => void;
    initialArr: iCaspArrType;

    greenCheckButton: (elementId: number) => void;
}) {
    return (
        <>
            {initialArr.map((item) => {
                return (
                    <>
                        <i
                            className="icon gentleman__icon fas fa-check"
                            onClick={() => greenCheckButton(item.id)}
                        ></i>

                        <i
                            className="icon gentleman__icon gentleman__icon--delete fas fa-times"
                            onClick={() => handleDeleteButton(item.id)}
                        ></i>
                    </>
                );
            })}
        </>
    );
}
