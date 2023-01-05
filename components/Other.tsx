import Link from "next/link";
import Image from "next/image";

export default function Other() {
  return (
    <div id="#other" className="bg-white text-black">
      <div className="mx-auto">
        <div className="max-w-8xl mx-auto px-5 py-24 lg:px-24">
          <div className="my-6 flex w-full flex-col text-left lg:text-center">
            <h3 className="mb-8 text-5xl font-bold text-black">
              Dui tellus quis magna id ultricies eu sed.
            </h3>
            <h3 className="mb-12 px-0 text-lg font-semibold text-gray-900 lg:px-52">
              Lorem ipsum accumsan arcu, consectetur adipiscing elit. Aliquet
              vestibulum molestie amet, maecenas id amet. Ipsum accumsan arcu,
              aenean viverra penatibus quis. Laoreet.
            </h3>
          </div>
          <Image
            src="https://picsum.photos/648/480?"
            alt="img"
            width={648}
            height={480}
          />
        </div>
      </div>
      <div className="text-black">
        <div className="max-w-8xl mx-auto flex flex-col px-5 py-48 text-black lg:flex-row">
          <div className="lg:mb-0 lg:w-full lg:max-w-xl">
            <Image
              className="rounded object-cover object-center"
              alt="image"
              src="https://picsum.photos/648/480?"
              width={648}
              height={480}
            />
          </div>
          <div className="items-left flex flex-col pt-16 text-left lg:w-1/2 lg:flex-grow lg:items-start lg:pl-32 lg:pl-48 lg:text-left">
            <h2 className="mb-2 text-lg leading-tight text-gray-700 sm:text-lg">
              Viverra enim diam gravida risus nisl.
            </h2>
            <h2 className="mb-6 text-lg font-bold sm:text-lg">Lectus eu.</h2>
            <h2 className="mb-4 text-3xl font-bold sm:text-3xl">
              Lorem ipsum accumsan arcu, consectetur adipiscing elit. Sed eget
              enim vel.
            </h2>
            <Link
              href="/"
              className="underline-blue mt-12 text-lg font-bold leading-relaxed"
            >
              Ut convallis massa.
            </Link>
          </div>
        </div>
      </div>
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
            Sem enim cursus orci at.
          </h2>
          <p className="mb-4 text-lg leading-relaxed">
            In ullamcorper magna nunc, non molestie augue feugiat eget. Mauris,
            vitae et, vitae et cursus amet tincidunt feugiat nulla. Senectus
            maecenas diam risus sodales dictum eu. Eget cursus sit bibendum
            pulvinar faucibus vitae nam sed. Faucibus vel laoreet.
          </p>
          <Link href="/" className="underline-blue font-semibold">
            Learn more
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
          src="https://picsum.photos/648/480?"
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
          src="https://picsum.photos/648/480?"
          alt="img"
          width={648}
          height={480}
        />
      </div>
    </div>
  );
}
