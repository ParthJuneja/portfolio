import React from "react";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import { HiSparkles } from "react-icons/hi";

function Skills() {
  return (
    <section>
      <div className="justify-center">
        <h3 className=" mx-auto font-bold w-fit text-3xl pt-10 pb-5 text-light_front lg:text-4xl dark:text-fore">
          Skills & Services
        </h3>
        <p className=" min-w-fit text-center text-md py-5 leading-8 lg:text-xl text-light_mid2 dark:text-mid2">
          {" "}
          I can help you build a responsive website from scratch. Be it Android
          apps or iOS apps, I can help provide clean, affordable solutions to
          your business requirements.{" "}
        </p>
      </div>

      <div className="lg:flex gap-10">
        <div className=" bg-fore  text-center shadow-lg p-10 rounded-xl my-10 dark:bg-mid1">
          <Image src={design} width={100} height={100} className="mx-auto" />
          <h3 className="text-lg text-light_front gray font-medium pt-8 pb-2 dark:text-fore">
            Beautfiul Designs
          </h3>
          <p className="text-light_front dark:text-mid2">
            Your websites and apps look modern and stylish with my designs. With
            styling from various frameworks and libraries, You can be sure that
            your website will look great on any device. Responsive, Clean,
            Eye-pleasing and Modern designs are my forte.
          </p>
          <h4 className="py-4 text-slate-800 dark:text-pinkish">
            <HiSparkles className="inline" /> Tools I Use:
          </h4>
          <p className="text-mud dark:text-calm pb-1">React Native/JS</p>
          <p className="text-mud dark:text-calm pb-1">TailWind CSS</p>
          <p className="text-mud dark:text-calm pb-1">Material UI</p>
          <p className="text-mud dark:text-calm pb-1">Canva</p>
        </div>

        <div className=" bg-fore  text-center shadow-lg p-10 rounded-xl my-10 dark:bg-mid1">
          <Image src={code} width={100} height={100} className="mx-auto" />
          <h3 className="text-lg text-light_front gray font-medium pt-8 pb-2 dark:text-fore">
            Robust Code
          </h3>
          <p className="text-light_front dark:text-mid2">
            With 3+ years of experience programming in Python, C++, JS. I can
            help you build a robust, scalable and secure codebase for your
            website or app. Perpetually adapting to new technologies and tech
            stacks is something I am good at.
          </p>
          <h4 className="py-4 text-slate-800 dark:text-pinkish">
            <HiSparkles className="inline" /> Languages and Tools:
          </h4>
          <p className="text-mud dark:text-calm pb-1">Rest APIs w/ Axios</p>
          <p className="text-mud dark:text-calm pb-1">PyTorch and SciLearn</p>
          <p className="text-mud dark:text-calm pb-1">Pandas and NumPy</p>
          <p className="text-mud dark:text-calm pb-1">MongoDB and MySQL</p>

        </div>

        <div className=" bg-fore  text-center shadow-lg p-10 rounded-xl my-10 dark:bg-mid1">
          <Image
            src={consulting}
            width={100}
            height={100}
            className="mx-auto"
          />
          <h3 className="text-lg text-light_front gray font-medium pt-8 pb-2 dark:text-fore">
            Credible Feedback
          </h3>
          <p className="text-light_front dark:text-mid2">
            I am fluent in English and Hindi. Communicating with you and
            understanding your essential requirements is something I am good at.
            I can help you with the design and development of your website or
            app involving your feedback each step of the way.
          </p>
          <h4 className="py-4 text-slate-800 dark:text-pinkish">
            <HiSparkles className="inline"/> Tools I Use
          </h4>
          <p className="text-mud dark:text-calm pb-1">Figma Wireframing</p>
          <p className="text-mud dark:text-calm pb-1">Slack and Whatsapp</p>
          <p className="text-mud dark:text-calm pb-1">GitHub</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
