import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const blogs = () => {
  return (
    <>
      <div className="text-3xl text-teal-800 font-bold text-center justify-center pt-10 mt-10 font-Ovo">
        <h1>Our Blogs</h1>
      </div>
      <p className="text-gray-700 font-Ovo text-center text-2xl font-medium mt-2">
        Explore our latest insights and tips on emotional well-being,
        <br /> relationships, and personal growth.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-4 py-10 justify-center gap-4 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="font-Ovo border border-gray-200 rounded-lg shadow-md px-3 pb-2">
          <div className="flex justify-center">
            <Image
              src={assets.blogs}
              alt="blog"
              className="w-full max-w-full sm:w-70 sm:h-50 object-cover"
            />
          </div>
          <div className="text-center px-3 rounded-4">
            <h1 className="text-xl font-semibold text-center text-teal-600 pt-3">
              Self-Love & Motivation
            </h1>
            <p className="text-l">
              <i> "You Can’t Pour From an Empty Cup"</i>
            </p>
            <p className="text-gray-600 font-Ovo">
              Self-love is the foundation of a healthy relationship with
              oneself. It’s about recognizing your worth, embracing your flaws,
              and treating yourself with kindness and respect.
            </p>
          </div>
        </div>

        <div className="font-Ovo border border-gray-200 rounded-lg shadow-md px-3 pb-2">
          <div className="flex justify-center">
            <Image
              src={assets.blogs5}
              alt="blog"
              className="w-full max-w-full sm:w-70 sm:h-50 object-cover"
            />
          </div>
          <div className="text-center ">
            <h1 className="text-xl font-semibold text-center text-teal-600 pt-3">
              {" "}
              Relationship Healing
            </h1>
            <p className="text-l">
              <i> "Fights Don’t Mean Failure"</i>
            </p>
            <p className="text-gray-600 font-Ovo">
              Arguments happen. Hurt feelings flare. But conflict isn’t the
              end—it’s a chance to understand deeper. Pause. Breathe. Ask: “What
              do we both need right now?” Healing starts when listening begins.
            </p>
          </div>
        </div>
        <div className="font-Ovo border border-gray-200 rounded-lg shadow-md px-3 pb-2">
          <div className="flex justify-center">
            <Image
              src={assets.blogs2}
              alt="blog"
              className="w-full max-w-full sm:w-70 sm:h-50 object-cover"
            />
          </div>
          <div className="text-center ">
            <h1 className="text-xl font-semibold text-center text-teal-600 pt-3">
              {" "}
              Marriage & Commitment
            </h1>
            <p className="text-l">
              <i>"Small Gestures, Big Love"</i>
            </p>
            <p className="text-gray-600 font-Ovo">
              Love grows in little moments. A morning coffee made just right. A
              hand held during tough days. These small acts keep connection
              alive. Busy lives? Prioritize 10 minutes of real talk daily. It’s
              not about time—it’s about presence.
            </p>
          </div>
        </div>

        <div className="font-Ovo border border-gray-200 rounded-lg shadow-md px-3 pb-2">
          <div className="flex justify-center">
            <Image
              src={assets.blogs3}
              alt="blog"
              className="w-full max-w-full sm:w-70 sm:h-50 object-cover"
            />
          </div>
          <div className="text-center ">
            <h1 className="text-xl font-semibold text-center text-teal-600 pt-3">
              Emotional Resilience
            </h1>
            <p className="text-l">
              <i>"Bad Days Don’t Mean Weakness"</i>
            </p>
            <p className="text-gray-600 font-Ovo">
              Feeling overwhelmed? Good. You’re human. Strength isn’t ignoring
              pain—it’s facing it. Tomorrow’s a new page. For now? Just breathe.
              You’ve survived 100% of your worst days.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default blogs;
