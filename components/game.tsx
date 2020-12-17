import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo, faTimes } from '@fortawesome/free-solid-svg-icons';

import { play, calcGameResult, calcScore, winningProbs } from '../helpers';
import styles from '../styles/Game.module.css';
import Board from './board';
import Score from './score';

const SQARES = new Array(9).fill(null);
const PLAYER_X = 'X';
const PLAYER_O = 'O';
const SCORE = { X: 0, O: 0, DRAW: 0 };

const Game = () => {
    const [squares, setSquares] = useState(SQARES);
    const [player, setPlayer] = useState(PLAYER_X);
    const [score, setScore] = useState(SCORE);
    const [winningSquares, setWinningSquares] = useState([]);

    const [toggleStyle, setToggleStyle] = useState(true)

    const gameResult = calcGameResult(winningProbs, squares);

    const handleClick = (squareIndex: number) => (event: React.SyntheticEvent) => {
        if (gameResult?.result) return;
        play(squareIndex, player, setSquares);
        setPlayer(prevState => prevState === PLAYER_X ? PLAYER_O : PLAYER_X);
    };

    const restartGame = (event: React.SyntheticEvent) => {
        setSquares(SQARES)
        setScore(SCORE);
    };

    const quitGame = (event: React.SyntheticEvent) =>
        setToggleStyle(!toggleStyle)

    useEffect(() => {
        if (gameResult?.result) {
            setScore(calcScore(gameResult.result));
            setWinningSquares(gameResult.winningSquares)
        }

        setTimeout(() => {
            if (gameResult?.result) {
                setSquares(SQARES);
                setWinningSquares([])
            };
        }, 2000);

    }, [gameResult?.result]);

    return (
        <div className={styles.game} >
            <div className={styles.toolsBar}>
                <img src='/tic-tac-toe.png' width='34px' alt='tic-tac-toe' />
                <span>
                    <FontAwesomeIcon onClick={restartGame} className={styles.redoIcon} icon={faRedo} />
                    <FontAwesomeIcon onClick={quitGame} className={styles.quitIcon} icon={faTimes} />
                </span>
            </div>
            {/* {!gameResult && <p>Next player is {player}</p>} */}
            {/* {gameResult?.result && <p>Winner is {gameResult?.result}</p>} */}
            <Board squares={squares} winningSquares={winningSquares} onClick={handleClick} />
            <Score
                playerX_Score={score.X}
                playerO_Score={score.O}
                draw={score.DRAW}
            />
        </div>
    );
};

export default Game;