import React from "react";
import styles from "./news.modules.css";
import Link from "next/link";
import Image from "next/image";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { assets } from "@/assets/assets";

const page = () => {
  return (
    <div>
      <div className="news mx-15">
        <div className="our-news g-6 pb-10">
          <div className="couple">
            <Image src={assets.couple1} alt="couple" />
          </div>

          <div className="motive ">
            <h1 className="text-teal-700 font-semibold">
              Feeling like your world is crashing?
              <br /> You're not alone
            </h1>
            <p className="text-gray-900 text-xl p-4">
              Let's help you get through this phase and put a bright smile on
              your face again. You get access to experts who prioritize your
              healing, and are willing to help you get a new beginning.
            </p>
            <div>
              <div className="flex flex-items-center text-center justify-center mt-8 serve">
                
                <div>
                <ul className="text-l font-normal items-center p-6 font-medium">
                  <li className="flex items-center text-center">
                    <Icon.ArrowRightIcon className="text-2xl text-teal-700 flex font-bold gap-5" />
                    <Link href="#"> We care</Link>
                  </li>

                  <li className="flex items-center text-center">
                    <Icon.ArrowRightIcon className="text-2xl text-teal-700 flex font-bold gap-5" />
                    <Link href="#"> We listen, we don't judge</Link>
                  </li>

                  <li className="flex items-center text-center">
                    <Icon.ArrowRightIcon className="text-2xl text-teal-700 flex font-bold gap-5" />
                    <Link href="#"> Your mental health matters.</Link>
                  </li>

                  <li className="flex items-center text-center">
                    <Icon.ArrowRightIcon className="text-2xl text-teal-700 flex font-bold gap-5" />
                    <Link href="#"> Your solution is here</Link>
                  </li>
                   </ul>
                   <button className='button bg-teal-500 text-l text-white p-1 px-1.5 rounded-full text-center ml-4 mb-5'>Journey with us</button>

                  </div>

                  {/* <div>
                    <div>
                        <Image 
                        src={assets.review4}
                        alt='beautiful'
                        className='w-35 rounded-4 items-center justify-center mb-4' />
                    </div>
                    <h3 className=''><Link href='#'>physical, mental, emotional, and financial wellbeing - the pathway to success and long life.</Link></h3>
                    </div> */}

                </div>

               
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default page;
