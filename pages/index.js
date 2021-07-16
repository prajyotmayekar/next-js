import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next app | Prajyot Mayekar</title>
        <meta name="description" content="Generated using next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="page_title">Home page</h1>
      </div>
    </div>
  )
}
