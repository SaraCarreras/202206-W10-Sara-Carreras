export function Button({
    allSelected,
    handleButton,
}: {
    allSelected: boolean;
    handleButton: (selectedButton: boolean) => void;
}) {
    return (
        <button
            className="button button--select"
            onClick={() => handleButton(!allSelected)}
        >
            {allSelected ? 'Unselect all' : 'Select all'}
        </button>
    );
}
