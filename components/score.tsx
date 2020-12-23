import React from 'react';

import { PLAYER_X, PLAYER_O } from '../utils/constants';
import styles from '../styles/Score.module.css';

const Score = ({
    firstPlayerName,
    secondPlayerName,
    score,
    activePlayer
}) => (
        <div className={styles.wrapper}>
            <div className={styles.score}>
                <div className={styles.playerScore}>
                    <p className={activePlayer === PLAYER_X ? styles.activePlayerName : styles.playerName}>
                        {firstPlayerName} (X)
                    </p>
                    <span>{score.x}</span>
                </div>
                <div id={styles.draw}>
                    <p> Draw</p>
                    <span>{score.draw}</span>
                </div>
                <div className={styles.playerScore}>
                    <p className={activePlayer === PLAYER_O ? styles.activePlayerName : styles.playerName}>
                        {secondPlayerName} (O)
                    </p>
                    <span>{score.o}</span>
                </div>
            </div>
        </div>
    );

export default Score;