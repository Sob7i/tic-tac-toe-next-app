import React from 'react';

import Square from './square';
import styles from '../styles/Board.module.css'
import { withWinningStyles } from './withWinningStyles';

const EnhancedSquare = withWinningStyles(Square);

const Board = ({ squares, winningSquares, onClick, strikeThroughStyles }) => {
  return (
    <div className={styles.board}>
      {squares.map((square: any, i: number) => (
        <EnhancedSquare
          key={i}
          index={i}
          value={square}
          winningSquares={winningSquares}
          onClick={onClick(i)}
        />
      ))}
      <div id={styles.strikethrough} style={strikeThroughStyles}>
        <div id={styles.strikethroughChild} ></div>
      </div>
    </div>
  )
}

export default Board;