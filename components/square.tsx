import React from 'react'

import styles from '../styles/Square.module.css'

const Square = ({ value, onClick, isWinSquare }): JSX.Element => (
  <div
    className={isWinSquare ? styles.winSquare : styles.square}
    onClick={onClick}
  >
    <p className={styles.innerText}>{value}</p>
  </div>
)

export default Square
