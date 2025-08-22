'use client';
import { useState } from 'react';
import React from "react";

      


const Services = () => {

     const [showModal, setShowModal] = useState(false);
  return (
  <div className="container mx-auto my-15 bg-green-200 text-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-20" id='service'>
  <div className="max-w-2xl mx-auto">
    <h1 className="text-3xl font-semibold text-teal-800 font-Ovo">
      Our Services
    </h1>
    <h2 className="text-xl font-medium">24/7 Counseling Support</h2>
    <h4 className="text-lg font-normal m-4">
      <em>
        Need someone to talk to? Our compassionate counselors are here for
        you 24/7—day or night. Confidential support whenever you need it
        most. You matter, and we're here to listen.
      </em>
    </h4>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 m-4 font-Ovo items-center">
    <div className="bg-white p-4">
      <h2 className="p-2 font-semibold text-xl">Couples Therapy</h2>
      <p className="text-gray-700">
        Rebuild connection and communication in your relationship. Our
        therapists help couples navigate conflicts, rebuild trust, and
        strengthen intimacy through evidence-based techniques in a safe,
        judgment-free space.
      </p>
      <button onClick={() => setShowModal(true)} className="mt-2 bg-teal-700 text-white px-3 py-1 rounded-full hover:bg-teal-800 transition">
        <a href="#booking" target='_blank'>Book a Session</a>
      </button>
    </div>

    <div className="bg-white p-4">
      <h2 className="p-2 font-semibold text-xl">Individual Counseling</h2>
      <p className="text-gray-700">
        Personalized support for anxiety, depression, or life transitions.
        Explore your emotions, develop coping strategies, and foster
        self-growth with a licensed counselor tailored to your unique needs. Quality service is assured.
      </p>
      <button onClick={() => setShowModal(true)} className="mt-2 bg-teal-700 text-white px-3 py-1 rounded-full hover:bg-teal-800 transition">
        <a href="#booking" target='_blank'>Book a Session</a>
      </button>
    </div>

    <div className="bg-white p-4">
      <h2 className="p-2 font-semibold text-xl">Premarital Counseling</h2>
      <p className="text-gray-700">
        Lay a strong foundation for your marriage. Address expectations,
        financial goals, and conflict resolution skills to start your
        journey together with clarity and confidence. Let's build with trust yielding a lasting relationship.
      </p>
     <button onClick={() => setShowModal(true)} className="mt-2 bg-teal-700 text-white px-3 py-1 rounded-full hover:bg-teal-800 transition">
        <a href="#booking" target='_blank'>Book a Session</a>
      </button>
    </div>

    <div className="bg-white p-4">
      <h2 className="p-2 font-semibold text-xl">Online Counseling</h2>
      <p className="text-gray-700">
        Flexible support from anywhere. Secure video or chat sessions make
        therapy accessible for busy schedules or those who prefer virtual
        care. Your privacy is our priority.
      </p>
      <button onClick={() => setShowModal(true)} className="mt-2 bg-teal-700 text-white px-3 py-1 rounded-full hover:bg-teal-800 transition">
        <a href="#booking" target='_blank'>Book a Session</a>
      </button>
    </div>

    <div className="bg-white p-4">
      <h2 className="p-2 font-semibold text-xl">Family Therapy</h2>
      <p className="text-gray-700">
        Heal and strengthen family bonds. We guide families through crises,
        parenting challenges, or generational conflicts to restore harmony
        and understanding - growing bonds. 
      </p>
      <button onClick={() => setShowModal(true)} className="mt-2 bg-teal-700 text-white px-3 py-1 rounded-full hover:bg-teal-800 transition">
        <a href="#booking" target='_blank'>Book a Session</a>
      </button>
    </div>

    <div className="bg-white p-4">
      <h2 className="p-2 font-semibold text-xl">Crisis Intervention</h2>
      <p className="text-gray-700">
        Immediate support for emotional emergencies. Our 24/7 crisis
        counselors provide urgent care for trauma, grief, or suicidal
        thoughts with empathy and expertise.
      </p>
      <button onClick={() => setShowModal(true)} className="mt-2 bg-teal-700 text-white px-3 py-1 rounded-full hover:bg-teal-800 transition">
        <a href="#booking" target='_blank'>Book a Session</a>
      </button>
    </div>
  </div>
</div>
  );
};

export default Services;