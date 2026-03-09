import Head from 'next/head'

export default function SocialsPage() {
  return (
    <div className="container">
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

          <a target="_blank" href="https://www.bobatalks.com/mentors" className="card">
            <h2> 🧋 BobaTalks &rarr;</h2>
            <p> My mentor page for BobaTalks. If you're a current student looking to connect, check out Boba Talks to schedule a 1:1 with me. To find me, make sure to select the "Gaming" option under "Industry".</p>
          </a>

          <a target="_blank" href="https://www.linkedin.com/in/isabel-t-ovalles/" className="card">
            <h2> 🔗 LinkedIn &rarr;</h2>
            <p> Connect with me!</p>
          </a>

           <a target="_blank" href="https://github.com/kidlatmc29" className="card">
              <h2> 💻 Github &rarr;</h2>
              <p> Repos of my uni days and personal projects. </p>
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
