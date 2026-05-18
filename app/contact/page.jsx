"use client";
import React, { useState } from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import styles from "./contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS or backend API would go here
      // For now, using mailto as fallback
      const mailtoLink = `mailto:visionhub@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(
        `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;
      setSubmitStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.headerWrapper}>
        <div className={styles.headerIcon}>
          <h4 className={styles.contactTitle}>
            Contact us
            <Icon.Phone className={styles.titleIcon} />
          </h4>
        </div>
        <div className={styles.headerSubtitle}>
          <h2 className={styles.mainTitle}>Do you have questions?</h2>
        </div>
        <div className={styles.arrowDown}>
          <Icon.ArrowDown className={styles.arrowIcon} />
        </div>
        <div className={styles.getInTouch}>
          <h3 className={styles.getInTouchTitle}>Get in touch</h3>
        </div>
      </div>

      {/* Contact Cards Grid */}
      <div className={styles.cardsGrid}>
        {/* Call Card */}
        <div className={styles.contactCard}>
          <div className={styles.cardContent}>
            <div className={styles.iconWrapper}>
              <Icon.Phone className={styles.cardIcon} />
            </div>
            <h4 className={styles.cardTitle}>Call us</h4>
            <div className={styles.cardDetails}>
              <a href="tel:+2348134567890" className={styles.cardLink}>
                +234 813 4567 890
              </a>
              <a href="tel:+2349034567890" className={styles.cardLink}>
                +234 903 4567 890
              </a>
            </div>
          </div>
        </div>

        {/* Email Card */}
        <div className={styles.contactCard}>
          <div className={styles.cardContent}>
            <div className={styles.iconWrapper}>
              <Icon.Envelope className={styles.cardIcon} />
            </div>
            <h4 className={styles.cardTitle}>Email us</h4>
            <div className={styles.cardDetails}>
              <a href="mailto:visionhub@gmail.com" className={styles.cardLink}>
                visionhub@gmail.com
              </a>
              <a href="mailto:info@visionhub.com" className={styles.cardLink}>
                info@visionhub.com
              </a>
            </div>
          </div>
        </div>

        {/* Visit Card */}
        <div className={styles.contactCard}>
          <div className={styles.cardContent}>
            <div className={styles.iconWrapper}>
              <Icon.MapPin className={styles.cardIcon} />
            </div>
            <h4 className={styles.cardTitle}>Visit us</h4>
            <div className={styles.cardDetails}>
              <span className={styles.cardText}>123 Adam's Road</span>
              <span className={styles.cardText}>Lagos, Nigeria</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className={styles.formSection} id="contact">
        <div className={styles.formWrapper}>
          <div className={styles.formCard}>
            <h1 className={styles.formTitle}>Let's Connect</h1>

            {submitStatus === "success" && (
              <div className={styles.successMessage}>
                Message sent successfully! We'll get back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className={styles.errorMessage}>
                Something went wrong. Please try again or email us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Full Name <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="John Doe"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Phone Number <span className={styles.required}>*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="+234 800 000 0000"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email <span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="john@example.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Message <span className={styles.required}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  className={styles.textarea}
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitButton}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;