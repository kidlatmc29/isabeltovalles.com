import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ito</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Seattle U - Spill the Tea Resources <sub> 🧋 </sub>
        </h1>


        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2> SU CS Department Canvas &rarr;</h2>
            <p>Resources to start, revise, or get feedback on your resumes.</p>
          </a>
        </div>

      </main>
    </div>
  )
}
