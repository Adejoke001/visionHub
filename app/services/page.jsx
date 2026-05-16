'use client';
import { useState } from 'react';
import React from "react";
import styles from './services.module.css';

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div className={styles.servicesContainer} id='service'>
      <div className={styles.headerWrapper}>
        <h1 className={styles.mainTitle}>
          Our Services
        </h1>
        <h2 className={styles.subtitle}>24/7 Counseling Support</h2>
        <h4 className={styles.description}>
          <em>
            Need someone to talk to? Our compassionate counselors are here for
            you 24/7—day or night. Confidential support whenever you need it
            most. You matter, and we're here to listen.
          </em>
        </h4>
      </div>

      <div className={styles.gridContainer}>
        <div className={styles.serviceCard}>
          <h2 className={styles.cardTitle}>Couples Therapy</h2>
          <p className={styles.cardText}>
            Rebuild connection and communication in your relationship. Our
            therapists help couples navigate conflicts, rebuild trust, and
            strengthen intimacy through evidence-based techniques in a safe,
            judgment-free space.
          </p>
          <button onClick={() => setShowModal(true)} className={styles.bookButton}>
            <a href="#booking" target='_blank'>Book a Session</a>
          </button>
        </div>

        <div className={styles.serviceCard}>
          <h2 className={styles.cardTitle}>Individual Counseling</h2>
          <p className={styles.cardText}>
            Personalized support for anxiety, depression, or life transitions.
            Explore your emotions, develop coping strategies, and foster
            self-growth with a licensed counselor tailored to your unique needs. Quality service is assured.
          </p>
          <button onClick={() => setShowModal(true)} className={styles.bookButton}>
            <a href="#booking" target='_blank'>Book a Session</a>
          </button>
        </div>

        <div className={styles.serviceCard}>
          <h2 className={styles.cardTitle}>Premarital Counseling</h2>
          <p className={styles.cardText}>
            Lay a strong foundation for your marriage. Address expectations,
            financial goals, and conflict resolution skills to start your
            journey together with clarity and confidence. Let's build with trust yielding a lasting relationship.
          </p>
          <button onClick={() => setShowModal(true)} className={styles.bookButton}>
            <a href="#booking" target='_blank'>Book a Session</a>
          </button>
        </div>

        <div className={styles.serviceCard}>
          <h2 className={styles.cardTitle}>Online Counseling</h2>
          <p className={styles.cardText}>
            Flexible support from anywhere. Secure video or chat sessions make
            therapy accessible for busy schedules or those who prefer virtual
            care. Your privacy is our priority.
          </p>
          <button onClick={() => setShowModal(true)} className={styles.bookButton}>
            <a href="#booking" target='_blank'>Book a Session</a>
          </button>
        </div>

        <div className={styles.serviceCard}>
          <h2 className={styles.cardTitle}>Family Therapy</h2>
          <p className={styles.cardText}>
            Heal and strengthen family bonds. We guide families through crises,
            parenting challenges, or generational conflicts to restore harmony
            and understanding - growing bonds. 
          </p>
          <button onClick={() => setShowModal(true)} className={styles.bookButton}>
            <a href="#booking" target='_blank'>Book a Session</a>
          </button>
        </div>

        <div className={styles.serviceCard}>
          <h2 className={styles.cardTitle}>Crisis Intervention</h2>
          <p className={styles.cardText}>
            Immediate support for emotional emergencies. Our 24/7 crisis
            counselors provide urgent care for trauma, grief, or suicidal
            thoughts with empathy and expertise.
          </p>
          <button onClick={() => setShowModal(true)} className={styles.bookButton}>
            <a href="#booking" target='_blank'>Book a Session</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;