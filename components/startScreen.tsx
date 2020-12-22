import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faUser } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/StartScreen.module.css';

const StartScreen = ({
    firstPlayerName,
    setFirstPlayerName,
    secondPlayerName,
    setSecondPlayerName,
    handleChangeNameInput,
    startGame
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.test}>
                <img src='/tic-tac-toe.png' alt='tic-tac-toe' id={styles.img} />
                <h1 id={styles.title}>Tic Tac Toe </h1>
            </div>
            {/* <FontAwesomeIcon onClick={() => console.log('one')} id={styles.onePlayerOption} icon={faUser} />
            <FontAwesomeIcon onClick={() => console.log('two')} id={styles.twoPlayersOption} icon={faUserFriends} /> */}
            <div id={styles.inputWrapper}>
                <div id={styles.firstPlayerName}>
                    <label className={styles.label}>Player X name :</label>
                    <input
                        type="text"
                        name="First player name"
                        value={firstPlayerName}
                        className={styles.input}
                        onChange={handleChangeNameInput(setFirstPlayerName)}
                        maxLength={10}
                    />
                </div>
                <div id={styles.secondPlayerName}>
                    <label className={styles.label}>Player O name :</label>
                    <input
                        type="text"
                        name="Second player name"
                        value={secondPlayerName}
                        className={styles.input}
                        onChange={handleChangeNameInput(setSecondPlayerName)}
                        maxLength={10}
                    />
                </div>
            </div>
            <button id={styles.startGame} onClick={startGame}>Start game</button>
        </div>
    )
}

export default StartScreen;