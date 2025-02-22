"use client";
import React from "react";
import { CustomText } from "../atoms";
import Image from "next/image";
import Link from "next/link";

const index = () => {
  return (
    <div className="flex justify-between items-center -rotate-6 relative md:right-6 right-0 hover:rotate-0 duration-700 ease-in-out hover:scale-110">
      <div className="w-32 flex flex-col gap-4">
        <Link href={"https://my-portofolio-indol.vercel.app/"} passHref>
          <CustomText
            text="DROPKICK ON MY DEVIL!!"
            size="lg"
            bold="bold"
            line="l6"
          />
        </Link>
        <CustomText
          text="Always Ritz Dropkick !!"
          size="md"
          bold="medium"
          underline={true}
          line="l3"
        />
      </div>
      <div className="hover:scale-125 duration-700 ease-in-out">
        <Image
          src="/Jashin-chanDropkickLogo.svg"
          alt="Always Ritz"
          width={100}
          height={100}
          priority
        />
      </div>
    </div>
  );
};

export default index;
