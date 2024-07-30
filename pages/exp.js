import Head from 'next/head'
import NextImage from "next/image";
import { useRouter } from 'next/router';
import {Card, CardHeader, Divider, Image, CardFooter, CardBody, Button} from "@nextui-org/react";

// *Note: There is combined tailwind css and standard css from global.css being used in this file 
export default function ExperiencePage() {
  const router = useRouter();

  const handleCardPress = (url) => {
    router.push(url)
  };

  const list = [
    {
      url: "https://isabeltovalles.com/exp",
      company: "Activision - Sledgehammer Games",
      position: "Associate Gameplay Engineer",
      img: "/exp/MW3.jpg", 
      location: "Foster City, CA",
      date: "Sept 2023 - Present",
    },
    {
      url: "https://isabeltovalles.com/exp",
      company: "Activision - Sledgehammer Games",
      position: "Gameplay Engineer Intern",
      img: "/exp/sledgeHammer.jpg",
      location: "Foster City, CA",
      date: "June 2022 - Sept 2022",
    },
    {
      url: "https://isabeltovalles.com/exp",
      company: "Seattle University - Computer Science Department",
      position: "Teaching Assistant",
      img: "/exp/seaRed.png",
      location: "Seattle, WA",
      date: "Sept 2022 - June 2023",
    },
    {
      url: "https://isabeltovalles.com/exp",
      company: "Seattle University - Computer Science Department",
      position: "Tutor",
      img: "/exp/seaRed.png",
      location: "Seattle, WA",
      date: "Sept 2022 - June 2023",
    },
    {
      url: "https://isabeltovalles.com/exp",
      company: "Price Tech Press",
      position: "Game Designer and Technical Writer Intern",
      img: "/exp/snake.jpg",
      location: "Remote",
      date: "Sept 2020 - Jan 2021",
    },
    {
      url: "https://isabeltovalles.com/exp",
      company: "Microsoft - Mojang Studios",
      position: "Software Engineer Intern",
      img: "/exp/cube.jpg",
      location: "Redmond, WA",
      date: "June 2019 - Sept 2019",
    },
    {
      url: "https://isabeltovalles.com/exp",
      company: "Microsoft - Mojang Studios",
      position: "Software Engineer Intern",
      img: "/exp/cube.jpg",
      location: "Redmond, WA",
      date: "June 2018 - Aug 2018",
    },
  ]

  return (
    <div className="container">
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

        {/* TODO: Figure out spacing between experince title and card grid */}

        <div className="expGrid">
          {list.map((item, index) => (
            <Card key={index}> 
              <CardHeader className='expHeaderOuter'> 
                <div className="expHeaderInner">
                  <p className="text-lg">{item.company}</p>                       {/* Tailwind css */}
                  <p className="text-small text-default-500">{item.position}</p>  {/* Tailwind css */}
                </div>
              </CardHeader>
              <Divider/>
              <CardBody className='p-0'>
                <Image
                    as={NextImage}
                    className="expImage"
                    removeWrapper
                    radius='none'
                    alt={item.company}
                    src={item.img}
                    width={720}
                    height={720}
                  />
              </CardBody>
              <Divider/>
              <CardFooter>
                <div className="expFooterOuter">
                  <div className="expFooterInner">
                    <p className="text-xs">{item.location}</p>  {/* Tailwind css */}
                    <p className="text-xs">{item.date}</p>      {/* Tailwind css */}
                  </div>
                </div>
                <Button radius="full" size="sm" onPress={() => handleCardPress(item.url)}>Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}