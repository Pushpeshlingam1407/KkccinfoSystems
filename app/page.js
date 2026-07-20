"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/slide1.jpg",
      title: "Premium Training",
      description: "20+ Years experience Faculty.",
      alignClass: styles.alignCenter,
    },
    {
      image: "/images/slide2.jpg",
      title: "Full Stack Developer",
      description: "Every Month starts Full Stack Developer Course (Python).",
      alignClass: styles.alignLeft,
    },
    {
      image: "/images/slide1.jpg",
      title: "Full Stack Developer",
      description: "Every Month starts Full Stack Developer Course (Dot Net).",
      alignClass: styles.alignRight,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div>
      {/* Carousel */}
      <div className={styles.carouselSection}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slideContainer} ${
              index === currentSlide ? styles.slideActive : styles.slideInactive
            }`}
          >
            <div className={styles.imageOverlay}></div>
            <div className={styles.slideImageWrapper}>
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className={styles.slideImage}
                priority={index === 0}
              />
            </div>
            <div className={styles.slideContent}>
              <div className={styles.slideTextContainer}>
                <div className={`${styles.textWrapper} ${slide.alignClass}`}>
                  <h1 className={styles.slideTitle}>
                    {slide.title}
                  </h1>
                  <p className={styles.slideDescription}>
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Carousel Controls */}
        <div className={styles.indicatorContainer}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={index === currentSlide ? styles.indicatorActive : styles.indicatorInactive}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className={styles.carouselNavButtonLeft}
        >
          <svg className={styles.navIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className={styles.carouselNavButtonRight}
        >
          <svg className={styles.navIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>

      {/* Marketing Section */}
      <div className={styles.marketingSection}>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureImageWrapper}>
              <Image src="/images/training.png" alt="Software Training" fill className={styles.featureImage} />
            </div>
            <h2 className={styles.featureTitle}>Software Training</h2>
            <p className={styles.featureText}>
              KKCC is one of the premier Computer educational institute dedicated to impart quality education and promoting excellence in academic pursuits in the filed of Software Training and Developing.
            </p>
            <Link href="/training" className={styles.featureButton}>
              View details &raquo;
            </Link>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureImageWrapper}>
              <Image src="/images/development.png" alt="Developing" fill className={styles.featureImage} />
            </div>
            <h2 className={styles.featureTitle}>Developing</h2>
            <p className={styles.featureText}>
              KKCC has a full-fledged Hardware and Network Training and placement for right students and we are proud to say that we have done Institute placements with many Hardware and Networking Servicing Center.
            </p>
            <Link href="/about" className={styles.featureButton}>
              View details &raquo;
            </Link>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureImageWrapper}>
              <Image src="/images/liveprojects.png" alt="Live Projects" fill className={styles.featureImage} />
            </div>
            <h2 className={styles.featureTitle}>Live Projects</h2>
            <p className={styles.featureText}>
              KKCC has a Developed live projects and also provide project( Computers Science ) training for Engineering, Degree, PG studied studetns or completed students.This institute can also training projects from scrach to advance
            </p>
            <Link href="/about" className={styles.featureButton}>
              View details &raquo;
            </Link>
          </div>
        </div>

        <hr className={styles.divider} />

        {/* Featurette */}
        <div className={styles.aboutSection}>
          <div className={styles.aboutContent}>
            <h2 className={styles.aboutTitle}>
              About KKCC
            </h2>
            <p className={styles.aboutText}>
              KKCC Info Systems, Ongole is an IT solution provider for projects and it provides courses for students. Their approach focuses on teaching the students in a practical Environment, making them involve to be a part of institution by sending to the people where software solutions and hardware problems are dealt, combining IT innovation and adoption while also leveraging an organization current IT assets.
            </p>
            <p className={styles.aboutText}>
              A strategy where we architect, integrate and manage technology services and solutions-we call it AIM for success. A robust offshore development methodology and reduced demand on customer resources, a focus on the use of reusable frameworks to provide cost and times benefits.
            </p>
          </div>
          <div className={styles.aboutImageContainer}>
            <div className={styles.aboutImageWrapper}>
              <Image
                src="/images/InstituteImage.jpg"
                alt="Institute"
                fill
                className={styles.aboutImage}
              />
            </div>
          </div>
        </div>
        
        <hr className={styles.divider} />
      </div>
    </div>
  );
}
