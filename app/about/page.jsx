"use client";
import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import * as Icon from "@phosphor-icons/react/dist/ssr";

const About = () => {
  return (
    <div className="container w-11/12 max-w-3xl mx-auto my-15 flex flex-col items-center justify-center text-center scroll-mt-20" id='about'>
      <div>
        <Image
          src={assets.ajm}
          alt="my image"
          className="rounded-full w-40 h-40"
        />
      </div>

      <h2 className="flex items-end gap-2 text-xl font-normal md:text-2xl mb-2 font-Ovo"><i>
        Hello! I am Adejoke Akinola </i>
      </h2>
      <h4 className="text-3xl sm:text-4xl lg:text-[35px] font-Ovo mx-4">
        Marriage & relationship Consultant | Inspirational Speaker |
        Thought Leader & Writer | Public Speaker | Frontend developer
      </h4>
      <p className="max-w-2xl mx-auto font-Ovo text-lg sm:text-xl m-4">
        I am a consultant and writer based in Nigeria, with 3 years work
        experience. I have worked with many consulting companies.<br/>
         I am a lover of books and nature
      </p>

      <div className=' font-Ovo'>
        <a href="/biography.pdf" target='_blank' download className="bg-green-600 text-white font-bold text-lg mt-6 p-2">
            Download my Biography<Icon.Download size={25} className="inline ml-2 text-2xl" />
        </a>
      </div>
      <div className="container mt-4">
        <a
          href="@contact"
          className="text-teal-700 font-bold text-xl transition-colors duration-300"
        >
          Let’s Connect
        </a>
        <div className="flex items-center justify-center gap-4 mt-5 text-xl">
          <a
            href="https://www.facebook.com/share/1AsKpKqQnP/?mibextid=LQQJ4d"
            target="_blank"
            className="bg-teal-700 rounded-full text-white border-2 p-2 hover:bg-white hover:text-teal-700 hover:border-teal-700 transition-all duration-300"
          >
            <Icon.FacebookLogo />
          </a>
          <a
            href="https://www.linkedin.com/in/akinade20"
            target="_blank"
            className="bg-teal-700 rounded-full text-white border-2 p-2 hover:bg-white hover:text-teal-700 hover:border-teal-700 transition-all duration-300"
          >
            <Icon.LinkedinLogo />
          </a>
          <a
            href="https://x.com/fayokemmy3?s=21"
            target="_blank"
            className="bg-teal-700 rounded-full text-white border-2 p-2 hover:bg-white hover:text-teal-700 hover:border-teal-700 transition-all duration-300"
          >
            <Icon.TwitterLogo />
          </a>
          <a
            href="https://www.instagram.com/ade_johkeh?igsh=bWdrdDR2N2p1bG8w&utm_source=qr"
            target="_blank"
            className="bg-teal-700 rounded-full text-white border-2 p-2 hover:bg-white hover:text-teal-700 hover:border-teal-700 transition-all duration-300"
          >
            <Icon.InstagramLogo />
          </a>
          <a
            href="https://github.com/Adejoke001"
            target="_blank"
            className="bg-teal-700 rounded-full text-white border-2 p-2 hover:bg-white hover:text-teal-700 hover:border-teal-700 transition-all duration-300"
          >
            <Icon.GithubLogo />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
