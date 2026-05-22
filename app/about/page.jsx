"use client";
import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";
import styles from "./about.module.css";

const About = () => {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.5, delay: 0.2 },
    viewport: { once: true }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 20 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.5, delay: 0.3 },
    viewport: { once: true }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const socialLinks = [
    {
      href: "https://www.facebook.com/share/1AsKpKqQnP/?mibextid=LQQJ4d",
      icon: <Icon.FacebookLogo size={24} />,
      label: "Facebook"
    },
    {
      href: "https://www.linkedin.com/in/akinade20",
      icon: <Icon.LinkedinLogo size={24} />,
      label: "LinkedIn"
    },
    {
      href: "https://x.com/fayokemmy3?s=21",
      icon: <Icon.TwitterLogo size={24} />,
      label: "Twitter"
    },
    {
      href: "https://www.instagram.com/ade_johkeh?igsh=bWdrdDR2N2p1bG8w&utm_source=qr",
      icon: <Icon.InstagramLogo size={24} />,
      label: "Instagram"
    },
    {
      href: "https://github.com/Adejoke001",
      icon: <Icon.GithubLogo size={24} />,
      label: "GitHub"
    }
  ];

  const coreValues = [
    { 
      icon: <Icon.HandHeart size={32} weight="fill" className="text-teal-600" />,
      title: "Compassion", 
      description: "Meeting you where you are with genuine care and understanding" 
    },
    { 
      icon: <Icon.ShieldCheck size={32} weight="fill" className="text-teal-600" />,
      title: "Confidentiality", 
      description: "Your privacy and trust are our highest priority" 
    },
    { 
      icon: <Icon.SealCheck size={32} weight="fill" className="text-teal-600" />,
      title: "Integrity", 
      description: "Honest, ethical, and transparent in all we do" 
    },
    { 
      icon: <Icon.HeartStraight size={32} weight="fill" className="text-teal-600" />,
      title: "Empathy", 
      description: "Deeply understanding your feelings and perspective" 
    },
    { 
      icon: <Icon.Plant size={32} weight="fill" className="text-teal-600" />,
      title: "Growth", 
      description: "Committed to your personal development and healing" 
    },
    { 
      icon: <Icon.UsersThree size={32} weight="fill" className="text-teal-600" />,
      title: "Support", 
      description: "Unwavering encouragement throughout your journey" 
    }
  ];

  const whyChooseUs = [
    {
      icon: <Icon.ShieldCheck size={24} className="text-teal-600" />,
      title: "Safe & Confidential Care",
      description: "Your privacy is protected in a judgment-free environment"
    },
    {
      icon: <Icon.IdentificationBadge size={24} className="text-teal-600" />,
      title: "Licensed Professionals",
      description: "Experienced, certified counselors you can trust"
    },
    {
      icon: <Icon.Clock size={24} className="text-teal-600" />,
      title: "24/7 Support",
      description: "Access help whenever you need it most"
    },
    {
      icon: <Icon.VideoCamera size={24} className="text-teal-600" />,
      title: "Virtual & In-Person",
      description: "Flexible sessions to fit your lifestyle"
    },
    {
      icon: <Icon.Heart size={24} className="text-teal-600" />,
      title: "Personalized Counseling",
      description: "Tailored approaches for your unique needs"
    },
    {
      icon: <Icon.Smiley size={24} className="text-teal-600" />,
      title: "Judgment-Free Zone",
      description: "A safe space for complete honesty and healing"
    }
  ];

  return (
    <div className={`container w-11/12 max-w-6xl mx-auto my-16 flex flex-col ${styles.container}`} id='about'>
      
      {/* Profile & Personal Introduction */}
      <motion.div {...fadeInUp} className="flex flex-col items-center text-center">
        <Image
          src={assets.ajm}
          alt="Adejoke Akinola - Marriage and Relationship Consultant"
          className="rounded-full w-40 h-40 object-cover border-4 border-teal-200 shadow-lg"
          priority
        />

        <motion.h2 {...fadeInUp} className="flex items-end gap-2 text-xl font-normal md:text-2xl mb-3 font-Ovo mt-4">
          <i>Hello! I am Adejoke Akinola</i>
        </motion.h2>

        <motion.h4 {...fadeInUp} className="text-xl sm:text-2xl md:text-3xl lg:text-[35px] font-Ovo mx-4 leading-tight">
          Marriage & Relationship Consultant | Inspirational Speaker | Frontend Developer
        </motion.h4>

        <motion.p {...fadeInUp} className="max-w-2xl mx-auto font-Ovo text-base sm:text-lg md:text-xl mt-6 mb-4 leading-relaxed text-gray-700">
          I am a consultant and writer based in Nigeria, with 3 years of work experience. 
          I have worked with many consulting companies.
          <br className="hidden sm:block" />
          I am a lover of books and nature.
        </motion.p>
      </motion.div>

      {/* Hero / Introduction Section */}
      <motion.div 
        {...fadeInUp}
        className={styles.heroSection}
      >
        <p className={styles.heroText}>
          "We believe everyone deserves a safe space to heal, grow, and be heard."
        </p>
      </motion.div>

      {/* The Inspiration Behind the Practice */}
      <motion.div 
        {...fadeInLeft}
        className={styles.inspirationSection}
      >
        <h3 className="text-2xl font-bold text-teal-800 mb-4 flex items-center gap-2">
          <Icon.Flower size={28} className="text-teal-600" /> The Inspiration Behind Our Practice
        </h3>
        <p className={styles.inspirationText}>
          I noticed that many people silently struggle with emotional challenges, relationship breakdowns, 
          and mental health stigma — often suffering alone because they lack safe spaces to open up. 
          Families fall apart, individuals lose hope, and teenagers navigate confusion without guidance.
          <br /><br />
          This inspired me to create a counseling service where compassion meets professionalism — 
          a place where you can be vulnerable without fear of judgment. My goal is to break the stigma 
          around mental health and make emotional wellness accessible to everyone, regardless of their 
          background or circumstances.
        </p>
      </motion.div>

      {/* Mission & Vision Section */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={styles.missionVisionGrid}
      >
        <motion.div variants={fadeInUp} className={styles.missionCard}>
          <div className={styles.cardTitle}>
            <Icon.Target size={28} className="text-teal-600" /> Our Mission
          </div>
          <p className={styles.cardText}>
            To provide compassionate, confidential, and accessible counseling services that empower 
            individuals, teens, couples, and families to overcome challenges and build healthier, 
            more fulfilling lives.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className={styles.visionCard}>
          <div className={styles.cardTitle}>
            <Icon.Globe size={28} className="text-teal-600" /> Our Vision
          </div>
          <p className={styles.cardText}>
            To create a world where emotional wellness, healthy relationships, and mental health 
            support are accessible without fear, stigma, or judgment — transforming lives one 
            conversation at a time.
          </p>
        </motion.div>
      </motion.div>

      {/* Core Values Grid */}
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Our Core Values</h2>
        <p className={styles.sectionSubtitle}>The principles that guide everything we do</p>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={styles.valuesGrid}
      >
        {coreValues.map((value, index) => (
          <motion.div key={index} variants={fadeInUp} className={styles.valueCard}>
            <div className={styles.valueIcon}>
              {value.icon}
            </div>
            <h4 className={styles.valueTitle}>{value.title}</h4>
            <p className={styles.valueDescription}>{value.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Why Choose Us Grid */}
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Why Choose Us</h2>
        <p className={styles.sectionSubtitle}>Excellence in every aspect of your care</p>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={styles.whyChooseGrid}
      >
        {whyChooseUs.map((item, index) => (
          <motion.div key={index} variants={fadeInUp} className={styles.whyCard}>
            <div className={styles.whyIcon}>
              {item.icon}
            </div>
            <div className={styles.whyContent}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Closing Section */}
      <motion.div 
        {...fadeInUp}
        className={styles.closingSection}
      >
        <p className={styles.closingText}>
          "No matter where you are in your journey, you don't have to face it alone."
        </p>
        <p className={styles.closingSubtext}>
          Take the first step today — healing, hope, and growth are just a conversation away.
        </p>
        <a href="#contact" className={styles.ctaButton}>
          Start Your Journey <Icon.ArrowRight size={20} />
        </a>
      </motion.div>

      {/* Biography Button */}
      <motion.div {...fadeInLeft} className="font-Ovo mt-4 text-center">
        <a 
          href="/biography.pdf" 
          target='_blank' 
          rel="noopener noreferrer"
          download 
          className="bg-green-600 text-white font-bold text-lg px-6 py-3 rounded-lg inline-block hover:bg-green-700 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          View my Biography
          <Icon.Download size={20} className="inline ml-2" />
        </a>
      </motion.div>

      {/* Connect Section */}
      <motion.div {...fadeInRight} className="container mt-8 text-center">
        <a
          href="#contact"
          className="text-teal-700 font-bold text-xl transition-all duration-300 hover:text-teal-900 hover:underline underline-offset-4"
        >
          Let's Connect →
        </a>

        <div className="flex items-center justify-center gap-4 mt-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="bg-teal-700 rounded-full text-white border-2 border-teal-700 p-2.5 hover:bg-white hover:text-teal-700 hover:border-teal-700 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Decorative Element */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-10 w-16 h-0.5 bg-gradient-to-r from-teal-400 to-green-400 rounded-full mx-auto"
      />
    </div>
  );
};

export default About;