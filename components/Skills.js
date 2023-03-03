import React from 'react'
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import Image from "next/image";

function Skills() {
    return (
        <section>
            <div className="flex-col justify-center">
                <h3 className="text-3xl py-1 text-light_front lg:text-4xl dark:text-fore">
                    Skills I have
                </h3>
                <p className=" text-md py-5 leading-8 lg:text-xl text-light_mid2 dark:text-mid2">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
                    magnam atque sint, rerum aspernatur quod illo quo voluptas
                    voluptates nihil nemo officia earum. Unde totam sapiente
                    cupiditate aliquid molestiae inventore.{" "}
                </p>
            </div>

            <div className="lg:flex gap-10">
                <div className=" bg-fore  text-center shadow-lg p-10 rounded-xl my-10 dark:bg-mid1">
                    <Image
                        src={design}
                        width={100}
                        height={100}
                        className="mx-auto"
                    />
                    <h3 className="text-lg text-light_front gray font-medium pt-8 pb-2 dark:text-fore">
                        Beautfiul Designs
                    </h3>
                    <p className="text-light_front dark:text-mid2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Maxime, vitae nisi, dolor quidem tenetur voluptatibus laborum
                        labore placeat harum architecto voluptas hic a possimus, nemo
                        earum accusantium quasi aspernatur totam.
                    </p>
                    <h4 className="py-4 text-slate-800 dark:text-pinkish">
                        Design tools i use
                    </h4>
                    <p className="text-mud dark:text-calm">Photoshop</p>
                    <p className="text-mud dark:text-calm">VS code</p>
                    <p className="text-mud dark:text-calm">ML</p>
                </div>

                <div className=" bg-fore  text-center shadow-lg p-10 rounded-xl my-10 dark:bg-mid1">
                    <Image
                        src={code}
                        width={100}
                        height={100}
                        className="mx-auto"
                    />
                    <h3 className="text-lg text-light_front gray font-medium pt-8 pb-2 dark:text-fore">
                        Robust Code 
                    </h3>
                    <p className="text-light_front dark:text-mid2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Maxime, vitae nisi, dolor quidem tenetur voluptatibus laborum
                        labore placeat harum architecto voluptas hic a possimus, nemo
                        earum accusantium quasi aspernatur totam.
                    </p>
                    <h4 className="py-4 text-slate-800 dark:text-pinkish">
                        Design tools i use
                    </h4>
                    <p className="text-mud dark:text-calm">Photoshop</p>
                    <p className="text-mud dark:text-calm">VS code</p>
                    <p className="text-mud dark:text-calm">ML</p>
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
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Maxime, vitae nisi, dolor quidem tenetur voluptatibus laborum
                        labore placeat harum architecto voluptas hic a possimus, nemo
                        earum accusantium quasi aspernatur totam.
                    </p>
                    <h4 className="py-4 text-slate-800 dark:text-pinkish">
                        Design tools i use
                    </h4>
                    <p className="text-mud dark:text-calm">Photoshop</p>
                    <p className="text-mud dark:text-calm">VS code</p>
                    <p className="text-mud dark:text-calm">ML</p>
                </div>
            </div>
        </section>
    )
}

export default Skills