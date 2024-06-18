import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function ExperiencePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ito&apos;s work experience</title>
        <meta name="description" content="ito" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Experience <sub> 🧋 </sub>
        </h1>

        <p className={`${styles.description} ${styles.aboutme}`}>
          work in progress 
        </p>

      </main>
    </div>
  )
}
