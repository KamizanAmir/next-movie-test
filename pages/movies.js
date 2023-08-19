import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Movie</title>
        <meta name="description" content="Nothing interesting here :D" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}