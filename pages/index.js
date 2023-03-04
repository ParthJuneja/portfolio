import Head from "next/head";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import Avatar from "@/components/Avatar";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (  
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Parth Juneja Portfolio</title>
        <meta name="keywords" content="web development, programming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-light_bg px-10 md:px-20 lg:px-40 dark:bg-back">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons text-light_front dark:text-fore">
              PJ
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-xl dark:text-pale"
                />
              </li>
              <li>
                {" "}
                <a
                  className="bg-gradient-to-r from-light_mid2 to-light_accent text-black px-4 py-2 rounded-md ml-8 dark:bg-gradient-to-r dark:from-pale dark:to-calm dark:text-black "
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 font-medium text-light_front md:text-6xl lg:text-8xl dark:text-fore">
              Parth Juneja
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl lg:text-4xl text-light_mid2 dark:text-sand">
              Front End Developer, Machine Learning 
            </h3>
            <p className=" text-md py-5 leading-8 text-light_front md: text-xl mx-auto max-w-xl lg:text-2xl lg:max-w-2xl dark:text-mud">
              Hi, I'm Parth, a developer from India. I'm currently studying
              pursuing Undergrad in Comp Sci. and I love to code.
            </p>
          </div>
          <div className="text-5xl justify-center flex gap-16 py-3 text-light_front dark:text-calm">
            <AiFillTwitterCircle className="hover:opacity-60 hover:text-mid2" />
            <AiFillGithub className="hover:opacity-60 hover:text-mid2" />
            <AiFillLinkedin className="hover:opacity-60 hover:text-mid2" />
          </div>

          <Avatar />
        </section>

        <Services />

        <Skills />

        <Projects />
      </main>
    </div>
  );
}
