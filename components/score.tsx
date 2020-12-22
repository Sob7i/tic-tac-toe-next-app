import React from 'react';

import { _PLAYER_X, _PLAYER_O } from '../constants';
import styles from '../styles/Score.module.css';

const Score = ({
    firstPlayerName,
    secondPlayerName,
    score,
    nextPlayer
}) => (
        <div className={styles.wrapper}>
            <div className={styles.score}>
                <div className={styles.playerScore}>
                    <p className={nextPlayer === _PLAYER_X ? styles.playerNameActive : styles.playerName}>
                        {firstPlayerName} (X)
                    </p>
                    <span>{score.x}</span>
                </div>
                <div id={styles.draw}>
                    <p> Draw</p>
                    <span>{score.draw}</span>
                </div>
                <div className={styles.playerScore}>
                    <p className={nextPlayer === _PLAYER_O ? styles.playerNameActive : styles.playerName}>
                        {secondPlayerName} (O)
                    </p>
                    <span>{score.o}</span>
                </div>
            </div>
        </div>
    );

export default Score;