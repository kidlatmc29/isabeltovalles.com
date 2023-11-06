import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function SocialsPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ito</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          My Socials! <sub> 👥 </sub>
        </h1>

        <div className={styles.grid}>

          <a target="_blank" href="https://github.com/kidlatmc29" className={styles.card}>
              <h2> 💻 Github &rarr;</h2>
              <p> Repos of my uni days and personal projects. </p>
          </a>

          <a target="_blank" href="https://www.linkedin.com/in/isabel-t-ovalles/" className={styles.card}>
            <h2> 🔗 LinkedIn &rarr;</h2>
            <p> Connect with me!</p>
          </a>

          <a target="_blank" href="https://youtube.com/@ozabell" className={styles.card}>
            <h2> 📺 YouTube &rarr;</h2>
            <p> Mostly videos from my college courses and cs related videos.</p>
          </a>
        </div> 
      </main>
    </div>
  )
}
