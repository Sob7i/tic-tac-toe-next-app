import React from 'react';

import styles from '../styles/Square.module.css';

const Square = ({ value, onClick, isWinningSquare }) => (
  <div
    className={isWinningSquare ? styles.winningSquare : styles.square}
    onClick={onClick}
  >
    <p className={isWinningSquare ? styles.innerTextWithBlink : styles.innerText}>{value}</p>
  </div>
)


export default Square;