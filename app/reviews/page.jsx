// import React from "react";
// import { assets } from "@/assets/assets";
// import Image from "next/image";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const Reviews = () => {

  
//   return (
//     <div className="container bg-white mx-auto px-4 py-8" id="reviews">
//         <h1 className="text-3xl font-semibold text-teal-800 py-4 text-center mb-8 font-Ovo">What Our Clients Say</h1>
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 m-4 font-Ovo text-center">
//         <div className="bg-teal-600 text-white p-5">
//           <div>
//             <Image
//               src={assets.couple}
//               alt="my image"
//               className="rounded-3xl w-30 h-30 mx-auto"
//             />
//           </div>
//           <h3 className="text-xl font-medium py-2">James & Anita</h3>
//           <p className="font-Ovo">
//             "After nearly divorcing, VisionHub helped us rebuild trust and
//             communication. We went from sleeping in separate rooms to renewing
//             our vows within 6 months. Their 'conflict resolution' technique saved
//             our 12-year marriage."
//           </p>
//         </div>

//         <div className="bg-teal-600 text-white p-5">
//           <div>
//             <Image
//               src={assets.review3}
//               alt="my image"
//               className="rounded-3xl w-30 h-30 mx-auto"
//             />
//           </div>
//           <h3 className="text-xl font-medium py-2">David Mark</h3>
//           <p className="font-Ovo">
//             "As a CEO, I couldn't admit I needed help. The non-judgmental
//             approach here gave me tools to manage stress without medication. My
//             board members now compliment my 'calm leadership'."
//           </p>
//         </div>

//         <div className="bg-teal-600 text-white p-5">
//           <div>
//             <Image
//               src={assets.family}
//               alt="my image"
//               className="rounded-3xl w-30 h-30 mx-auto"
//             />
//           </div>
//           <h3 className="text-xl font-medium py-2">The Jacob's family</h3>
//           <p className="font-Ovo">
//            "Blended family struggles had us at breaking point. The step-parenting strategies we learned here created peace in our home for the first time in years. Our kids now ask for 'family meetings'!"
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Reviews;


"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { assets } from "@/assets/assets";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Reviews = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current.swiper;
    swiper.navigation.init();
    swiper.navigation.update();
  }, []);

  const reviews = [
    {
      id: 1,
      image: assets.couple,
      name: "James & Anita",
      text: `"After nearly divorcing, VisionHub helped us rebuild trust and communication. We went from sleeping in separate rooms to renewing our vows within 6 months. Their 'conflict resolution' technique saved our 12-year marriage."`
    },
    {
      id: 2,
      image: assets.review3,
      name: "David Mark",
      text: `"As a CEO, I couldn't admit I needed help. The non-judgmental approach here gave me tools to manage stress without medication. My board members now compliment my 'calm leadership'."`
    },
    {
      id: 3,
      image: assets.family,
      name: "The Jacob's family",
      text: `"Blended family struggles had us at breaking point. The step-parenting strategies we learned here created peace in our home for the first time in years. Our kids now ask for 'family meetings'!"`
    },
    {
      id: 4,
      image: assets.couple2,
      name: "Sarah & Michael",
      text: `"We were on the verge of separation when we found VisionHub. Their communication techniques transformed our relationship. We're now stronger than ever and even planning to start a family!"`
    },
    {
      id: 5,
      image: assets.review5,
      name: "Robert Johnson",
      text: `"The personal growth program helped me overcome anxiety and build confidence. I've since been promoted at work and finally feel in control of my life. Thank you for the incredible transformation!"`
    }
  ];

  return (
    <div className="container bg-white mx-auto px-4 py-12" id="reviews">
      <h1 className="text-3xl font-semibold text-teal-800 text-center mb-10 font-Ovo">
        What Our Clients Say
      </h1>
      
      <div className="relative max-w-6xl mx-auto">

        {/* Swiper Slider */}
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          loop={true}
          speed={1500}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.review-pagination',
          }}
          modules={[Autoplay, Navigation, Pagination]}
          className="w-full pb-12"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-teal-600 text-white p-6 rounded-xl h-full flex flex-col transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
                <div className="mb-4 flex justify-center">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={100}
                    height={100}
                    className="rounded-full w-24 h-24 object-cover border-1 border-white shadow-md"
                  />
                </div>
                <h3 className="text-xl font-medium mb-3">{review.name}</h3>
                <p className="font-Ovo flex-grow italic">{review.text}</p>
                <div className="flex justify-center mt-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                        <Icon.Star key={i} weight="fill" className="w-4 h-4 text-yellow-400" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom Pagination */}
        <div className="review-pagination flex justify-center mt-4 space-x-2"></div>
      </div>

      <style jsx>{`
        :global(.review-pagination .swiper-pagination-bullet) {
          width: 12px;
          height: 12px;
          background-color: #cbd5e1;
          opacity: 0.7;
        }
        :global(.review-pagination .swiper-pagination-bullet-active) {
          background-color: #0f766e;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Reviews;
