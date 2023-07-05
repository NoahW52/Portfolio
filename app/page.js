"use client"
import Head from "next/head";
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Image from "next/image";
import deved from '../images/20230427_144601.jpg'
import legoProject from '../images/brickBybrickSC.png'
import starWarsEnc from '../images/starwarsEnc.png'
import ezGoPhoto from '../images/EzGo-photo.png'
import { useState } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Home() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_66mpnaq', 'template_zrvzptj', form.current, 'IjsCVPh9P9M7ZczUd')
      .then((result) => {
        console.log(result.text);
        e.target.reset()
      }, (error) => {
        console.log(error.text);
      });
  };

  const [darkMode, setDarkMode] = useState(false)
  return (

    <div className={darkMode ? 'dark' : ''}>
      <Head>

      </Head>


      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section className="">
          <nav className="py-2 mb-12 flex justify-between">
            <div className="text-5xl flex justify-center ml-4 gap-5 py-3 text-gray-600">
              <a href="https://www.linkedin.com/in/noah-wright-5a5326219/" target="_blank">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/NoahW52" target="_blank">
                <AiFillGithub />
              </a>
            </div>
            <ul className="flex items-center">
              <li>
                <a className="bg-cyan-500 text-white px-4 py-2 rounded-md ml-8" href="/resume.pdf" target="_blank">Resume</a>
              </li>
            </ul>
          </nav>
          <div className="text-center">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Noah Wright</h2>
            <h3 className="text-2xl py-2 md:text-3xl">Full-stack developer</h3>
          </div>
          <div className="flex flex-col pt-10 xl:flex-row gap-10 justify-between text-center">
            <div className="relative mx-auto rounded-full">
              <Image className=" rounded-full" src={deved} alt="headshot" width={1000} />
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-2xl py-2 md:text-xl">The Woodlands, Texas</h3>
                <h3 className="text-2xl py-2 md:text-xl">noahthomaswright01@gmail.com</h3>
                <h3 className="text-2xl py-2 md:text-xl">(936) 520-9576</h3>
              </div>
            </div>
            <div className="flex">
              <p className=" text-lg leading-8 text-gray-800">As a recent graduate of DigitalCrafts bootcamp, I have a strong skillset in full-stack web development, specializing in JavaScript, React, Next.js, and Mongoose. I thrive in team environments, delivering projects and fostering positive relationships with fellow developers. My passion for technology and constant curiosity drive my journey in web development. I enjoy exploring new technologies and embracing the challenge of learning something new. I am committed to staying ahead in this ever-evolving field by expanding my knowledge and honing my skills. I am excited to apply my expertise in creating innovative web applications. With my dedication to ongoing learning, technological passion, and attention to detail, I am a valuable asset to any team. I am eager to contribute to challenging projects and collaborate with like-minded individuals in pushing the boundaries of web development.</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h1 className=" flex text-teal-600 text-5xl flex-wrap justify-center p-10 font-bold">Skills</h1>
          </div>
          <div className="flex justify-center gap-5 flex-wrap">
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"> <img alt="" className="w-20 h-20 hover:scale-125 transition-transform duration-200" src='/html5-icon.svg' /></a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"> <img alt="" className="w-20 h-20 hover:scale-125 transition-transform duration-200" src='/css3-icon.svg' /></a>
            <a href="https://expressjs.com/" target="_blank"> <img alt="" className="w-20 h-20 hover:scale-125 transition-transform duration-200" src='/expressjs-icon.svg' /></a>
            <a href="https://nodejs.org/en/docs" target="_blank"> <img alt="" className="w-20 h-20 hover:scale-125 transition-transform duration-200" src='/nodejs-icon.svg' /></a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img alt="" className="w-20 h-20 hover:scale-125 transition-transform duration-200" src='/js.png' /></a>
            <a href="https://www.mongodb.com/" target="_blank"> <img alt="" className="w-20 h-20 hover:scale-125 transition-transform duration-200" src='/mongodb-icon.svg' /></a>
            <a href="https://www.postgresql.org/docs/" target="_blank"> <img alt="" className="w-20 h-20 hover:scale-125 transition-transform duration-200" src='/postgresql.png' /></a>
            <a href="https://react.dev/" target="_blank"> <img alt="" className="w-20 h-20 hover:scale-125 transition-transform duration-200" src='reactjs-icon.svg' /></a>
            <a href="https://redux.js.org/" target="_blank"> <img alt="" className="w-20 h-20 hover:scale-125 transition-transform duration-200" src='redux-icon.svg' /></a>
            <a href="https://nextjs.org/" target="_blank"> <img alt="" className="w-20 h-20 hover:scale-125 transition-transform duration-200" src='/next.svg' /></a>
            <a href="https://socket.io/" target="_blank"> <img alt="" className="w-20 h-20 hover:scale-125 transition-transform duration-200" src='/socket_io.png' /></a>
            <a href="https://getbootstrap.com/" target="_blank"> <img alt="" className="w-20 h-20 hover:scale-125 transition-transform duration-200" src='/bootstrap-icon.svg' /></a>
            <a href="https://tailwindcss.com/" target="_blank"> <img alt="" className="w-20 h-20 hover:scale-125 transition-transform duration-200" src='/tailwindcss-icon.svg' /></a>
          </div>
        </section>


        <section className="flex flex-col items-center justify-center gap-5">
          <div>
            <h3 className=" flex text-teal-600 text-5xl flex-wrap justify-center p-10 font-bold">Projects</h3>
          </div>
          <div className="flex justify-between gap-10 flex-col items-center lg:flex-row">
            <div className="basis-1/3 flex-1 hover:scale-105 transition-transform duration-200">
              <a href="https://brickbybrick.vercel.app/" target="_blank">
                <h3>brickBybrick: Lego collection app</h3>
                <Image alt="" src={legoProject} width={'100%'} height={'100%'} className="rounded-lg object-cover shadow-2xl" />
              </a>
            </div>
            <div className="basis-1/3 flex-1 hover:scale-105 transition-transform duration-200">
              <a href="https://starwarsencyclopedia.surge.sh/" target="_blank">
                <h3>Star Wars encyclopedia</h3>
                <Image alt="" src={starWarsEnc} width={'100%'} height={'100%'} className="rounded-lg object-cover shadow-2xl" />
              </a>
            </div>
            <div className="basis-1/3 flex-1 hover:scale-105 transition-transform duration-200">
              <a href="https://ezgo.vercel.app/" target="_blank">
                <h3>Sustaianable Transportation</h3>
                <Image alt="" src={ezGoPhoto} width={'100%'} height={'100%'} className="rounded-lg object-cover shadow-2xl" />
              </a>
            </div>
          </div>
        </section>

        <section className="flex justify-center items-center p-16">
          <div className="p-5 bg-gray-300 rounded-lg max-w-md mx-auto shadow-2xl">
            <h1 className="flex justify-center text-3xl py-1">Contact Me!</h1>
            <div className="flex justify-between">
              <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-2">
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" className="cursor-pointer" />
              </form>
            </div>
          </div>
        </section>

        <div>

        </div>

      </main>
    </div>

  )
}

