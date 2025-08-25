import React from "react";
import Image from "next/image";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { assets } from "@/assets/assets";
import Link from "next/link";
import styles from "./contact.modules.css" 

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="flex items-center justify-center">
          <h4 className="flex text-2xl font-semibold mt-20 mx-auto text-medium text-teal-600">
            Contact us
            <Icon.Phone className="flex text-teal-600 text-3xl pl-2 pt-1" />
          </h4>
        </div>
        <div className="flex items-center justify-center">
          <h2 className="items-center justify-center text-3xl font-bold">
            Do you have questions?
          </h2>
        </div>
        <div className="flex justify-center mt-3">
          <Icon.ArrowDown className="flex text-3xl text-teal-600 justify-center" />
        </div>
        <div className="flex items-center justify-center mt-3">
          <h3 className="flex text-3xl font-bold justify-center ">
            Get in touch
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center mt-3 mb-10 gap-5 m-4 font-Ovo text-center">
          <div className="flex flex-col items-center justify-center bg-teal-600 p-6 rounded-lg">
            <div className="flex flex-col items-center gap-2">
              <Icon.Phone className="icon w-7 h-6 text-teal-800 border rounded-full bg-white p-1" />
              <h4 className="text-xl font-semibold text-white">Call us</h4>
              <h5 className="text-xl font-normal text-white"><Link href='+2348134567890'>+234 813 4567 890</Link></h5>
              <h5 className="text-xl font-normal text-white"><Link href='+2349034567890'>+234 903 4567 890</Link></h5>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center bg-teal-600 p-6 rounded-lg">
            <div className="flex flex-col items-center gap-2">
              <Icon.Envelope className="icon w-7 h-6 text-teal-800 border rounded-full bg-white p-1" />
              <h4 className="text-xl font-semibold text-white"><Link href='#'>Email us</Link></h4>
              <h5 className="text-xl font-normal text-white"><Link href='#'>visionhub@gmail.com</Link></h5>
              <h5 className="text-xl font-normal text-white"><Link href='#'>info@vision.com</Link></h5>
          </div>
          </div>

          <div className="flex flex-col items-center justify-center bg-teal-600 p-5 rounded-lg">
            <a href="#" className="flex flex-col items-center gap-2">
              <Icon.MapPin className="icon w-7 h-6 text-teal-800 border rounded-full bg-white p-1" />
              <h4 className="text-xl font-semibold text-white">Visit us</h4>
              <h5 className="text-xl font-normal text-white">123 Adam's road</h5>
              <h5 className="text-xl font-normal text-white">Lagos, Nigeria</h5>
            </a>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8" id="contact">
          <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="flex items-center justify-center text-3xl font-bold text-teal-800 pb-15">
              Let's Connect
            </h1>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-700 text-white px-4 py-2 rounded-md hover:bg-teal-800 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
