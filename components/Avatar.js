import Image from "next/image";
import React from "react";
import profile from "../public/profile.png";

function Avatar() {
  return (
    <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 outline-mud mb-5 mt-10 mx-auto overflow-hidden dark:bg-gradient-to-b dark:from-pale dark:to-sand">
      <Image src={profile} fill objectFit="cover" alt=""/>
    </div>
  );
}

export default Avatar;
