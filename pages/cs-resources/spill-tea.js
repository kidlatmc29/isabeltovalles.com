import Head from 'next/head'
import Image from 'next/image'

export default function ResourcesPage() {
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
          Spill the Tea Resources <sub> 🧋 </sub>
        </h1>

        <div className="grid">
          <a href="https://seattleu.instructure.com/courses/1600628" className="card">
            <h2> SU CS Department Canvas &rarr;</h2>
            <p>Resources to start, revise, or get feedback on your resumes.</p>
          </a>

          <a href="https://www.seattleu.edu/careerengagement/students--recent-graduates/" className="card">
            <h2> SU Career Engagement Office &rarr;</h2>
            <p> Get one-on-one coaching with everything and everything. 
                Their services include resume building, job searching, interview prep, and mock interviews. 
            </p>
          </a>

          <div className="card"> 
            <h2> Job Boards 🪧 </h2>
            <p> I recommend Handshake, LinkedIn, and Indeed for finding internships/jobs.
                They have pretty robust filters and searching for the positions you&apos;re looking for
                and to see if you meet the requirements of a position.  
            </p>
      
          </div> 

          <div className="card"> 
            <h2> Full Recording 📹 </h2>
            <p> COMING SOON! (I apologize for the delay, the past few months have been hectic...)  
            </p>
      
          </div> 
    
          
        </div>

      </main>
    </div>
  )
}
