/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */

import AboutUs from "./AboutUs";
import Invisalign from "./Invisalign";
import Reviews from "./Reviews";
import Services from "./Services";

export default function Main() {
  return (
    <div className="grotesk max-w-8xl mx-auto">
      <section className="w-full text-black">
        <AboutUs />
        <Services />
        <Reviews />
        <Invisalign />
        <div className="invisible mx-auto flex max-w-6xl p-3 pb-32 lg:visible lg:px-2">
          <img src="https://picsum.photos/648/480?" alt="img" />
        </div>
        <div className="bg-white text-black">
          <div className="mx-auto flex flex-col items-center px-5 pt-56 lg:flex-row">
            <div className="mb-16 flex flex-col text-left lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start lg:pr-16 lg:pr-6">
              <h2 className="mb-4 text-4xl font-bold leading-none sm:text-5xl">
                Bibendum tortor et sit convallis nec morbi.
              </h2>
              <p className="font-3xl mb-8 font-semibold leading-relaxed">
                Lorem ipsum auctor sit amet, consectetur adipiscing elit. Sit a
                egestas tortor viverra nisl, in non. Neque viverra sollicitudin
                amet volutpat auctor amet. Aliquam pellentesque condimentum
                mauris sit tincidunt egestas ullamcorper sit.{" "}
              </p>
            </div>
            <div className="lg:w-full lg:max-w-2xl">
              <img src="https://picsum.photos/648/480?" alt="img" />
            </div>
          </div>
          <div className="mt-32">
            <div className="mx-auto flex flex-col px-5 py-24 text-left lg:flex-row">
              <div className="hidden lg:inline-block lg:w-full lg:max-w-xl">
                <img src="https://picsum.photos/648/480?" alt="img" />
              </div>
              <div className="flex flex-col pt-0 text-left lg:w-1/2 lg:flex-grow lg:items-start lg:pl-16 lg:pl-24 lg:pt-24">
                <h2 className="mb-4 text-4xl font-bold leading-none sm:text-5xl">
                  Eu diam in magna blandit sit magna dolor proin velit.
                </h2>
                <p className="mb-8 font-semibold leading-relaxed text-black">
                  Lorem ipsum ac neque, consectetur adipiscing elit. Nibh neque,
                  ut purus donec sed donec semper ac vestibulum. Mi urna,
                  facilisis arcu, auctor elit. Ut nunc non aenean netus ut.
                </p>
              </div>
              <div className="inline-block lg:hidden lg:w-full lg:max-w-xl">
                <img src="https://picsum.photos/648/480?" alt="img" />
              </div>
            </div>
          </div>
          <div className="my-24 p-4 text-black">
            <div className="max-w-9xl mx-auto flex flex-col items-center bg-gradient-to-r from-blue-200 to-blue-100 px-5 py-24 lg:flex-row">
              <div className="flex flex-col items-center pb-16 pl-0 text-center lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start lg:pl-12 lg:pr-24 lg:text-left">
                <h2 className="pb-4 text-2xl font-bold leading-tight lg:text-4xl">
                  Lorem ipsum mi at amet, consecteturadipiscing elit. Mattis.
                </h2>
                <p className="text-md mb-8 lg:text-xl">
                  Lorem ipsum praesent amet, consectetur adipiscing elit. Cursus
                  ullamcorper id tristique tincidunt. Tincidunt feugiat at mi
                  feugiat hendrerit. Ac faucibus accumsan, quis lacus, lectus
                  eget bibendum. At praesent quisque sollicitudin fusce.
                </p>
              </div>
              <div className="w-4/7 pr-12 lg:w-2/5">
                <img
                  src="https://picsum.photos/648/480?"
                  className="hidden object-cover object-center lg:inline-block"
                  alt="image"
                />
                <img
                  src="https://picsum.photos/648/480?"
                  className="inline-block object-cover object-center lg:hidden"
                  alt="image"
                />
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <div className="max-w-8xl mx-auto px-5 py-24 lg:px-24">
              <div className="my-6 flex w-full flex-col text-left lg:text-center">
                <h3 className="mb-8 text-5xl font-bold text-black">
                  Dui tellus quis magna id ultricies eu sed.
                </h3>
                <h3 className="mb-12 px-0 text-lg font-semibold text-gray-900 lg:px-52">
                  Lorem ipsum accumsan arcu, consectetur adipiscing elit.
                  Aliquet vestibulum molestie amet, maecenas id amet. Ipsum
                  accumsan arcu, aenean viverra penatibus quis. Laoreet.
                </h3>
              </div>
              <img src="https://picsum.photos/648/480?" alt="img" />
            </div>
          </div>
          <div className="text-black">
            <div className="max-w-8xl mx-auto flex flex-col px-5 py-48 text-black lg:flex-row">
              <div className="lg:mb-0 lg:w-full lg:max-w-xl">
                <img
                  className="rounded object-cover object-center"
                  alt="image"
                  src="https://picsum.photos/648/480?"
                />
              </div>
              <div className="items-left flex flex-col pt-16 text-left lg:w-1/2 lg:flex-grow lg:items-start lg:pl-32 lg:pl-48 lg:text-left">
                <h2 className="mb-2 text-lg leading-tight text-gray-700 sm:text-lg">
                  Viverra enim diam gravida risus nisl.
                </h2>
                <h2 className="mb-6 text-lg font-bold sm:text-lg">
                  Lectus eu.
                </h2>
                <h2 className="mb-4 text-3xl font-bold sm:text-3xl">
                  Lorem ipsum accumsan arcu, consectetur adipiscing elit. Sed
                  eget enim vel.
                </h2>
                <a
                  href="/"
                  className="underline-blue mt-12 text-lg font-bold leading-relaxed"
                >
                  Ut convallis massa.
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
