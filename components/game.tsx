import React, { useEffect, useState } from "react";

import { play, calcGameResult, calcScore, styleWinSquares, winningProbs } from '../helpers';
import { _SQARES, _PLAYER_X, _PLAYER_O } from '../constants';
import Board from './board';
import Score from './score';
import StartScreen from "./startScreen";
import Toolsbar from './toolsbar';
import styles from '../styles/Game.module.css';

const Game = () => {
    const [squares, setSquares] = useState(_SQARES);
    const [nextPlayer, setNextPlayer] = useState(_PLAYER_X);
    const [score, setScore] = useState({ x: 0, o: 0, draw: 0 });
    const [winSquares, setWinSquares] = useState([]);
    const [gameStarted, setGameStarted] = useState(false);
    const [firstPlayerName, setFirstPlayerName] = useState('Player');
    const [secondPlayerName, setSecondPlayerName] = useState('Player');
    const [scoreIndicator, setScoreIndicator] = useState<string | null>(null);
    const [strikeThroughStyles, setStrikeThroughStyles] = useState({});

    const gameResult = calcGameResult(winningProbs, squares);
    const { result, winningProb, winningindex } = gameResult;

    const handleClickSquare = (squareIndex: number) => (event: React.SyntheticEvent) => {
        if (result || !!squares[squareIndex]) return;
        play(squareIndex, nextPlayer, setSquares);
        setNextPlayer((prevState: string) => prevState === _PLAYER_X ? _PLAYER_O : _PLAYER_X);
    };

    const handleChangeName = (setState: any) => (event: any) => {
        const { value } = event.target;
        if (!value) return;
        return setState(value);
    }

    const startGame = (event: React.SyntheticEvent) =>
        setGameStarted(true);

    const restartGame = (event: React.SyntheticEvent) => {
        setSquares(_SQARES);
        setScore({ x: 0, o: 0, draw: 0 });
    };

    const quitGame = (event: React.SyntheticEvent) =>
        setGameStarted(false);

    useEffect(() => {
        const scoreIndicator = result === 'X' ? 'Player X wins!'
            : result === 'O' ? 'Player O wins!'
                : 'It is a draw!';

        if (result) {
            setScore(calcScore(result));
            setWinSquares(winningProb);
            setScoreIndicator(scoreIndicator);
            setStrikeThroughStyles(styleWinSquares(winningindex));
        }

        setTimeout(() => {
            if (result) {
                setSquares(_SQARES);
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
                    <>
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
                            nextPlayer={nextPlayer}
                        />
                    </>
                )
            }
        </div>
    );
};

export default Game;