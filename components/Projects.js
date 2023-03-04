import React from "react";
import Image from "next/image";

import instagram from "../public/instagram.png";
import whatsapp from "../public/whatsapp.png";

function Projects() {
  return (
    <section>
      <h1 className="mx-auto font-bold w-fit text-3xl pt-10 pb-5 text-light_front lg:text-4xl dark:text-fore">
        Projects
      </h1>
      {/* // this is the section for the projects */}
      <div className="flex-row">
        <div className="flex-0.9 p-10 hover:opacity-60 cursor-pointer">
          <a href="https://github.com/ParthJuneja/insta-clone" target="_blank">
            <Image
              src={instagram}
              className="rounded-lg object-cover "
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </a>
        </div>
        <div className="relative flex-0.9 p-10 hover:opacity-60 cursor-pointer">
          <a
            href="https://github.com/ParthJuneja/whatsapp-clone"
            target="_blank"
          >
            <div
            class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-indigo-700 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
            <h1 class="text-2xl text-white">Fiction T-Shirt Store</h1>
            <a class="mt-5 px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-600 duration-300" href="#">Continue Shopping</a>
        </div>
            <Image
              src={whatsapp}
              className="rounded-lg object-cover "
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </a>
        </div>
      </div>

    </section>
  );
}

export default Projects;
