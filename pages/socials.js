import Head from 'next/head'

export default function SocialsPage() {
  return (
    <div className="mx-auto px-8 flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>ito</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <main className="main">
        <h1 className="title">
          My Socials! <sub> 👥 </sub>
        </h1>

        <div className="grid">

          <a target="_blank" href="https://github.com/kidlatmc29" className="card">
              <h2> 💻 Github &rarr;</h2>
              <p> Repos of my uni days and personal projects. </p>
          </a>

          <a target="_blank" href="https://www.linkedin.com/in/isabel-t-ovalles/" className="card">
            <h2> 🔗 LinkedIn &rarr;</h2>
            <p> Connect with me!</p>
          </a>

          <a target="_blank" href="https://youtube.com/@ozabell" className="card">
            <h2> 📺 YouTube &rarr;</h2>
            <p> Mostly videos from my college courses and cs related videos.</p>
          </a>
        </div> 
      </main>
    </div>
  )
}
