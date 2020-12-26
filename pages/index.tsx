import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Game from '../components/game'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>tic tac toe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Game />
      </main>
    </div>
  )
}
