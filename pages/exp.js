import Head from 'next/head'
import NextImage from "next/image";
import { useState, useEffect, React } from 'react';
import {Card, CardHeader, Divider, Image, CardFooter, CardBody, Button, Spacer, useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter} from "@nextui-org/react";

// *Note: There is combined tailwind css and standard css from global.css being used in this file 
export default function ExperiencePage() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scrollers);
    }
  }, []);

  function addAnimation(scrollers) {
    scrollers.forEach((scroller) => {
      // add data-animated="true" to every `.scroller` on the page
      scroller.setAttribute("data-animated", true);
  
      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);
  
      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller-inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }


  const list = [
    {
      url: "https://isabeltovalles.com/exp",
      company: "Activision - Sledgehammer Games",
      position: "Associate Gameplay Engineer",
      cardImg: "/exp/MW3.jpg",
      location: "Foster City, CA",
      date: "Sept 2023 - Present",
      bulletPoints: [
        "Developing gameplay features in Call of Duty's C++ based game engine for premium titles and live season",
        "Resolving multiplayer gameplay issues to ensure intended functionality and enhance the gameplay experience",
        "Supporting the gameplay design team to create new features",
        "Reviewing and providing feedback to proposed solutions for multiplayer gameplay issues",
        "Shipped Titles: Call of Duty: Modern Warfare 3 (2023), Call of Duty: Black Ops 6, Call of Duty: Warzone",
      ],
      modalImgs: [
      ]
    },
    {
      url: "https://isabeltovalles.com/exp",
      company: "Activision - Sledgehammer Games",
      position: "Gameplay Engineer Intern",
      cardImg: "/exp/sledgeHammer.jpg",
      location: "Foster City, CA",
      date: "June 2022 - Sept 2022",
      bulletPoints: [
        "Developed a prototype gameplay feature for Call of Duty: Modern Warfare 3 (2023)",
        "Implemented the prototype using Call of Duty's proprietary scripting language, similar to Python and C",
        "Collaborated closely with the design team, incorporating their feedback into the development of the prototype",
      ],
      modalImgs: [
      ]
    },
    {
      url: "https://isabeltovalles.com/exp",
      company: "Seattle University - Computer Science Department",
      position: "Teaching Assistant",
      cardImg: "/exp/seaRed.png",
      location: "Seattle, WA",
      date: "Sept 2022 - June 2023",
      bulletPoints: [
        "Graded projects and labs for multiple courses of 30-35 students while providing detailed feedback",
        "Led weekly office hours to help students with assignments or to review programming concepts",
        "Provided feedback to course instructors regarding their projects and labs",
      ],
      modalImgs: [
      ]
    },
    {
      url: "https://isabeltovalles.com/exp",
      company: "Seattle University - Computer Science Department",
      position: "Tutor",
      cardImg: "/exp/seaRed.png",
      location: "Seattle, WA",
      date: "Sept 2022 - June 2023",
      bulletPoints: [
        "Led dropped in tutoring hours to support students in the introduction courses",
        "Helped students debug their coding assignments or review programming concepts",
        "Created sample coding questions for students to use when reviewing for exams",
      ],
      modalImgs: [
      ]
    },
    {
      url: "https://isabeltovalles.com/exp",
      company: "Price Tech Press",
      position: "Game Designer and Technical Writer Intern",
      cardImg: "/exp/snake.jpg",
      location: "Remote",
      date: "Sept 2020 - Jan 2021",
      bulletPoints: [
        "Designed a game prototype for the book IncrediCoders: Python Adventures",
        "Authored and revised 4 wiki pages for the book's code repository",
        "Reviewed and provided feedback for the author's storyline and text",
        "Researched Python-related libraries, tools, and technology, including Visual Studio Code and Pygames",
      ],
      modalImgs: [
      ]
    },
    {
      url: "https://isabeltovalles.com/exp",
      company: "Microsoft - Mojang Studios",
      position: "Software Engineer Intern",
      cardImg: "/exp/cube.jpg",
      location: "Redmond, WA",
      date: "June 2019 - Sept 2019",
      bulletPoints: [
        "Developed a Minecraft mini-game called Boba Dash on a 5-person intern team",
        "Led the gameplay design of Boba Dash, collaborating with engineers and artists",
        "Implemented custom animations and behaviors for a game entity in C++ and JSON",
      ],
      modalImgs: [
        "/exp/all_icons.png",
        "/exp/customer_with_skin.png",
        "/exp/spawn_customer_item.png"
      ]
    },
    {
      url: "https://isabeltovalles.com/exp",
      company: "Microsoft - Mojang Studios",
      position: "Software Engineer Intern",
      cardImg: "/exp/cube.jpg",
      location: "Redmond, WA",
      date: "June 2018 - Aug 2018",
      bulletPoints: [
        "Ported the mini-game Glide from the Xbox 360 version of Minecraft into Bedrock Edition with another intern",
        "Designed the pre-game features of Glide",
        "Implemented pre-game features including spawn points, countdown timer, and immobilization of players in C++",
      ],
      modalImgs: [
      ]
    },
  ];

  const frameworks = [
    "C++",
    "C",
    "C#",
    "Java",
    "JavaScript",
    "Node.js",
    "React.js",
    "Python",
    "Go",
  ];

  const tools = [
    "Perforce",
    "Helix Swarm",
    "Git",
    "Github",
    "Visual Studio Code",
    "Visual Studio",
    "IntelliJ",
    "CLion",
    "Jira",
  ]

  const openModal = (item) => {
    setCurrentItem(item);
    onOpen();
  };

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
            <Card key={index} className="w-full"> 
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
                    src={item.cardImg}
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
                    {currentItem.bulletPoints.map((point, index) => (        
                        <li key={index}>{point}</li>
                    ))}
                      {currentItem.modalImgs.map((img, index) => (
                        <Image
                          key={index}
                          alt={currentItem.company}
                          src={img}
                          width={400}
                          height={400}
                        />
                      ))}
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

        <Spacer y={10} /> 
        
        {/* Infinte Scrolling Carousel */}
        <h1 className='title'> Languages / Frameworks / Technologies </h1>
        <div className="scroller" data-direction="left" data-speed="slow">
          <ul className="tag-list scroller__inner ">
            {frameworks.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <h1 className='title'> Tools </h1>
        <div className="scroller" data-direction="right" data-speed="slow">
          <ul className="tag-list scroller__inner ">
            {tools.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}