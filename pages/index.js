import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import pfp from '../public/chibi_pfp.png'

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
          Isabel T Ovalles <sub> 🧋 </sub>
        </h1>

        <Image
          src={pfp}
          alt="Chibi drawing of Isabel Ovalles drinking boba with a video game controller next to her"
          width={300}
          height={300}
        />
        
        <p className={`${styles.description} ${styles.aboutme}`}>
          gameplay engineer | su comp sci 23&apos; | sea &rarr; sf
        </p>

        <a href="https://isabeltovalles.com/exp" className={styles.card}>
            <h2> Experience <sub> 📄 </sub>&rarr;</h2>
            <p> COMING SOON! </p>
          </a>

        <div className={styles.grid}>
          <a href="https://isabeltovalles.com/cs-resources/spill-tea" className={styles.card}>
            <h2>Spill the Tea Resources <sub> 🧋 </sub> &rarr;</h2>
            <p>List of resources for computer science internships.</p>
          </a>
          
          <a href="https://isabeltovalles.com/socials" className={styles.card}>
            <h2> Socials <sub> 👥 </sub> &rarr;</h2>
            <p> Places I exist on the interwebs.</p>
          </a>
       
          <a href="https://isabeltovalles.com/contact-me" className={styles.card}>
            <h2>Contact Me <sub> ☎️ </sub>&rarr;</h2>
            <p> Ways to get in touch!</p>
          </a>
        </div>

      </main>
    </div>
  )
}
