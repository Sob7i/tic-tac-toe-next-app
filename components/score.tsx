import React from 'react';

import styles from '../styles/Score.module.css';

const Score = ({
    firstPlayerName,
    secondPlayerName,
    score,
    scoreIndicator
}) => (
        <div className={styles.wrapper}>
            { !!scoreIndicator ?
                (
                    <div id={styles.result}>
                        <p id={styles.resultText}>{scoreIndicator}</p>
                    </div>
                ) :
                (
                    <div className={styles.score}>
                        <div className={styles.playerScore}>
                            <p className={styles.playerName}>{firstPlayerName} (X)</p>
                            <span>{score.x}</span>
                        </div>
                        <div className={styles.draw}>
                            <p className={styles.player}> Draw</p>
                            <span>{score.draw}</span>
                        </div>
                        <div className={styles.playerScore}>
                            <p className={styles.playerName}>{secondPlayerName} (O)</p>
                            <span>{score.o}</span>
                        </div>
                    </div>
                )
            }
        </div>
    );

export default Score;