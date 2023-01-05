import Image from "next/image";
import Link from "next/link";

export default function PatientResources() {
  return (
    <div id="patient-resources" className="mx-auto px-5 pt-32 pb-24 lg:px-24">
      <div className="my-3 flex w-full flex-col text-left lg:text-center">
        <h2 className="bold mb-8 text-4xl font-bold leading-tight text-black lg:text-6xl">
          Patient Resources
          <br className="hidden lg:inline-block" />
          Downloadable Forms and Information
        </h2>
      </div>
      <div className="flex w-full flex-col text-left lg:text-center">
        <h3 className="text-2xl text-black">
          In this section, you&apos;ll find all the downloadable forms and
          information you need to make your next appointment a breeze. From new
          patient paperwork to insurance forms, we&apos;ve got you covered.
          <br className="hidden lg:inline-block" />
          Quickly and easily access all the documents you need from the comfort
          of your own home. It&apos;s just one more way we&apos;re making your
          dental care experience a breeze.
        </h3>
      </div>
      <div className="flex w-full flex-row justify-center pt-24 text-center">
        <Link
          href="/"
          className="underline-blue px-8 text-xl font-semibold text-black"
        >
          New Patient Forms
        </Link>
        <Link
          href="/"
          className="underline-gray px-6 text-xl font-semibold text-gray-700"
        >
          Existing Patient Forms
        </Link>
      </div>
    </div>
  );
}
