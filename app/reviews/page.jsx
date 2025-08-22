import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Reviews = () => {

  
  return (
    <div className="container bg-white mx-auto px-4 py-8" id="reviews">
        <h1 className="text-3xl font-semibold text-teal-800 py-4 text-center mb-8 font-Ovo">What Our Clients Say</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 m-4 font-Ovo text-center">
        <div className="bg-teal-600 text-white p-5">
          <div>
            <Image
              src={assets.couple}
              alt="my image"
              className="rounded-3xl w-30 h-30 mx-auto"
            />
          </div>
          <h3 className="text-xl font-medium py-2">James & Anita</h3>
          <p className="font-Ovo">
            "After nearly divorcing, VisionHub helped us rebuild trust and
            communication. We went from sleeping in separate rooms to renewing
            our vows within 6 months. Their 'conflict resolution' technique saved
            our 12-year marriage."
          </p>
        </div>

        <div className="bg-teal-600 text-white p-5">
          <div>
            <Image
              src={assets.review3}
              alt="my image"
              className="rounded-3xl w-30 h-30 mx-auto"
            />
          </div>
          <h3 className="text-xl font-medium py-2">David Mark</h3>
          <p className="font-Ovo">
            "As a CEO, I couldn't admit I needed help. The non-judgmental
            approach here gave me tools to manage stress without medication. My
            board members now compliment my 'calm leadership'."
          </p>
        </div>

        <div className="bg-teal-600 text-white p-5">
          <div>
            <Image
              src={assets.family}
              alt="my image"
              className="rounded-3xl w-30 h-30 mx-auto"
            />
          </div>
          <h3 className="text-xl font-medium py-2">The Jacob's family</h3>
          <p className="font-Ovo">
           "Blended family struggles had us at breaking point. The step-parenting strategies we learned here created peace in our home for the first time in years. Our kids now ask for 'family meetings'!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;



