//imports
import Image from "next/image";

export default function AboutUs() {
  return (
    <div
      id="about-us"
      className="max-w-8xl mx-auto inline-block items-center p-3 pt-0 lg:flex lg:flex-wrap lg:pt-4"
    >
      <div className="lg:w-3/6">
        <h2 className="max-w-xl lg:text-[4.2em] text-3xl font-bold leading-none text-black inline-block">
          Brighten Your Smile and Strengthen Your Family&apos;s Oral Health
        </h2>
        <p className="mt-6 max-w-2xl text-xl font-semibold text-[#404040]">
          We understand the importance of maintaining good oral hygiene for the
          whole family. Our friendly and experienced team is here to provide
          personalized care and treatment to help you and your loved ones
          achieve and maintain bright and healthy smiles.
        </p>
      </div>
      <div className="mb-20 mt-44 hidden w-full flex-col lg:mt-12 lg:inline-block lg:w-3/6">
        <Image
          src="https://picsum.photos/648/480?"
          alt="Hero"
          width={648}
          height={480}
        />
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
