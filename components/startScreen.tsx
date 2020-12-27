import React from 'react'

import styles from '../styles/StartScreen.module.css'

const StartScreen = ({
  firstPlayerName,
  setFirstPlayerName,
  secondPlayerName,
  setSecondPlayerName,
  handleChangeName,
  startGame,
}): JSX.Element => (
  <div id={styles.container}>
    <div id={styles.titleWrapper}>
      <img
        id={styles.img}
        src="/tic-tac-toe.png"
        alt="tic-tac-toe"
        width="100"
        height="100"
      />
      <h1 id={styles.title}>Tic Tac Toe </h1>
    </div>
    <div id={styles.inputWrapper}>
      <div id={styles.firstPlayerName}>
        <label className={styles.label}>Player X name :</label>
        <input
          type="text"
          name="First player name"
          value={firstPlayerName}
          className={styles.input}
          onChange={handleChangeName(setFirstPlayerName)}
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
          onChange={handleChangeName(setSecondPlayerName)}
          maxLength={10}
        />
      </div>
    </div>
    <button id={styles.startGame} onClick={startGame}>
      Start game
    </button>
  </div>
)

export default StartScreen
