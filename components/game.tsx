import React, { useEffect, useState } from "react";

import { play, calcGameResult, calcScore, styleWinSquares, winningProbs } from '../utils/helpers';
import { PLAYER_X, PLAYER_O } from '../utils/constants';
import { ISquare, IScore } from "../utils/types";
import Board from './board';
import Score from './score';
import StartScreen from "./startScreen";
import Toolsbar from './toolsbar';
import styles from '../styles/Game.module.css';

const defaultSquares: ISquare[] = new Array(9).fill(null);

const Game = () => {
    const [squares, setSquares] = useState<ISquare[]>(defaultSquares);
    const [activePlayer, setActivePlayer] = useState<string>(PLAYER_X);
    const [score, setScore] = useState<IScore>({ x: 0, o: 0, draw: 0 });
    const [winSquares, setWinSquares] = useState<number[]>([]);
    const [gameStarted, setGameStarted] = useState<boolean>(false);
    const [firstPlayerName, setFirstPlayerName] = useState<string>('Player');
    const [secondPlayerName, setSecondPlayerName] = useState<string>('Player');
    const [scoreIndicator, setScoreIndicator] = useState<string | null>(null);
    const [strikeThroughStyles, setStrikeThroughStyles] = useState<{}>({});

    const gameResult = calcGameResult(winningProbs, squares);
    const { result, winningProb, winningindex } = gameResult;

    const handleClickSquare = (squareIndex: number) => (event: React.SyntheticEvent) => {
        if (result || !!squares[squareIndex]) return;
        play(squareIndex, activePlayer, setSquares);
        setActivePlayer((prevState: string) => prevState === PLAYER_X ? PLAYER_O : PLAYER_X);
    };

    const handleChangeName = (setState: React.Dispatch<React.SetStateAction<string>>) =>
        (event: React.ChangeEvent<any>) => {
            const { value } = event.target;
            if (!value) return;
            return setState(value);
        }

    const startGame = (event: React.SyntheticEvent) =>
        setGameStarted(true);

    const quitGame = (event: React.SyntheticEvent) => {
        setGameStarted(false);
        setSquares(defaultSquares);
        setScore({ x: 0, o: 0, draw: 0 })
    }

    const restartGame = (event: React.SyntheticEvent) => {
        setSquares(defaultSquares);
        setScore({ x: 0, o: 0, draw: 0 });
    };

    useEffect(() => {
        const scoreIndicator: string = result === 'X' ? 'Player X wins!'
            : result === 'O' ? 'Player O wins!'
                : result === 'DRAW' ? 'It is a draw!'
                    : null;

        if (result) {
            setScore(calcScore(result));
            setWinSquares(winningProb);
            setScoreIndicator(scoreIndicator);
            setStrikeThroughStyles(styleWinSquares(winningindex));
        }

        setTimeout(() => {
            if (result) {
                setSquares(defaultSquares);
                setWinSquares([]);
                setScoreIndicator(null);
                setStrikeThroughStyles(null);
            };
        }, 2000);

    }, [result]);

    return (
        <div id={styles.game} >
            {!gameStarted ?
                (
                    <StartScreen
                        firstPlayerName={firstPlayerName}
                        setFirstPlayerName={setFirstPlayerName}
                        secondPlayerName={secondPlayerName}
                        setSecondPlayerName={setSecondPlayerName}
                        handleChangeName={handleChangeName}
                        startGame={startGame}
                    />
                )
                :
                (
                    <div id={styles.container}>
                        <Toolsbar restartGame={restartGame} quitGame={quitGame} />
                        <Board
                            squares={squares}
                            winSquares={winSquares}
                            onClick={handleClickSquare}
                            strikeThroughStyles={strikeThroughStyles}
                        />
                        <Score
                            firstPlayerName={firstPlayerName}
                            secondPlayerName={secondPlayerName}
                            score={score}
                            activePlayer={activePlayer}
                        />
                        { !!scoreIndicator &&
                            <div id={styles.scoreIndicator}>
                                <p id={styles.indicatorContent}>{scoreIndicator}</p>
                            </div>
                        }
                    </div>
                )
            }
        </div>
    );
};

export default Game;