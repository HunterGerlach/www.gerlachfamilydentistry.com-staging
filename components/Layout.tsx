/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */

import Image from "next/image";

import AboutUs from "./AboutUs";
import Services from "./Services";
import Reviews from "./Reviews";
import PatientResources from "./PatientResources";
import Invisalign from "./Invisalign";

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

      <div className="tooth-info hidden fixed bottom-20 right-20 mb-8 mr-8 z-10">
        <div className="bg-white rounded-lg shadow-lg p-4 drop-shadow-xl border-solid border-4 border-pink-700">
          <h1 className="text-2xl font-bold">
            <em>Teeth</em> Sheet
          </h1>
          <p className="text-gray-600"></p>
          {/* A nicely formatted list of information about teeth */}
          <ul className="list-disc list-inside">
            <li>
              Brush your teeth twice a day (2 min each time) with a fluoride
              toothpaste.
            </li>
            <li>
              Floss daily to remove plaque and food particles from between your
              teeth.
            </li>
            <li>Use mouthwash to kill bacteria and freshen your breath.</li>
            <li>
              Replace your toothbrush every three to four months or sooner if
              the bristles are frayed.
            </li>
            <li>
              Avoid sugary drinks and foods to reduce your risk of tooth decay.
            </li>
            <li>
              Drink plenty of water to stay hydrated and rinse away bacteria.
            </li>
            <li>
              Visit the dentist regularly (every 6 months) for professional
              cleanings and check-ups.
            </li>
            <li>
              If you have any dental problems or concerns, give us a call!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
