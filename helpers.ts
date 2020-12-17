export const winningProbs: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
export const calcGameResult = (winningProbs: number[][], squares: string[]) => {
    let result: string;
    let winningSquares: number[];

    winningProbs.forEach((prob: number[], i: number) => {
        const [a, b, c] = prob;
        const squaresAreFilled = squares.every(sqr => !!sqr);

        if (!result && squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
             result = squares[a];
             winningSquares = [a,b,c]
        }
        //(!result && squaresAreFilled && (squares[a] === squares[b] && squares[a] !== squares[c]))
        else if (!result && squaresAreFilled) {
            return result = 'DRAW'
        }
    });

    return {result, winningSquares};
}

export const play = (index: number, player: string, setSquares: React.Dispatch<React.SetStateAction<any[]>>) => {
    setSquares(prevState => {
        const squares = [...prevState]
        squares[index] = player;
        return squares;
    });
};

export const calcScore = (gameResult: any) => (prevScore: any) => {
    if(!gameResult) return;
    let newScore: any;

    switch (gameResult) {
        case 'X':
            newScore = { ...prevScore, X: ++prevScore.X };
            break;
        case 'O':
            newScore = { ...prevScore, O: ++prevScore.O };
            break;
        case 'DRAW':
            newScore = { ...prevScore, DRAW: ++prevScore.DRAW };
            break;
        default: newScore = prevScore;
            break;
    }
    return newScore;
}

export const getRandomInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;