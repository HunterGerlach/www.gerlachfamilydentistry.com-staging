/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */

import Image from "next/image";

import AboutUs from "./AboutUs";
import ExistingPatients from "./PatientResources";
import Invisalign from "./Invisalign";
import Other from "./Other";
import Reviews from "./Reviews";
import Services from "./Services";
import PatientResources from "./PatientResources";

export default function Main() {
  return (
    <div className="grotesk max-w-8xl mx-auto">
      <section className="w-full text-black">
        <AboutUs />
        <Services />
        <Reviews />
        <PatientResources />
        <Invisalign />
        <hr className="border-gray-200" />
        <Other />
      </section>
    </div>
  );
}
