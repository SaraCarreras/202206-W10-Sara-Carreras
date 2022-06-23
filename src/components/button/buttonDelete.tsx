import { iCaspArrType } from '../interfaces/gentleman';
export function ButtonDelete({
    handleDeleteButton,

    initialArr,
}: {
    handleDeleteButton: (elementId: number) => void;

    initialArr: iCaspArrType;
}) {
    return (
        <>
            {initialArr.map((item) => {
                return (
                    <div key={item.id}>
                        <i
                            data-testid="child-button"
                            className="icon gentleman__icon gentleman__icon--delete fas fa-times"
                            onClick={() => handleDeleteButton(item.id)}
                        ></i>
                    </div>
                );
            })}
        </>
    );
}
