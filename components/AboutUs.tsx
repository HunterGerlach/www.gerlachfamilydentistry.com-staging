//imports
import Image from "next/image";

export default function AboutUs() {
  return (
    <div
      id="about-us"
      className="max-w-8xl mx-auto inline-block items-center p-3 pt-0 lg:flex lg:flex-wrap lg:pt-4"
    >
      <div className="w-full">
        {/* An image that floats to the right */}
        <Image
          className="float-right ml-6 mb-6 lg:mb-0 lg:ml-0 lg:mr-6"
          src="https://picsum.photos/648/480?"
          alt="Hero"
          width={648}
          height={480}
        />
        {/* Text that wraps around the image */}
        <h2 className="flex max-w-xl lg:text-[4.2em] text-3xl font-bold leading-none text-black inline-block">
          Brighten Your Smile and Strengthen Your Family&apos;s Oral Health
        </h2>
        <p className="mt-6 text-xl font-semibold text-[#404040]">
          Gerlach Family Dentistry has been providing top-quality dental care to
          patients in the Louisville area since 1982. Our team is led by husband
          and wife dentists,
          <span className="inline-dentist">Jo Ellen K. Gerlach, DMD</span>
          and{" "}
          <span className="inline-dentist">
            Harold V. "Chip" Gerlach Jr., DMD
          </span>
          , who have a passion for helping people achieve and maintain optimal
          oral health.
        </p>

        <p className="mt-6 text-xl font-semibold text-[#404040]">
          We understand that visiting the dentist can be intimidating, which is
          why we strive to create a warm and welcoming environment for all of
          our patients. Our team is dedicated to providing personalized care and
          treatment to meet the unique needs and goals of each of our patients,
          with a focus on family values and health and wellness.
        </p>

        <p className="mt-6 text-xl font-semibold text-[#404040]">
          In addition to offering a range of dental services, including
          cleanings, fillings, crowns, and more, we also have financing options
          available to help make dental treatment more accessible.
        </p>

        <p className="mt-6 text-xl font-semibold text-[#404040]">
          Thank you for considering our family dentistry office for your dental
          care needs. We look forward to welcoming you to our practice and
          helping you achieve and maintain a healthy and confident smile.
        </p>
        {/* Display a simple signature block. Use a FontAwesome signature font. Position to the right side. */}
        <div className="signature mt-6 text-xl font-semibold text-[#404040]">
          <span className="float-left signature sig1">
            <i>Smilingly yours,</i>
          </span>
          <br />
          <span className="signature sig2">
            <i>Jo Ellen K. Gerlach, DMD</i>
          </span>
          <br />
          <span className="signature sig3">
            <i>Harold V. "Chip" Gerlach Jr., DMD</i>
          </span>
        </div>
      </div>
      <div className="my-20 inline-block w-full flex-col lg:mt-0 lg:hidden lg:w-2/5">
        <Image
          src="https://picsum.photos/648/480?"
          alt="image"
          width={648}
          height={480}
        />
      </div>
    </div>
  );
}
