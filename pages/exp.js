import Head from 'next/head'
import NextImage from "next/image";
import { useRouter } from 'next/router';
import {Card, CardHeader, Divider, Image, CardFooter, CardBody, Button} from "@nextui-org/react";
import COD from '../pictures/MW3_1.jpg'
import minecraft from '../pictures/cube.jpg'  
import sledge from '../pictures/sledgeHammer.jpg'
import SU from '../pictures/seaRed.png'
import snakeIcon from '../pictures/snake.jpg'

// Starting to work on this page
export default function ExperiencePage() {
  const router = useRouter();

  const handleCardPress = (url) => {
    router.push(url)
  };

  const list = [
    {
      url: "http://localhost:3000/exp",
      company: "Activision - Sledgehammer Games",
      position: "Associate Gameplay Engineer",
      img: COD, // can't directly use the path, img won't show up on live 
      location: "Foster City, CA",
      date: "Sept 2023 - Present",
    },
    {
      url: "http://localhost:3000/exp",
      company: "Activision - Sledgehammer Games",
      position: "Gameplay Engineer Intern",
      img: sledge,
      location: "Foster City, CA",
      date: "June 2022 - Sept 2022",
    },
    {
      url: "http://localhost:3000/exp",
      company: "Seattle University - Computer Science Department",
      position: "Teaching Assistant",
      img: SU,
      location: "Seattle, WA",
      date: "Sept 2022 - June 2023",
    },
    {
      url: "http://localhost:3000/exp",
      company: "Seattle University - Computer Science Department",
      position: "Tutor",
      img: SU,
      location: "Seattle, WA",
      date: "Sept 2022 - June 2023",
    },
    {
      url: "http://localhost:3000/exp",
      company: "Price Tech Press",
      position: "Game Designer and Technical Writer Intern",
      img: snakeIcon,
      location: "Remote",
      date: "Sept 2020 - Jan 2021",
    },
    {
      url: "http://localhost:3000/exp",
      company: "Microsoft - Mojang Studios",
      position: "Software Engineer Intern",
      img: minecraft,
      location: "Redmond, WA",
      date: "June 2019 - Sept 2019",
    },
    {
      url: "http://localhost:3000/exp",
      company: "Microsoft - Mojang Studios",
      position: "Software Engineer Intern",
      img: minecraft,
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

        {/* TODO: Convert tailwind css to standard css into global */}
        {/* TODO: Figure out spacing between title and grid */}

        <div className="max-w-[800px] gap-2 row-3 grid justify-items-center px-8 sm:grid-cols-2 md:grid-cols-3 ">
          {list.map((item, index) => (
            <Card key={index}> 
              <CardHeader className='h-20 pt-5 pl-4'> 
                <div className="flex flex-col">
                  <p className="text-lg">{item.company}</p>
                  <p className="text-small text-default-500">{item.position}</p>
                </div>
              </CardHeader>
              <Divider/>
              <CardBody className='p-0'>
                <Image
                    radius='none'
                    as={NextImage}
                    removeWrapper
                    alt={item.company}
                    className="z-0 w-full h-full object-cover opacity-100"
                    src={item.img}
                  />
              </CardBody>
              <Divider/>
              <CardFooter>
                <div className="flex flex-grow gap-2">
                  <div className="flex flex-col items-start">
                    <p className="text-xs">{item.location}</p>
                    <p className="text-xs">{item.date}</p>
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