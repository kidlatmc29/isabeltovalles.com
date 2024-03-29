import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import gif_pfp from '../public/sunflower_pfp.gif'

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
          src={gif_pfp}
          alt="Gif of Isabel Ovalles with sunflowers"
          width={300}
          height={300}
        />
        
        <p className={`${styles.description} ${styles.aboutme}`}>
          multiplayer gameplay engineer | su comp sci 23&apos; | sea &rarr; sf
        </p>

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

          <a href="" className={styles.card}>
            <h2> Resume <sub> 📄 </sub>&rarr;</h2>
            <p> COMING SOON! </p>
          </a>
        </div>

      </main>
    </div>
  )
}
