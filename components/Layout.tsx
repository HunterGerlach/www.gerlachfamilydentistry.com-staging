/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */

import Image from "next/image";
import Link from "next/link";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Reviews from "./Reviews";
import PatientResources from "./PatientResources";
import Invisalign from "./Invisalign";
import styles from "/styles/Layout.module.css";
import Head from "next/head";

export default function Main() {
  return (
    <div className="grotesk max-w-8xl mx-auto">
      <section className="w-full text-black">
        <AboutUs />
        <Services />
        <Reviews />
        <PatientResources />
        <Invisalign />
      </section>

      {/* An absolutely positioned div that contains information about teeth */}
      {/*<div className="tooth-info hidden absolute bottom-0 mb-8 mx-auto w-100 h-screen">*/}

      <div
        className={`${styles["tooth-info-mobile"]} tooth-info hidden fixed bottom-20 right-20 mb-8 mr-8 z-10`}
      >
        <div
          className={`${styles["the-popup"]} bg-white rounded-lg shadow-lg p-4 drop-shadow-xl border-solid border-4 border-pink-700 text-black`}
        >
          {/* Giant smiling emoji */}
          <div className="text-center">
            {/* Align the image to the center */}
            <Image
              src="/smile-emoji.png"
              alt="Smiling emoji"
              width={100}
              height={100}
              className="mx-auto"
            />
          </div>
          {/* Headline */}
          <h1 className="text-2xl font-bold text-center">
            Your Family's Smile Matters to Us
          </h1>
          {/* Content */}
          <div className={styles["popup-content"]}>
            <p>
              Book an appointment with our friendly team today to experience the
              best dental care in Louisville, KY!
            </p>
            <p>
              <strong>Why Patients Love Us...</strong>
            </p>
            {/* List of reasons why patients love us with tooth emojis as bullet points */}
            <ul>
              <li>
                <strong>🦷 Personal Care:</strong> You're more than just a
                patient to us—you're family.
              </li>
              <li>
                <strong>🦷 Experienced Staff:</strong> Our dentists and
                hygienists provide gentle, top-notch care for all ages.
              </li>
              <li>
                <strong>🦷 Convenient Hours:</strong> We offer early morning and
                late afternoon slots to fit your busy schedule.
              </li>
            </ul>
          </div>
          <div className={`${styles["popup-cta"]} text-center`}>
            <p className="cta-title">
              <strong>Ready to Make an Appointment?</strong>
            </p>
            <button className="cta-button">
              📞 Call Us Today for a Brighter Smile
              <span className="cta-phone">
                <Link href="tel:+15022440333">(502) 244-0333</Link>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
