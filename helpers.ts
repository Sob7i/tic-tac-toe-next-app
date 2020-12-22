
// Winning probabilities 
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
    let winningProb: number[] = [];
    let winningindex: number;

    winningProbs.forEach((prob: number[], index: number) => {
        const [a, b, c] = prob;
        const squaresAreFilled = squares.every(sqr => !!sqr);

        if (!result && squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            result = squares[a];
            winningProb = [a, b, c];
            winningindex = index;
        }
        //(!result && squaresAreFilled && (squares[a] === squares[b] && squares[a] !== squares[c]))
        else if (!result && squaresAreFilled) {
            return result = 'DRAW'
        }
    });

    return { result, winningProb, winningindex };
}

export const play = (index: number, player: string, setSquares: React.Dispatch<React.SetStateAction<any[]>>) => {
    setSquares(prevState => {
        const squares = [...prevState]
        squares[index] = player;
        return squares;
    });
};

export const calcScore = (gameResult: any) => (prevScore: any) => {
    if (!gameResult) return;

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

export const setupStrikethrough = (winningindex: number) => {
    const defaultWidth = 300;
    const diagonalWidth = 380;
    let winProbStyle: {};

    switch (winningindex) {
        case 0:
            winProbStyle = {
                width: defaultWidth,
                transform: "none",
                top: 214,
                left: 333,
                visibility: 'visible'
            };
            break;
        case 1:
            winProbStyle = {
                width: defaultWidth,
                transform: "none",
                top: 340,
                left: 333,
                visibility: 'visible'
            };
            break;
        case 2:
            winProbStyle = {
                width: defaultWidth,
                transform: "none",
                top: 460,
                left: 333,
                visibility: 'visible'
            };
            break;
        case 3:
            winProbStyle = {
                transform: "rotate(90deg)",
                top: 200,
                left: -45,
                width: defaultWidth,
                visibility: 'visible'
            };
            break;
        case 4:
            winProbStyle = {
                transform: "rotate(90deg)",
                top: 200,
                left: 58,
                width: defaultWidth,
                visibility: 'visible'
            };
            break;
        case 5:
            winProbStyle = {
                transform: "rotate(90deg)",
                top: 200,
                left: 159,
                width: defaultWidth,
                visibility: 'visible'
            };
            break;
        case 6:
            winProbStyle = {
                transform: "rotate(45deg)",
                top: 200,
                left: 11,
                width: diagonalWidth,
                visibility: 'visible'
            };
            break;
        case 7:
            winProbStyle = {
                transform: "rotate(-45deg)",
                top: 200,
                left: 9,
                width: diagonalWidth,
                visibility: 'visible'
            };
            break;
    }

    return winProbStyle;
}