import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();
  console.log('Current Path:', router.pathname);
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Movie</title>
        <meta name="description" content="Nothing interesting here :D" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.navbar}>
        <h1 className={styles.title}>
          <Link href="/nothing">PcariMovie</Link>
        </h1>
        <ul className={styles.menu}>
          <li>
            <Link href="/" className={router.pathname === '/' ? styles['active-link'] : ''}>Home</Link>
          </li>
          <li>
            <Link href="/movies" className={router.pathname === '/movies' ? styles['active-link'] : ''}>Movies</Link> {/* Replace "/movies" with the actual route for movies */}
          </li>
            <Link href="/tvshows">TV Show</Link> {/* Replace "/tvshows" with the actual route for TV shows */}
            <Link href="/videos">Video</Link> {/* Replace "/tvshows" with the actual route for TV shows */}
            <Link href="/faq">FAQ</Link> {/* Replace "/tvshows" with the actual route for TV shows */}
            <Link href="/pricing">Pricing</Link> {/* Replace "/tvshows" with the actual route for TV shows */}
            <Link href="/contact">Contact Us</Link> {/* Replace "/tvshows" with the actual route for TV shows */}
        </ul>
      </nav>
    </div>
  )
}