import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <div id="services" className="mt-0 bg-white lg:mt-40">
      <div className="mx-auto">
        <div className="mx-auto px-5 py-24 lg:px-24">
          <div className="my-10 flex w-full flex-col text-center">
            <h2 className="mb-5 text-2xl font-bold text-black lg:text-3xl">
              We offer a range of services to meet the unique needs of every
              member of your family, from routine cleanings to more complex
              dental work.
            </h2>
          </div>
          <div
            className="
                  grid grid-cols-2
                  gap-16
                  text-center
                  lg:grid-cols-6"
          >
            <div className="hidden items-center justify-center lg:inline-block">
              <Image
                src="https://picsum.photos/648/480?"
                alt="Segment"
                className="block h-24 object-contain"
              />
            </div>
            <div className="hidden items-center justify-center lg:inline-block">
              <Image
                src="https://picsum.photos/648/480?"
                alt="Segment"
                className="block h-24 object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="https://picsum.photos/648/480?"
                alt="Segment"
                className="block h-24 object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="https://picsum.photos/648/480?"
                alt="Segment"
                className="block h-24 object-contain"
              />
            </div>
            <div className="hidden items-center justify-center lg:inline-block">
              <Image
                src="https://picsum.photos/648/480?"
                alt="Segment"
                className="block h-24 object-contain"
              />
            </div>
            <div className="hidden items-center justify-center lg:inline-block">
              <Image
                src="https://picsum.photos/648/480?"
                alt="Segment"
                className="block h-24 object-contain"
              />
            </div>
          </div>
          <div className="my-12 flex w-full flex-col pl-8 text-center">
            <Link
              href="/"
              className="
                    underline-blue
                    mb-8
                    mt-6
                    text-xl
                    font-bold
                    text-black
                  "
            >
              Ut eleifend.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
