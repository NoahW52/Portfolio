import Head from "next/head";
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Image from "next/image";
import deved from '../images/20230427_144601.jpg'
import legoProject from '../images/brickBybrickSC.png'
import starWarsEnc from '../images/starwarsEnc.png'

export default function Home() {
  return (

    <div>
      <Head>

      </Head>


      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">Developedbyed</h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill className="cursor-pointer text-2xl" /></li>
              <li>
                <a className="bg-cyan-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">Noah Wright</h2>
            <h3 className="text-2xl py-2">Full-stack developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">This my about me with information I will put later</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
          <div className="relative mx-auto rounded-full w-80 mt-20">
            <Image className="relative rounded-full" src={deved} />
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


        <section className="flex justify-center gap-5 ">
          <div>
            <h3 className="text-3xl py-1">Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800">Some more text that i might add about my projects</p>
          </div>
          <div className="flex justify-between gap-5">
            <div className="text-center shadow-lg p-10 rounded-xl">
              <Image src={legoProject} width={300} height={300} className="pb-5" />
              <h3>brickBybrick: Lego collection app</h3>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl hover:scale-110 transition-transform duration-300">
              <Image src={starWarsEnc} width={300} height={300} className="pb-5" />
              <h3>A Star Wars encyclopedia</h3>
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

