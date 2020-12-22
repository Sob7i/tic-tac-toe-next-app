import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo, faTimes } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/Toolsbar.module.css';

const Toolsbar = ({restartGame, quitGame}) => {
    return (
        <div className={styles.toolsbar}>
            <img src='/tic-tac-toe.png' width='34px' alt='tic-tac-toe' />
            <span>
                <FontAwesomeIcon onClick={restartGame} className={styles.redoIcon} icon={faRedo} />
                <FontAwesomeIcon onClick={quitGame} className={styles.quitIcon} icon={faTimes} />
            </span>
        </div>
    )
}

export default Toolsbar;