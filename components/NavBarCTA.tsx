// React component

export default function NavBarCTA() {
    return (
        

        <div className="flex items-center">
        <div className="hidden py-1 text-right xl:inline-block">
          <a
            className="mt-2 inline-flex items-center px-12 py-3 text-lg font-semibold tracking-tighter text-black"
            href="/"
          >
            Existing Patients
          </a>
          <a
            className="bg-blue mt-2 inline-flex items-center px-8 py-3 text-lg font-semibold tracking-tighter text-white"
            href="/"
          >
            Contact Us
          </a>
        </div>
        <button className="pr-12 pl-4">
          <svg
            className="mr-auto inline-block text-black xl:hidden"
            width="33"
            height="50"
            viewBox="0 0 23 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.892578 10.8691H22.1058"
              stroke="black"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
            <path
              d="M0.892578 18.8691H22.1058"
              stroke="black"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
            <path
              d="M22.1066 14.8688H0.893399"
              stroke="black"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    );
}