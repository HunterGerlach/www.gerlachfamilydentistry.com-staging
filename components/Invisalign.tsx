import Link from "next/link";

import Image from "next/image";

export default function Invisalign() {
  return (
    <div id="invisalign" className="mx-auto px-5 pt-32 pb-4 lg:px-24">
      <div
        className="
              max-w-9xl
              mx-auto
              flex
              flex-col
              items-center
              justify-center
              px-5
            "
      >
        <div className="mr-0 mb-6 w-full py-4 text-center lg:w-2/3">
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
            Straighten Your Smile with Invisalign
          </h2>
          <p className="mb-4 text-lg leading-relaxed">
            Looking for a discreet and comfortable way to straighten your teeth?
            Invisalign may be the perfect solution for you! This modern
            orthodontic treatment uses clear, removable aligners to gently shift
            your teeth into place. No metal brackets or wires necessary!
            Invisalign is a popular choice for adults and teenagers looking to
            improve their smile without the hassle of traditional braces.
            Contact our office to find out if Invisalign is right for you.
          </p>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://www.invisalign.com/how-invisalign-works"
            className="underline-blue font-semibold"
          >
            Learn more <span className="text-2xl">&rarr;</span>
          </Link>
        </div>
        <Image
          className="
                lg:w-5/7
                mb-40
                hidden
                w-5/6
                rounded object-cover
                object-center
                lg:inline-block 
                lg:w-4/6
              "
          src="/services/invisalign.jpg"
          alt="img"
          width={648}
          height={480}
        />

        <Image
          className="
              mb-24
              inline-block
              w-5/6
              rounded
              object-cover object-center
              lg:hidden
              lg:w-4/6 
            "
          src="/services/invisalign.jpg"
          alt="img"
          width={648}
          height={480}
        />
      </div>
    </div>
  );
}
