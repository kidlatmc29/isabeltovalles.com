import Head from 'next/head'
import Image from 'next/image'

export default function ContactsPage() {
  return (
    <div className="container">
      <Head>
        <title>ito</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">
          Contact Me! <sub> 📱 </sub>
        </h1>

        <div className="grid">
          <a href="https://www.linkedin.com/in/isabel-t-ovalles/" className="card">
            <h2> LinkedIn &rarr;</h2>
            <p> Shoot me a message!</p>
          </a>

          <a href="" className="card">
            <h2> Email &rarr;</h2>
            <p> isabeltovalles@gmail.com </p>
          </a>
          </div> 
      </main>
    </div>
  )
}
