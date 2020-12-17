import React from 'react';

import styles from '../styles/Score.module.css';

const Score = ({ playerX_Score, draw, playerO_Score }) => (
    <div className={styles.score}>
        <div className={styles.playerScore}>
            <p className={styles.playerName}>Player 1</p>
            <span>{playerX_Score}</span>
        </div>
        <div className={styles.draw}>
            <p className={styles.player}> Draw</p>
            <span>{draw}</span>
        </div>
        <div className={styles.playerScore}>
            <p className={styles.playerName}> Player 2</p>
            <span>{playerO_Score}</span>
        </div>
    </div>
);

export default Score;