import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { Board } from '../components/board.jsx'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Board />
      </main>
      <footer className={styles.footer}>
        <div>
          Made with ❤️
        </div>
      </footer>
    </div>
  )
}
