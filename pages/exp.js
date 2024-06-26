import Head from 'next/head'
import Image from 'next/image'
 
export default function ExperiencePage() {
  return (
    <div className="mx-auto px-8 flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>ito&apos;s work experience</title>
        <meta name="description" content="ito" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">
          Experience <sub> 🧋 </sub>
        </h1>
        {/* Alen was here */}
        <p className="description aboutme">
          work in progress 
        </p>

      </main>
    </div>
  )
}