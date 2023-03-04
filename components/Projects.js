import React from "react";
import Image from "next/image";

import instagram from "../public/instagram.png";
import whatsapp from "../public/whatsapp.png";

function Projects() {
  return (
    <section>
      <h1 className="mx-auto font-bold w-fit text-3xl pt-10 pb-5 text-light_front lg:text-4xl dark:text-fore">
        My Projects
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
        <div className="flex-0.9 p-10 hover:opacity-60 cursor-pointer">
          <a href="https://github.com/ParthJuneja/whatsapp-clone" target="_blank">
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
