import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'

import styles from '../styles/Toolsbar.module.css'

const Toolsbar = ({ restartGame, quitGame }) => {
  return (
    <div className={styles.toolsbar}>
      <img src="/tic-tac-toe.png" width="34px" alt="tic-tac-toe" />
      <span>
        <FontAwesomeIcon
          icon={faRedo}
          onClick={restartGame}
          className={styles.redoIcon}
        />
        <FontAwesomeIcon
          icon={faTimesCircle}
          onClick={quitGame}
          className={styles.quitIcon}
        />
      </span>
    </div>
  )
}

export default Toolsbar
