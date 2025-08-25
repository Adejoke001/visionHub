// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { assets } from "@/assets/assets";
// import styles from "./resources.modules.css";

// const page = () => {
//   return (
//     <div className="my-20">
//       <div>
//         <h1 className="text-3xl font-semibold text-teal-700 text-center mb-3">
//           Resources
//         </h1>
//         <p className="text-xl font-normal text-gray-800 text-center tee">
//           Explore helpful guides on anxiety, depression, relationships, and self
//           care.
//         </p>
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-items-center gap-5 mt-8">
//         <div className="bg-white p-5 rounded-lg m-4 box">
//           <div>
//             <Image
//               src={assets.shadow}
//               alt="shadow"
//               className="flex items-center w-60 h-45 shadow-lg justify-center"
//             />
//           </div>
//           <div className="flex mt-3">
//             <h3 className="text-xl text-teal-700 font-medium">
//               <Link href="#"> Depression </Link>
//             </h3>
//           </div>
//           <div className="flex text-xl text-gray-800 font-semibold text-start">
//             <h1>
//               7 Simple Habits to Lift <br /> Your Mood
//             </h1>
//           </div>
//           <div>
//             <p className="text-gray-600 text-base mt-1">
//               Discover practical tips to improve your mood and mental well-being
//               - create more moments of joy.
//             </p>
//           </div>
//         </div>

//         <div className="bg-white p-5 rounded-lg m-4 box">
//           <div>
//             <Image
//               src={assets.lonely}
//               alt="shadow"
//               className="flex items-center w-60 h-45 shadow-lg justify-center"
//             />
//           </div>
//           <div className="flex mt-3">
//             <h3 className="text-xl text-teal-700 font-medium">
//               <Link href="#"> Depression </Link>
//             </h3>
//           </div>
//           <div className="flex text-xl text-gray-800 font-semibold text-start">
//             <h1>How to Maintain a Good Mental Health. </h1>
//           </div>
//           <div>
//             <p className="text-gray-600 text-base mt-1">
//               Explore strategies to maintain good mental health and well-being -
//               prioritize self-care.
//             </p>
//           </div>
//         </div>

//          <div className="bg-white p-5 rounded-lg m-4 box">
//           <div>
//             <Image
//               src={assets.voices}
//               alt="shadow"
//               className="flex items-center w-60 h-45 shadow-lg justify-center"
//             />
//           </div>
//           <div className="flex mt-3">
//             <h3 className="text-xl text-teal-700 font-medium">
//               <Link href="#"> Stress Management </Link>
//             </h3>
//           </div>
//           <div className="flex text-xl text-gray-800 font-semibold text-start">
//             <h1>The Unwanted Voices - Silence Them, They do not Define You. </h1>
//           </div>
//           <div>
//             <p className="text-gray-600 text-base mt-1">
//               Learn how to manage stress effectively and regain control over
//               your life - find peace of mind.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;


import React from "react";
import Link from "next/link";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Page = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header Section - Centered */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-semibold text-teal-700 mb-4">
            Resources
          </h1>
          <p className="text-lg sm:text-xl text-gray-800 max-w-2xl mx-auto">
            Explore helpful guides on anxiety, depression, relationships, and self care.
          </p>
        </div>

        {/* Resources Grid - Responsive and Centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {/* Resource Card 1 */}
          <div className="bg-white p-5 rounded-lg shadow-md w-full max-w-sm transition-transform duration-300 hover:shadow-lg">
            <div className="flex justify-center">
              <Image
                src={assets.shadow}
                alt="shadow"
                width={250}
                height={190}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg text-teal-700 font-medium mb-2">
                <Link href="#">Depression</Link>
              </h3>
              <h2 className="text-xl text-gray-800 font-semibold mb-2">
                7 Simple Habits to Lift Your Mood
              </h2>
              <p className="text-gray-600 text-base">
                Discover practical tips to improve your mood and mental well-being - create more moments of joy.
              </p>
            </div>
          </div>

          {/* Resource Card 2 */}
          <div className="bg-white p-5 rounded-lg shadow-md w-full max-w-sm transition-transform duration-300 hover:shadow-lg">
            <div className="flex justify-center">
              <Image
                src={assets.lonely}
                alt="lonely"
                width={250}
                height={190}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg text-teal-700 font-medium mb-2">
                <Link href="#">Depression</Link>
              </h3>
              <h2 className="text-xl text-gray-800 font-semibold mb-2">
                How to Maintain a Good Mental Health
              </h2>
              <p className="text-gray-600 text-base">
                Explore strategies to maintain good mental health and well-being - prioritize self-care.
              </p>
            </div>
          </div>

          {/* Resource Card 3 */}
          <div className="bg-white p-5 rounded-lg shadow-md w-full max-w-sm transition-transform duration-300 hover:shadow-lg">
            <div className="flex justify-center">
              <Image
                src={assets.voices}
                alt="voices"
                width={250}
                height={190}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg text-teal-700 font-medium mb-2">
                <Link href="#">Stress Management</Link>
              </h3>
              <h2 className="text-xl text-gray-800 font-semibold mb-2">
                The Unwanted Voices - Silence Them, They do not Define You
              </h2>
              <p className="text-gray-600 text-base">
                Learn how to manage stress effectively and regain control over your life - find peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
