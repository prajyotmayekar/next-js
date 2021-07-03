import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next app | Prajyot Mayekar</title>
        <meta name="description" content="Generated using next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Hello There</h1>
      </div>
    </div>
  )
}
