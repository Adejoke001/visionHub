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
import styles from "./resources.module.css";

const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* Header Section */}
        <div className={styles.header}>
          <h1 className={styles.title}>Resources</h1>
          <p className={styles.subtitle}>
            Compassionate guides on anxiety, depression, relationships, and self-care — 
            informed by counseling principles and real-world experience.
          </p>
        </div>

        {/* Resources Grid */}
        <div className={styles.grid}>
          {/* Resource Card 1 - Depression */}
          <div className={styles.resourceCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={assets.shadow}
                alt="Person sitting in shadow representing depression"
                width={250}
                height={190}
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <span className={styles.cardCategory}>Understanding Depression</span>
              <h2 className={styles.cardTitle}>
                7 Gentle Habits to Lift Your Mood
              </h2>
              <p className={styles.cardText}>
                Small, compassionate steps to help you navigate low moods. These 
                counseling-informed practices can support your journey toward feeling 
                more like yourself again.
              </p>
              <button className={styles.readButton}>
                <Link href="/resources/7-gentle-habits">Read Article →</Link>
              </button>
            </div>
          </div>

          {/* Resource Card 2 - Mental Health Maintenance */}
          <div className={styles.resourceCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={assets.lonely}
                alt="Person sitting alone representing loneliness"
                width={250}
                height={190}
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <span className={styles.cardCategory}>Mental Wellness</span>
              <h2 className={styles.cardTitle}>
                Building a Foundation for Good Mental Health
              </h2>
              <p className={styles.cardText}>
                Practical, sustainable approaches to maintain emotional well-being. 
                Learn daily habits that nurture your mind, body, and spirit — created 
                with care and counseling insights.
              </p>
              <button className={styles.readButton}>
                <Link href="/resources/building-mental-wellness">Read Article →</Link>
              </button>
            </div>
          </div>

          {/* Resource Card 3 - Stress Management */}
          <div className={styles.resourceCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={assets.voices}
                alt="Person with overlapping shadows representing intrusive thoughts"
                width={250}
                height={190}
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <span className={styles.cardCategory}>Stress & Intrusive Thoughts</span>
              <h2 className={styles.cardTitle}>
                Quieting the Unwanted Voices Within
              </h2>
              <p className={styles.cardText}>
                Compassionate techniques to acknowledge and gently redirect 
                intrusive thoughts. You are not defined by these voices — discover 
                pathways to greater peace and clarity.
              </p>
              <button className={styles.readButton}>
                <Link href="/resources/quieting-unwanted-voices">Read Article →</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;