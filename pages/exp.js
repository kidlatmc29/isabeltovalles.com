import Head from 'next/head'
import NextImage from "next/image";
import { useState } from 'react';
import {Card, CardHeader, Divider, Image, CardFooter, CardBody, Button, Spacer, useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter} from "@nextui-org/react";

// *Note: There is combined tailwind css and standard css from global.css being used in this file 
export default function ExperiencePage() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [currentItem, setCurrentItem] = useState(null);

  const openModal = (item) => {
    setCurrentItem(item);
    onOpen();
  };

  const list = [
    {
      url: "https://isabeltovalles.com/exp",
      company: "Activision - Sledgehammer Games",
      position: "Associate Gameplay Engineer",
      img: "/exp/MW3.jpg",
      location: "Foster City, CA",
      date: "Sept 2023 - Present",
      bulletPoints: [
        "Resolving multiplayer gameplay issues to ensure intended functionality and enhance the gameplay experience",
        "Supporting the gameplay design team to create new features",
        "Reviewing proposed solutions for multiplayer gameplay issues",
        "Shipped Titles: Call of Duty: Modern Warfare 3 (2023)",
      ]
    },
    {
      url: "https://isabeltovalles.com/exp",
      company: "Activision - Sledgehammer Games",
      position: "Gameplay Engineer Intern",
      img: "/exp/sledgeHammer.jpg",
      location: "Foster City, CA",
      date: "June 2022 - Sept 2022",
      bulletPoints: [
        "Developed a prototype gameplay feature for Call of Duty: Modern Warfare 3 (2023)",
        "Implemented the prototype using Call of Duty's proprietary scripting language, similar to Python and C",
        "Collaborated closely with the design team, incorporating their feedback into the development of the prototype",
      ]
    },
    {
      url: "https://isabeltovalles.com/exp",
      company: "Seattle University - Computer Science Department",
      position: "Teaching Assistant",
      img: "/exp/seaRed.png",
      location: "Seattle, WA",
      date: "Sept 2022 - June 2023",
      bulletPoints: [
        "Graded projects and labs for multiple courses of 30-35 students while providing detailed feedback",
        "Led weekly office hours to help students with assignments or to review programming concepts",
        "Provided feedback to course instructors regarding their projects and labs",
      ]
    },
    {
      url: "https://isabeltovalles.com/exp",
      company: "Seattle University - Computer Science Department",
      position: "Tutor",
      img: "/exp/seaRed.png",
      location: "Seattle, WA",
      date: "Sept 2022 - June 2023",
      bulletPoints: [
        "Led dropped in tutoring hours to support students in the introduction courses",
        "Helped students debug their coding assignments or review programming concepts",
        "Created sample coding questions for students to use when reviewing for exams",
      ]
    },
    {
      url: "https://isabeltovalles.com/exp",
      company: "Price Tech Press",
      position: "Game Designer and Technical Writer Intern",
      img: "/exp/snake.jpg",
      location: "Remote",
      date: "Sept 2020 - Jan 2021",
      bulletPoints: [
        "Designed a game prototype for the book IncrediCoders: Python Adventures",
        "Authored and revised 4 wiki pages for the book's code repository",
        "Reviewed and provided feedback for the author's storyline and text",
        "Researched Python-related libraries, tools, and technology, including Visual Studio Code and Pygames",
      ]
    },
    {
      url: "https://isabeltovalles.com/exp",
      company: "Microsoft - Mojang Studios",
      position: "Software Engineer Intern",
      img: "/exp/cube.jpg",
      location: "Redmond, WA",
      date: "June 2019 - Sept 2019",
      bulletPoints: [
        "Developed a Minecraft mini-game called Boba Dash on a 5-person intern team",
        "Led the gameplay design of Boba Dash, collaborating with engineers and artists",
        "Implemented custom animations and behaviors for a game entity in C++ and JSON",
      ]
    },
    {
      url: "https://isabeltovalles.com/exp",
      company: "Microsoft - Mojang Studios",
      position: "Software Engineer Intern",
      img: "/exp/cube.jpg",
      location: "Redmond, WA",
      date: "June 2018 - Aug 2018",
      bulletPoints: [
        "Ported the mini-game Glide from the Xbox 360 version of Minecraft into Bedrock Edition with another intern",
        "Designed the pre-game features of Glide",
        "Implemented pre-game features including spawn points, countdown timer, and immobilization of players in C++",
      ]
    },
  ];

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

        <Spacer y={10} />

        <div className="expGrid">
          {list.map((item, index) => (
            <Card key={index}> 
              <CardHeader className='expHeaderOuter'> 
                <div className="expHeaderInner">
                  <p className="expCompany">{item.company}</p>                      {/* Tailwind css */}
                  <p className="text-small text-default-500">{item.position}</p>    {/* Tailwind css */}
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
                <Button radius="full" size="sm" onPress={() => openModal(item)}>Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Modal */}
        {currentItem && (
          <Modal 
            isOpen={isOpen} 
            onOpenChange={onOpenChange} 
            size='full'
           
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">{currentItem.position} at {currentItem.company}</ModalHeader>
                  <ModalBody>
                    {currentItem.bulletPoints.map((point, idx) => (        
                        <li key={idx}>{point}</li>
                    ))}
                    <Image
                      as={NextImage}
                      alt={currentItem.company}
                      src={currentItem.img}
                      width={400}
                      height={400}
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        )}
      </main>
    </div>
  )
}