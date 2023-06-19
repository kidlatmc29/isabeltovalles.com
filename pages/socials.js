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
          My Socials! <sub> 📱 </sub>
        </h1>

        <div className={styles.grid}>

          <a target="_blank" href="" className={styles.card}>
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

          <a target="_blank" href="https://www.instagram.com/kidlatmc29/" className={styles.card}>
            <h2> 📷 Instagram &rarr;</h2>
            <p> Photos of my life.  </p>
          </a>

          <a target="_blank" href="https://www.tiktok.com/@ozabell?is_from_webapp=1&sender_device=pc" className={styles.card}>
            <h2> 🕰️ TikTok &rarr;</h2>
            <p> Funny short videos of my life and some things related to gaming, skincare, and computer science. </p>
          </a>

        </div> 
      </main>
    </div>
  )
}
