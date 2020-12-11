import styles from '../styles/Board.module.css';

export const squaresArr = [
    { sqrIndx: 1, className: 'square-one' },
    { sqrIndx: 2, className: 'square-two' },
    { sqrIndx: 3, className: 'square-three' },
    { sqrIndx: 4, className: 'square-four' },
    { sqrIndx: 5, className: 'square-five' },
    { sqrIndx: 6, className: 'square-six' },
    { sqrIndx: 7, className: 'square-seven' },
    { sqrIndx: 8, className: 'square-eight' },
    { sqrIndx: 9, className: 'square-nine' }
]

export const Board = () => {
    return (
        <div className={styles.board}>
            {squaresArr.map(({ sqrIndx, className }) =>
                <button key={sqrIndx} className={className} style={{}}>
                    {sqrIndx}
                </button>
            )}
        </div>
    )
}