import Image from "next/image";
import Link from "next/link";

export default function Reviews() {
  return (
    <div
      id="reviews"
      className="text-black max-w-8xl mx-auto px-5 py-24 lg:px-24"
    >
      <div className="my-6 flex w-full flex-col text-left lg:text-center">
        <h3 className="mb-8 text-5xl font-bold text-black">
          Patient Testimonials: A Reason to Smile
        </h3>
        <h3 className="mb-12 px-0 text-lg font-semibold text-gray-900 lg:px-52">
          Read reviews from real patients to see why our family dentistry office
          is the go-to for top-notch treatment and personalized service. Patient
          testimonials offer a firsthand look at the care and attention our team
          provides. Find out what our satisfied patients have to say and why
          they keep coming back for more. And if you know someone who is already
          our patient, you can just ask them about their experience!
        </h3>
      </div>
      <div className="my-24 p-4 text-black">
        <div className="max-w-9xl mx-auto flex flex-col items-center bg-gradient-to-r from-blue-200 to-blue-100 px-5 py-24 lg:flex-row">
          <div className="flex flex-col items-center pb-16 pl-0 text-center lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start lg:pl-12 lg:pr-24 lg:text-left">
            <h2 className="pb-4 text-2xl font-bold leading-tight lg:text-4xl">
              &quot;I am always blown away by the level of care and attention I
              receive.&quot;
            </h2>
            <p className="text-md mb-8 lg:text-xl">
              I have been going to Dr. Gerlach&apos;s office for years, and I am
              always blown away by the level of care and attention I receive.
              From the moment I walk in the door, I feel welcomed and valued.
              The hygienists are gentle and thorough, and Dr. Gerlach is always
              willing to take the time to answer my questions and address my
              concerns. I can&apos;t recommend this practice enough!
            </p>
          </div>
          <div className="w-4/7 pr-12 lg:w-2/5">
            <Image
              src="https://picsum.photos/648/480?"
              className="hidden object-cover object-center lg:inline-block"
              alt="image"
              width={648}
              height={480}
            />
            <Image
              src="https://picsum.photos/648/480?"
              className="inline-block object-cover object-center lg:hidden"
              alt="image"
              width={648}
              height={480}
            />
          </div>
        </div>
      </div>
      <div className="mt-32">
        <div className="mx-auto flex flex-col px-5 py-24 text-left lg:flex-row">
          <div className="hidden lg:inline-block lg:w-full lg:max-w-xl">
            <Image
              src="https://picsum.photos/648/480?"
              alt="img"
              width={648}
              height={480}
              className="block object-cover object-center w-full h-full"
            />
          </div>
          <div className="flex flex-col pt-0 text-left lg:w-1/2 lg:flex-grow lg:items-start lg:pl-16 lg:pl-24 lg:pt-24">
            <h2 className="mb-4 text-4xl font-bold leading-none sm:text-5xl">
              &quot;They explained everything in a way she could understand and
              made her feel comfortable and relaxed.&quot;
            </h2>
            <p className="mb-8 font-semibold leading-relaxed text-black">
              My daughter was really nervous about getting her first filling,
              but the team at Dr. Chip&apos;s office was amazing. They explained
              everything in a way she could understand and made her feel
              comfortable and relaxed. She even fell asleep during the
              procedure! I am so grateful to have found such a kind and
              compassionate team to take care of our dental needs.
            </p>
          </div>
          <div className="inline-block lg:hidden lg:w-full lg:max-w-xl">
            <Image
              src="https://picsum.photos/648/480?"
              alt="img"
              width={648}
              height={480}
            />
          </div>
        </div>
      </div>
      <div className="my-24 p-4 text-black">
        <div className="max-w-9xl mx-auto flex flex-col items-center bg-gradient-to-r from-blue-200 to-blue-100 px-5 py-24 lg:flex-row">
          <div className="flex flex-col items-center pb-16 pl-0 text-center lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start lg:pl-12 lg:pr-24 lg:text-left">
            <h2 className="pb-4 text-2xl font-bold leading-tight lg:text-4xl">
              &quot;I barely felt a thing! They even gave me tips for how to
              take better care of my teeth at home.&quot;
            </h2>
            <p className="text-md mb-8 lg:text-xl">
              I had been putting off getting my teeth cleaned for a while
              because I was worried about the pain and discomfort. But the team
              at Dr. Jo Ellen&apos;s office was so gentle and gentle, I barely
              felt a thing! They even gave me tips for how to take better care
              of my teeth at home. I left feeling confident and motivated to
              take better care of my oral health. Thank you, Dr. Jo Ellen and
              team!
            </p>
          </div>
          <div className="w-4/7 pr-12 lg:w-2/5">
            <Image
              src="https://picsum.photos/648/480?"
              className="hidden object-cover object-center lg:inline-block"
              alt="image"
              width={648}
              height={480}
            />
            <Image
              src="https://picsum.photos/648/480?"
              className="inline-block object-cover object-center lg:hidden"
              alt="image"
              width={648}
              height={480}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
