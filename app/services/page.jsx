"use client";
import { useState } from "react";
import React from "react";
import styles from "./services.module.css";

const Services = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.servicesContainer} id="service">
      <div className={styles.headerWrapper}>
        <h1 className={styles.mainTitle}>Our Services</h1>

        <h2 className={styles.subtitle}>24/7 Counseling Support</h2>

        <h4 className={styles.description}>
          <em>
            Life can feel overwhelming at times, but you don’t have to go
            through it alone. Our compassionate counselors are available day and
            night to provide confidential support, guidance, and a safe space to
            talk.
          </em>
        </h4>
      </div>

      <div className={styles.gridContainer}>
        <div className={styles.serviceCard}>
          <h2 className={styles.cardTitle}>Couples Therapy</h2>

          <p className={styles.cardText}>
            Strengthen your relationship through open communication, conflict
            resolution, and emotional connection. Whether you're facing trust
            issues, recurring disagreements, or distance in your relationship,
            our therapists help couples reconnect and grow together.
          </p>

          <button
            onClick={() => setShowModal(true)}
            className={styles.bookButton}
          >
            <a href="/booking">Book a Session</a>
          </button>
        </div>

        <div className={styles.serviceCard}>
          <h2 className={styles.cardTitle}>Family Therapy</h2>

          <p className={styles.cardText}>
            Families face challenges too, and healthy communication is key to
            healing. We help families navigate parenting struggles, unresolved
            conflicts, emotional distance, and major life transitions while
            rebuilding trust and understanding.
          </p>

          <button
            onClick={() => setShowModal(true)}
            className={styles.bookButton}
          >
            <a href="/booking">Book a Session</a>
          </button>
        </div>

        <div className={styles.serviceCard}>
          <h2 className={styles.cardTitle}>Individual & Teen Counseling</h2>

          <p className={styles.cardText}>
            Personalized support for adults and teens facing anxiety, stress,
            depression, self-esteem challenges, or major life changes. Our
            counselors provide a safe and supportive space to help you build
            confidence, healthy coping skills, and emotional well-being.
          </p>

          <button
            onClick={() => setShowModal(true)}
            className={styles.bookButton}
          >
            <a href="/booking">Book a Session</a>
          </button>
        </div>

        <div className={styles.serviceCard}>
          <h2 className={styles.cardTitle}>Premarital Counseling</h2>

          <p className={styles.cardText}>
            Prepare for marriage with honest conversations and practical
            guidance. We help couples discuss expectations, finances,
            communication styles, values, and future goals so they can build a
            strong and healthy foundation together.
          </p>

          <button
            onClick={() => setShowModal(true)}
            className={styles.bookButton}
          >
            <a href="/booking">Book a Session</a>
          </button>
        </div>

        <div className={styles.serviceCard}>
          <h2 className={styles.cardTitle}>Behavioral Recovery Services</h2>

          <p className={styles.cardText}>
            Compassionate support for individuals working through unhealthy
            habits, substance-related struggles, or emotional behaviors that
            affect daily life. Our counselors help you develop healthier
            routines, emotional resilience, and long-term recovery strategies
            without judgment.
          </p>

          <button
            onClick={() => setShowModal(true)}
            className={styles.bookButton}
          >
            <a href="/booking">Book a Session</a>
          </button>
        </div>

        <div className={styles.serviceCard}>
          <h2 className={styles.cardTitle}>Stress & Anxiety Support</h2>

          <p className={styles.cardText}>
            Constant worry, burnout, and emotional pressure can affect every
            part of life. We help clients manage stress, reduce anxiety, and
            regain a sense of balance through practical coping tools and
            supportive counseling.
          </p>

          <button
            onClick={() => setShowModal(true)}
            className={styles.bookButton}
          >
            <a href="/booking">Book a Session</a>
          </button>
        </div>

        <div className={styles.serviceCard}>
          <h2 className={styles.cardTitle}>Grief Counseling</h2>

          <p className={styles.cardText}>
            Grieving the loss of a loved one, relationship, or major life change
            can feel isolating. Our counselors provide compassionate support to
            help you process emotions, find comfort, and heal at your own pace.
          </p>

          <button
            onClick={() => setShowModal(true)}
            className={styles.bookButton}
          >
            <a href="/booking">Book a Session</a>
          </button>
        </div>

        <div className={styles.serviceCard}>
          <h2 className={styles.cardTitle}>Crisis Intervention</h2>

          <p className={styles.cardText}>
            Immediate emotional support when you need it most. Our crisis
            counselors are available 24/7 to assist individuals experiencing
            trauma, panic, severe emotional distress, or overwhelming situations
            with care, empathy, and professionalism.
          </p>

          <button
            onClick={() => setShowModal(true)}
            className={styles.bookButton}
          >
            <a href="/booking">Book a Session</a>
          </button>
        </div>

        <div className={styles.serviceCard}>
          <h2 className={styles.cardTitle}>Virtual Counseling</h2>

          <p className={styles.cardText}>
            Access professional counseling from the comfort and privacy of your
            own space. Our secure virtual sessions make it easier to get support
            wherever you are, whether at home, work, or while traveling.
          </p>

          <button
            onClick={() => setShowModal(true)}
            className={styles.bookButton}
          >
            <a href="/booking">Book a Session</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
