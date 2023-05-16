import Head from "next/head";
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillLinkedin,AiFillGithub } from 'react-icons/ai'
import Image from "next/image";
import deved from './20230427_144601.jpg'
import legoProject from './brickBybrickSC.png'
import starWarsEnc from './starwarsEnc.png'

export default function Home() {
  return (
    
    <div>
      <Head>

      </Head>

    
    <main className="bg-white px-10 ">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl">Developedbyed</h1>
          <ul className="flex items-center">
            <li><BsFillMoonStarsFill className="cursor-pointer text-2xl"/></li>
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
          <AiFillLinkedin/>
          <AiFillGithub/>
        </div>
          <div className="relative mx-auto rounded-full w-80 mt-20">
            <Image className="relative rounded-full" src={deved}/>
          </div>
      </section>


      <section>
        <div>
          <h3 className="text-3xl py-1">Projects</h3>
          <p className="text-md py-2 leading-8 text-gray-800">Some more text that i might add about my projects</p>
        </div>
        <div>
          <div>
            <Image src={legoProject} width={300} height={300}/>
            <h3>brickBybrick: Lego collection app</h3>
            <Image src={starWarsEnc}/>
          </div>
        </div>
      </section>
    </main>
    </div>
  
  )
}

