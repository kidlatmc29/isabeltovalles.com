import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function ExperiencePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ito's work experience</title>
        <meta name="description" content="Isabel T Ovalles Work Experience" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Experience <sub> 🧋 </sub>
        </h1>
      </main>
    </div>
  )
}
