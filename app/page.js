"use client"
import Head from "next/head";
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Image from "next/image";
import deved from '../images/20230427_144601.jpg'
import legoProject from '../images/brickBybrickSC.png'
import starWarsEnc from '../images/starwarsEnc.png'
import { useState } from "react";

export default function Home() {

  const [darkMode, setDarkMode] = useState(false)
  return (

    <div className={darkMode ? 'dark' : '' }>
      <Head>

      </Head>


      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">Developedbyed</h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl" /></li>
              <li>
                <a className="bg-cyan-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Noah Wright</h2>
            <h3 className="text-2xl py-2 md:text-3xl">Full-stack developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">This my about me with information I will put later</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
          <div className="relative mx-auto rounded-full w-80 mt-20">
            <Image className="relative rounded-full" src={deved} />
          </div>
          <div>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl mx-auto">
              As a new graduate of the prestigious DigitalCrafts bootcamp,I have developed a robust skillset in full-stack web development, with a strong emphasis on JavaScript, React, Next.js, and Mongoose. While developing skills in front-end and back-end technologies in my cohort, I also further grew my ability to work in a team. Delivering completed projects and building better relationships with every other developer I worked with along the way.</p>

            <p className="text-sm py-5 leading-8 text-gray-800 md:text-xl mx-auto">
              My journey into web development has been fueled by an insatiable curiosity and a genuine love for all things tech-related. I find immense joy in exploring new technologies and establishing permanent residency in the uncomfortability of trying something new. Constantly seeking opportunities for growth and learning, I am committed to expanding my knowledge and honing my skills to remain at the forefront of this ever-evolving field.
            </p>

            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl mx-auto">
              Outside of coding, one of my passions is building legos. The attention to detail required in building Lego resonates well with my approach to coding, where I strive for efficient solutions and discovering new ways to complete a task. This passion for Legos mirrors my dedication to crafting well-designed, user-friendly web experiences that leave a lasting impact on users.
            </p>

            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl mx-auto">
              I am excited about the prospect of applying my expertise to create innovative and impactful web applications. My commitment to ongoing learning, combined with my passion for technology and attention to detail, make me a valuable asset to any team. I am eager to contribute to challenging projects and collaborate with like-minded individuals in pushing the boundaries of web development.
            </p>

          </div>
        </section>

        <section>
          <div>
            <h1 className=" text-3xl justify-center">Skills</h1>
          </div>
          <div className="flex justify-center gap-5 flex-wrap">
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"> <img className="w-20 h-20 hover:scale-125 transition-transform duration-200" src='/html5-icon.svg' /></a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"> <img className="w-20 h-20 hover:scale-125 transition-transform duration-200" src='/css3-icon.svg' /></a>
            <a href="https://expressjs.com/" target="_blank"> <img className="w-20 h-20 hover:scale-125 transition-transform duration-200" src='/expressjs-icon.svg' /></a>
            <a href="https://nodejs.org/en/docs" target="_blank"> <img className="w-20 h-20 hover:scale-125 transition-transform duration-200" src='/nodejs-icon.svg' /></a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img className="w-20 h-20 hover:scale-125 transition-transform duration-200" src='/js.png' /></a>
            <a href="https://www.mongodb.com/" target="_blank"> <img className="w-20 h-20 hover:scale-125 transition-transform duration-200" src='/mongodb-icon.svg' /></a>
            <a href="https://www.postgresql.org/docs/" target="_blank"> <img className="w-20 h-20 hover:scale-125 transition-transform duration-200" src='/postgresql.png' /></a>
            <a href="https://react.dev/" target="_blank"> <img className="w-20 h-20 hover:scale-125 transition-transform duration-200" src='reactjs-icon.svg' /></a>
            <a href="https://redux.js.org/" target="_blank"> <img className="w-20 h-20 hover:scale-125 transition-transform duration-200" src='redux-icon.svg' /></a>
            <a href="https://nextjs.org/" target="_blank"> <img className="w-20 h-20 hover:scale-125 transition-transform duration-200" src='/next.svg' /></a>
            <a href="https://socket.io/" target="_blank"> <img className="w-20 h-20 hover:scale-125 transition-transform duration-200" src='/socket_io.png' /></a>
            <a href="https://getbootstrap.com/" target="_blank"> <img className="w-20 h-20 hover:scale-125 transition-transform duration-200" src='/bootstrap-icon.svg' /></a>
            <a href="https://tailwindcss.com/" target="_blank"> <img className="w-20 h-20 hover:scale-125 transition-transform duration-200" src='/tailwindcss-icon.svg' /></a>
          </div>
        </section>


        <section className="flex justify-center gap-5 lg:flex-row lg:flex-wrap">
          <div>
            <h3 className="text-3xl py-1">Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800">Some more text that i might add about my projects</p>
          </div>
          <div className="flex justify-between gap-10">
            <div className="basis-1/3 flex-1 hover:scale-105 transition-transform duration-200">
              <h3>brickBybrick: Lego collection app</h3>
              <Image src={legoProject} width={'100%'} height={'100%'} className="rounded-lg object-cover shadow-2xl"/>
            </div>
            <div className="basis-1/3 flex-1 hover:scale-105 transition-transform duration-200">
              <h3>A Star Wars encyclopedia</h3>
              <Image src={starWarsEnc} width={'100%'} height={'100%'} className="rounded-lg object-cover shadow-2xl" />
              <div className="p-10">

              </div>
            </div>
          </div>
        </section>

        <section>
          <div>

          </div>
        </section>

      </main>
    </div>

  )
}

