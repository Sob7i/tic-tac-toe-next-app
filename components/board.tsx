import React from 'react';

import Square from './square';
import styles from '../styles/Board.module.css'
import { withWinStyles } from './withWinStyles';

const EnhancedSquare = withWinStyles(Square);

const Board = ({ squares, winSquares, onClick, strikeThroughStyles }) => {
  return (
    <div className={styles.board}>
      {squares.map((square: any, i: number) => (
        <EnhancedSquare
          key={i}
          index={i}
          value={square}
          winSquares={winSquares}
          onClick={onClick(i)}
        />
      ))}
      {!!strikeThroughStyles &&
        <div id={styles.strikethrough} style={strikeThroughStyles} />
      }
    </div>
  )
}

export default Board;