import Image from "next/image";
import React from "react";
import deved from "../public/dev-ed-wave.png";

function Avatar() {
  return (
    <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80  mt-20 mx-auto overflow-hidden dark:bg-gradient-to-b dark:from-pale dark:to-sand">
      <Image src={deved} fill objectFit="cover" />
    </div>
  );
}

export default Avatar;
