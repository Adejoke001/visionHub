'use client';
import React, { useState } from 'react';
import { Envelope, PaperPlaneRight } from '@phosphor-icons/react';
import styles from "./file.modules.css";

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitting email: ${email}`);
    setEmail('');
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-teal-50 to-cyan-100 p-4">
      <div className="max-w-4xl w-full bg-teal-700 text-white rounded-xl shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12 gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-2xl lg:text-3xl font-bold mb-4">Be the first to know</h1>
            <p className="text-teal-100 text-lg">
              Enter your email to get notified about our updates, news, and fresh, spirit-lifting content.
            </p>
          </div>

          <div className="flex-1 w-full max-w-md">
            <form onSubmit={handleSubmit} className="relative">
              <div className="relative">
                <Envelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-teal-300 w-6 h-6" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-5 py-4 bg-teal-600 text-white placeholder-teal-300 rounded-lg border-2 border-teal-500 focus:outline-none focus:border-cyan-300 transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-4 w-35 items-center justify-center bg-white text-teal-900 font-semibold py-2 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <span>Submit</span>
                <PaperPlaneRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;