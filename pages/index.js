import Head from "next/head";
import {BsFillMoonStarsFill} from "react-icons/bs";
import {AiFillTwitterCircle} from "react-icons/ai";
import {AiFillGithub} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";
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



export default function Home() {
  return (
    <div>
      <Head>
        <title>Parth Juneja Portfolio</title>
        <meta name="keywords" content="web development, programming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 ">
        <section className="min-h-screen"> 
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">developedbyparth</h1>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill className="cursor-pointer text-xl"/>
                </li> 
                <li> <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a></li>
              </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 font-medium text-teal-600">Parth Juneja</h2>
            <h3 className="text-2xl py-2">Developer, Student</h3>
            <p className=" text-md py-5 leading-8 text-gray-800">Hi, I'm Parth, a developer from India. I'm currently studying pursuing Undergrad in Comp Sci. and I love to code.</p>
          </div>
          <div className="text-5xl justify-center flex gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle/>
            <AiFillGithub/>
            <AiFillLinkedin/>
          </div>
          <div className="relative bg-gradient-to-b from-teal-500  rounded-full w-80 h-80  mt-20 mx-auto overflow-hidden">
            <Image src={deved} fill objectFit="cover"/>
          </div>
        </section>  

        <section>
          <div className="flex-col justify-center">
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className=" text-md py-5 leading-8 text-gray-800"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magnam atque sint, rerum aspernatur quod illo quo voluptas voluptates nihil nemo officia earum. Unde totam sapiente cupiditate aliquid molestiae inventore. </p>
          </div>
        </section>
        
        <section>
          <div className="flex-col justify-center">
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className=" text-md py-5 leading-8 text-gray-800"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magnam atque sint, rerum aspernatur quod illo quo voluptas voluptates nihil nemo officia earum. Unde totam sapiente cupiditate aliquid molestiae inventore. </p>
          </div>

          <div>


            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src = {design} width={100} height={100} className='mx-auto'/>
              <h3 className="text-lg font-medium pt-8 pb-2">Beautfiul Designs</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, vitae nisi, dolor quidem tenetur voluptatibus laborum labore placeat harum architecto voluptas hic a possimus, nemo earum accusantium quasi aspernatur totam.</p>
              <h4 className="py-4 text-teal-600">Design tools i use</h4>
              <p className="text-gray-800 py-1">Photoshop</p> 
              <p className="text-gray-800 py-1">VS code</p> 
              <p className="text-gray-800 py-1">ML</p> 
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src = {design} width={100} height={100} className='mx-auto'/>
              <h3 className="text-lg font-medium pt-8 pb-2">Beautfiul Designs</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, vitae nisi, dolor quidem tenetur voluptatibus laborum labore placeat harum architecto voluptas hic a possimus, nemo earum accusantium quasi aspernatur totam.</p>
              <h4 className="py-4 text-teal-600">Design tools i use</h4>
              <p className="text-gray-800 py-1">Photoshop</p> 
              <p className="text-gray-800 py-1">VS code</p> 
              <p className="text-gray-800 py-1">ML</p> 
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src = {design} width={100} height={100} className='mx-auto'/>
              <h3 className="text-lg font-medium pt-8 pb-2">Beautfiul Designs</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, vitae nisi, dolor quidem tenetur voluptatibus laborum labore placeat harum architecto voluptas hic a possimus, nemo earum accusantium quasi aspernatur totam.</p>
              <h4 className="py-4 text-teal-600">Design tools i use</h4>
              <p className="text-gray-800 py-1">Photoshop</p> 
              <p className="text-gray-800 py-1">VS code</p> 
              <p className="text-gray-800 py-1">ML</p> 
            </div>

          </div>

          {/* // this is the section for the projects */}
          <div>
            <div>
              <Image src={web1}/>
            </div>
            <div>
              <Image src={web2}/>
            </div>
            <div>
              <Image src={web3}/>
            </div>
            <div>
              <Image src={web4}/>
            </div>
            <div>
              <Image src={web5}/>
            </div>
            <div>
              <Image src={web6}/>
            </div>
          </div>
        </section>
      </main>
    </div>
  );

}