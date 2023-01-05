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
                  w-full
                  md:grid md:grid-cols-2
                  gap-16
                  text-center
                  lg:grid-cols-6"
          >
            {/* Block links of services that navigate to the corresponding service page */}
            <div className="items-center justify-center lg:inline-block">
              <Link
                href="/"
                className="
                  "
              >
                <Image
                  src="https://picsum.photos/648/480?"
                  alt="Segment"
                  className="block h-24 object-contain"
                  width={648}
                  height={480}
                />
                {/* Name of the service */}
                <div
                  className="my-4 flex w-full flex-col text-center
                        underline-blue
                        mb-8
                        mt-6
                        text-xl
                        font-bold
                        text-black"
                >
                  Cleanings and exams
                </div>
                {/* Description of the service. Hiddnen by default. */}
                <div className="service-description">
                  Regular cleanings and exams are an important part of
                  maintaining good oral health. These services can help to
                  prevent tooth decay and gum disease, and they can also detect
                  problems early on, when they are easier to treat.
                </div>
              </Link>
            </div>
            <div className="items-center justify-center lg:inline-block">
              <Link
                href="/"
                className="
                  "
              >
                <Image
                  src="https://picsum.photos/648/480?"
                  alt="Segment"
                  className="block h-24 object-contain"
                  width={648}
                  height={480}
                />
                {/* Name of the service */}
                <div
                  className="my-4 flex w-full flex-col text-center
                        underline-blue
                        mb-8
                        mt-6
                        text-xl
                        font-bold
                        text-black"
                >
                  Fillings
                </div>
                {/* Description of the service. Hiddnen by default. */}
                <div className="">
                  If a tooth is damaged or has a cavity, a filling can be used
                  to repair it. Fillings can be made from a variety of
                  materials, including composite resin, gold, or amalgam.
                </div>
              </Link>
            </div>
            <div className="items-center justify-center lg:inline-block">
              <Link
                href="/"
                className="
                  "
              >
                <Image
                  src="https://picsum.photos/648/480?"
                  alt="Segment"
                  className="block h-24 object-contain"
                  width={648}
                  height={480}
                />
                {/* Name of the service */}
                <div
                  className="my-4 flex w-full flex-col text-center
                        underline-blue
                        mb-8
                        mt-6
                        text-xl
                        font-bold
                        text-black"
                >
                  Crowns
                </div>
                {/* Description of the service. Hiddnen by default. */}
                <div className="">
                  A crown, also known as a cap, is a type of restoration that
                  covers the entire surface of a tooth. Crowns can be used to
                  repair teeth that are severely damaged or to support a tooth
                  that has had a root canal.
                </div>
              </Link>
            </div>
            <div className="items-center justify-center lg:inline-block">
              <Link
                href="/"
                className="
                  "
              >
                <Image
                  src="https://picsum.photos/648/480?"
                  alt="Segment"
                  className="block h-24 object-contain"
                  width={648}
                  height={480}
                />
                {/* Name of the service */}
                <div
                  className="my-4 flex w-full flex-col text-center
                        underline-blue
                        mb-8
                        mt-6
                        text-xl
                        font-bold
                        text-black"
                >
                  Bridges
                </div>
                {/* Description of the service. Hiddnen by default. */}
                <div className="">
                  A bridge is a type of restoration that replaces missing teeth.
                  It consists of one or more false teeth, known as pontics, that
                  are supported by crowns on either side.
                </div>
              </Link>
            </div>
            <div className="items-center justify-center lg:inline-block">
              <Link
                href="/"
                className="
                  "
              >
                <Image
                  src="https://picsum.photos/648/480?"
                  alt="Segment"
                  className="block h-24 object-contain"
                  width={648}
                  height={480}
                />
                {/* Name of the service */}
                <div
                  className="my-4 flex w-full flex-col text-center
                        underline-blue
                        mb-8
                        mt-6
                        text-xl
                        font-bold
                        text-black"
                >
                  Orthodontic treatment
                </div>
                {/* Description of the service. Hiddnen by default. */}
                <div className="">
                  Orthodontic treatment is used to correct misaligned teeth and
                  jaws. This can be done using braces or other appliances, such
                  as clear aligners.
                </div>
              </Link>
            </div>
            <div className="items-center justify-center lg:inline-block">
              <Link
                href="/"
                className="
                  "
              >
                <Image
                  src="https://picsum.photos/648/480?"
                  alt="Segment"
                  className="block h-24 object-contain"
                  width={648}
                  height={480}
                />
                {/* Name of the service */}
                <div
                  className="my-4 flex w-full flex-col text-center
                        underline-blue
                        mb-8
                        mt-6
                        text-xl
                        font-bold
                        text-black"
                >
                  Cosmetic Dentistry
                </div>
                {/* Description of the service. Hiddnen by default. */}
                <div className="">
                  Cosmetic dentistry is a type of dental treatment that is
                  focused on improving the appearance of the teeth and smile.
                  This can include procedures such as teeth whitening, veneers,
                  and bonding.
                </div>
              </Link>
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
              Explore more...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
