/* eslint-disable @next/next/no-html-link-for-pages */

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  // a script that unhides a div that contains information about teeth called "tooth-info"
  const showToothInfo = () => {
    // the div that contains the information about teeth should bounce into place when the tooth icon is clicked
    const toothInfo = document.querySelector(".tooth-info");
    toothInfo?.classList.toggle("hidden");
  };
  // A list of jokes to display in the footer
  const jokes = [
    "What award did the dentist win? 🦷 A little plaque.",
    "What do dentists call the x-rays they take of patients' teeth? 🦷 Tooth pics.",
    "What did the dentist say to the tooth when he had to leave the room? 🦷 I'll fill you in when I get back.",
    "Which teeth do you need to brush? 🦷 The ones you want to keep.",
    "If a kid has 25 candy bars and they eat 22 of them, what do they have? 🦷 Cavities.",
    "What did the dentist say when Tiger Woods came in for an appointment? 🦷 You have a hole in one.",
    "What do you call a dentist who works in a shoe store? 🦷 A foot doctor.",
  ];

  const [joke, setJoke] = useState("Hello world!");
  useEffect(() => setJoke(jokes[Math.floor(Math.random() * jokes.length)]), []);

  // a script that smooth scrolls to the section of the page that is clicked on in the navbar
  const smoothScroll = (e: any) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    targetElement?.scrollIntoView({ behavior: "smooth", block: "start" });
    // URL should update accordingly
    window.history.pushState("", "", targetId);
  };

  return (
    <>
      <footer id="contact-us" className="grotesk bg-[#f9fbfb]">
        <div className="max-w-8xl mx-auto px-5 py-24 text-black">
          <div className="order-first flex flex-wrap text-left">
            {/* A block of two office location descriptions with accompanying images */}
            <div className="location w-full px-4 md:w-2/4 lg:w-1/4">
              <h2 className="mb-3 text-lg tracking-widest underline-purple">
                Locations
              </h2>
              <nav className="list-none space-y-2 py-3">
                <li>
                  <div className="flex flex-row">
                    <div className="flex flex-col mb-6">
                      <h3 className="text-sm font-semibold mb-2">
                        Middletown/East Louisville
                      </h3>
                      <a href="tel:502-244-0333">(502) 244-0333</a>
                      <address className="text-xs text-gray-500 my-2">
                        11900 Shelbyville Road
                        <br />
                        Louisville, KY 40243
                      </address>
                      <Link
                        href="https://www.google.com/maps/dir/?api=1&destination=11900+Shelbyville+Rd,+Louisville,+KY+40243"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Get Directions <span className="text-2xl">&rarr;</span>
                        📍
                      </Link>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row">
                    <div className="flex flex-col mb-6">
                      <h3 className="text-sm font-semibold mb-2">
                        Woodlawn/South Louisville
                      </h3>
                      <a href="tel:502-368-5529">(502) 368-5529</a>
                      <address className="text-xs text-gray-500 my-2">
                        210 W Woodlawn Ave
                        <br />
                        Louisville, KY 40214
                      </address>
                      <Link
                        href="https://www.google.com/maps/dir/?api=1&destination=210+W+Woodlawn+Ave,+Louisville,+KY+40214"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Get Directions <span className="text-2xl">&rarr;</span>
                        📍
                      </Link>
                    </div>
                  </div>
                </li>
              </nav>
            </div>

            {/*<div className="w-full px-4 md:w-2/4 lg:w-1/5">
              <h2 className="mb-3 text-lg tracking-widest">Est.</h2>
              <nav className="list-none space-y-2 py-3">
                <li>
                  <a href="/">Vitae nec.</a>
                </li>
                <li>
                  <a href="/">Purus</a>
                </li>
                <li>
                  <a href="/">Nibh.</a>
                </li>
                <li>
                  <a href="/">Proin semper justo.</a>
                </li>
                <li>
                  <a href="/">Blandit.</a>
                </li>
                <li>
                  <a href="/">Malesuada.</a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 md:w-2/4 lg:w-1/5">
              <h2 className="mb-3 text-lg tracking-widest">Et.</h2>
              <nav className="mb-10 list-none space-y-2 py-3">
                <li>
                  <a href="/">Ninc elementum.</a>
                </li>
                <li>
                  <a href="/">Sit ac interdum</a>
                </li>
                <li>
                  <a href="/">Ac ut cras.</a>
                </li>
                <li>
                  <a href="/">Sed ipsum lobortis.</a>
                </li>
                <li>
                  <a href="/">Nulla maecenas nunc.</a>
                </li>
                <li>
                  <a href="/">Purus</a>
                </li>
              </nav>
  </div>*/}

            <div className="w-full px-4 md:w-2/4 lg:w-1/4">
              <h2 className="mb-3 text-lg tracking-widest underline-blue">
                Site Map
              </h2>
              <nav className="mb-10 list-none space-y-2 py-3 list-disc">
                <li>
                  <a href="#top" onClick={smoothScroll}>
                    ^Top^
                  </a>
                </li>
                <li>
                  <a href="#about-us" onClick={smoothScroll}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={smoothScroll}>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#reviews" onClick={smoothScroll}>
                    Reviews
                  </a>
                </li>
                <li>
                  <a href="#patient-resources" onClick={smoothScroll}>
                    Patient Resources
                  </a>
                </li>
                <li>
                  <a href="#invisalign" onClick={smoothScroll}>
                    Invisalign
                  </a>
                </li>
                <li>
                  <a href="#contact-us" onClick={smoothScroll}>
                    Contact
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 md:w-2/4 lg:w-1/4">
              <h2 className="mb-3 text-lg tracking-widest underline-purple">
                Follow Us!
              </h2>
              <nav className="mb-10 list-none space-y-2 py-3">
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/GerlachFamilyDentistry"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  {/* open in new tab */}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/gerlach_family_dentistry"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/GerlachFamDent"
                  >
                    Twitter
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full md:w-2/4 lg:w-1/4">
              <a onClick={showToothInfo} className="">
                <div className="relative border border-black transition hover:border-gray-500">
                  <div className="absolute top-0 right-0 pt-2 pr-2">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.66992 0.747559L0.669922 6.74756"
                        stroke="black"
                      />
                      <path
                        d="M0.669922 0.747559H6.66992V6.74756"
                        stroke="black"
                      />
                    </svg>
                  </div>
                  <div className="p-6">Book your appointment today!</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="px-2">
          <div className="max-w-8xl mx-auto px-5 py-6">
            <h2 className="text-black">
              Copyright &copy; 1982-2023 - Gerlach Family Dentistry, PLLC
            </h2>
            <div className="bg-gradient-to-r from-cyan-700 to-cyan-400 text-white">
              <h2 className="my-4 text-sm">
                {/* A random joke from jokes variable */}
                🪥 {joke} 😂
              </h2>
            </div>
            <div className="absolute right-0 -mt-24 hidden text-black lg:inline-block">
              <Link href="terms" className="mr-16">
                Terms & Conditions
              </Link>
              <Link href="privacy" className="mr-16">
                Privacy Policy
              </Link>
              <Link href="cookies" className="mr-16">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
