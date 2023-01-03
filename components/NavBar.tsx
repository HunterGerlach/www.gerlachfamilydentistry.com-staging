// A react component that displays a navbar at the top of the page

export default function NavBar() {
  // a script to toggle the hamburger menu links both on and off when the hamburger button is pressed; hamburger button should remain visible when the menu is toggled on
  const toggleMenu = () => {
    const navigation = document.querySelector(".navigation");
    navigation?.classList.toggle("hidden");
  };

  // a script that smooth scrolls to the section of the page that is clicked on in the navbar
  const smoothScroll = (e: any) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    targetElement?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="mt-6 mb-16 w-full items-center justify-between py-4 px-4 sm:mx-0 sm:mb-20 sm:px-0 md:px-6">
      {/* Hamburger menu */}
      <div onClick={toggleMenu} className="flex menu-toggle xl:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-gray-900">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      {/* Navbar logo */}
      <div className="w-full text-center align-right block items-center xl:block mt-4 inline-block align-middle xl:inline-block">
        <Link href="/" className="align-middle text-3xl font-bold text-black">
          Gerlach Family Dentistry
        </Link>
      </div>

      {/* Navbar links */}
      <div className="w-full text-center align-right block items-center navigation hidden xl:block mt-4 inline-block align-middle xl:inline-block">
        <Link
          className="mt-2 inline-flex items-center px-4 py-3 text-lg font-semibold tracking-tighter text-black"
          href="#about-us"
          onClick={smoothScroll}
        >
          About Us
        </Link>
        <Link
          className="mt-2 inline-flex items-center px-4 py-3 text-lg font-semibold tracking-tighter text-black"
          href="#services"
          onClick={smoothScroll}
        >
          Services
        </Link>
        <Link
          className="mt-2 inline-flex items-center px-4 py-3 text-lg font-semibold tracking-tighter text-black"
          href="#reviews"
          onClick={smoothScroll}
        >
          Reviews
        </Link>
        <Link
          className="mt-2 inline-flex items-center px-4 py-3 text-lg font-semibold tracking-tighter text-black"
          href="#existing-patients"
          onClick={smoothScroll}
        >
          Existing Patients
        </Link>
        <Link
          className="mt-2 inline-flex items-center px-4 py-3 text-lg font-semibold tracking-tighter text-black"
          href="#invisalign"
          onClick={smoothScroll}
        >
          Invisalign
        </Link>
        <Link
          className="bg-blue mt-2 inline-flex items-center px-8 py-3 text-lg font-semibold tracking-tighter text-white"
          href="#contact-us"
          onClick={smoothScroll}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
