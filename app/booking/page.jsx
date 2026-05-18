'use client';
import React, { useState, useRef, useEffect } from "react";
import styles from "./booking.module.css";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const services = [
    { value: "couples", label: "Couples Therapy" },
    { value: "individual", label: "Individual Counseling" },
    { value: "family", label: "Family Therapy" },
    { value: "crisis", label: "Crisis Support" },
  ];

  const selectedService = services.find(s => s.value === formData.service);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceSelect = (serviceValue) => {
    setFormData((prev) => ({
      ...prev,
      service: serviceValue,
    }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const mailtoLink = `mailto:support@visionh.com?subject=Booking Request from ${formData.name}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not provided"}\nService: ${selectedService?.label || "Not selected"}\nPreferred Date: ${formData.date}\nMessage: ${formData.message || "No message provided"}\n\nPlease contact this person to confirm the booking.`
      )}`;
      
      window.location.href = mailtoLink;
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
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
    <div className={styles.container} id="booking">
      <div className={styles.formWrapper}>
        <div className={styles.formCard}>
          <h2 className={styles.title}>Book a Counseling Session</h2>

          {submitStatus === "success" && (
            <div className={styles.successMessage}>
              Booking request sent! We'll contact you within 24 hours.
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
              <label htmlFor="phone" className={styles.label}>
                Phone (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={styles.input}
                placeholder="+1 234 567 8900"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="service" className={styles.label}>
                Service Needed <span className={styles.required}>*</span>
              </label>
              <div className={styles.customSelect} ref={dropdownRef}>
                <div
                  type="button"
                  className={styles.selectTrigger}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span className={selectedService ? styles.selectedValue : styles.placeholderValue}>
                    {selectedService ? selectedService.label : "Select a service"}
                  </span>
                  <span className={`${styles.arrow} ${isDropdownOpen ? styles.arrowUp : styles.arrowDown}`}>
                    ▼
                  </span>
                </div>
                
                {isDropdownOpen && (
                  <div className={styles.dropdownMenu}>
                    {services.map((service) => (
                      <div
                        key={service.value}
                        className={`${styles.dropdownItem} ${
                          formData.service === service.value ? styles.dropdownItemSelected : ""
                        }`}
                        onClick={() => handleServiceSelect(service.value)}
                      >
                        {service.label}
                        {formData.service === service.value && (
                          <span className={styles.checkmark}>✓</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="date" className={styles.label}>
                Preferred Date <span className={styles.required}>*</span>
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className={styles.input}
                min={new Date().toISOString().split("T")[0]}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Brief Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={styles.textarea}
                placeholder="Tell us more about what you'd like to discuss..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.submitButton}
            >
              {isSubmitting ? "Sending..." : "Book Session"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;