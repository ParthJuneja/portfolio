import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
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

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-back">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-fore">
              developedbyparth
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
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 dark:bg-gradient-to-r dark:from-pale dark:to-calm dark:text-black "
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 font-medium text-teal-600 md:text-6xl lg:text-8xl dark:text-fore">
              Parth Juneja
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl lg:text-4xl dark:text-sand">
              Developer, Student
            </h3>
            <p className=" text-md py-5 leading-8 text-gray-800 md: text-xl mx-auto max-w-xl lg:text-2xl lg:max-w-2xl dark:text-mud">
              Hi, I'm Parth, a developer from India. I'm currently studying
              pursuing Undergrad in Comp Sci. and I love to code.
            </p>
          </div>
          <div className="text-5xl justify-center flex gap-16 py-3 text-gray-600 dark:text-calm">
            <AiFillTwitterCircle className="hover:opacity-60 hover:text-mid2" />
            <AiFillGithub className="hover:opacity-60 hover:text-mid2" />
            <AiFillLinkedin className="hover:opacity-60 hover:text-mid2" />
          </div>
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80  mt-20 mx-auto overflow-hidden dark:bg-gradient-to-b dark:from-pale dark:to-sand">
            <Image src={deved} fill objectFit="cover" />
          </div>
        </section>

        <section>
          <div className="flex-col justify-center">
            <h3 className="text-3xl py-1 dark:text-fore">Services I offer</h3>
            <p className=" text-md py-5 leading-8 text-gray-800 dark:text-mid2">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              magnam atque sint, rerum aspernatur quod illo quo voluptas
              voluptates nihil nemo officia earum. Unde totam sapiente
              cupiditate aliquid molestiae inventore.{" "}
            </p>
          </div>
        </section>

        <section>
          <div className="flex-col justify-center">
            <h3 className="text-3xl py-1 dark:text-fore">Skills I have</h3>
            <p className=" text-md py-5 leading-8 text-gray-800 dark:text-mid2">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              magnam atque sint, rerum aspernatur quod illo quo voluptas
              voluptates nihil nemo officia earum. Unde totam sapiente
              cupiditate aliquid molestiae inventore.{" "}
            </p>
          </div>

          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-mid1">
              <Image
                src={design}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-fore">
                Beautfiul Designs
              </h3>
              <p className="dark:text-mid2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maxime, vitae nisi, dolor quidem tenetur voluptatibus laborum
                labore placeat harum architecto voluptas hic a possimus, nemo
                earum accusantium quasi aspernatur totam.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-pinkish">Design tools i use</h4>
              <p className="text-gray-800 py-1 dark:text-calm">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-calm">VS code</p>
              <p className="text-gray-800 py-1 dark:text-calm">ML</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-mid1">
              <Image
                src={design}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-fore">
                Beautfiul Designs
              </h3>
              <p className="dark:text-mid2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maxime, vitae nisi, dolor quidem tenetur voluptatibus laborum
                labore placeat harum architecto voluptas hic a possimus, nemo
                earum accusantium quasi aspernatur totam.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-pinkish">Design tools i use</h4>
              <p className="text-gray-800 py-1 dark:text-calm">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-calm">VS code</p>
              <p className="text-gray-800 py-1 dark:text-calm">ML</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-mid1">
              <Image
                src={design}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-fore">
                Beautfiul Designs
              </h3>
              <p className="dark:text-mid2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maxime, vitae nisi, dolor quidem tenetur voluptatibus laborum
                labore placeat harum architecto voluptas hic a possimus, nemo
                earum accusantium quasi aspernatur totam.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-pinkish">Design tools i use</h4>
              <p className="text-gray-800 py-1 dark:text-calm">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-calm">VS code</p>
              <p className="text-gray-800 py-1 dark:text-calm">ML</p>
            </div>
          </div>

          {/* // this is the section for the projects */}
          <div className="flex flex-col gap-10 py-10 lg:flex-row flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover "
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                className="rounded-lg object-cover "
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                className="rounded-lg object-cover "
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                className="rounded-lg object-cover "
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                className="rounded-lg object-cover "
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                className="rounded-lg object-cover "
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
