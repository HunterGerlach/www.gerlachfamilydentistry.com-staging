// React component

export default function NavBarLinks() {
  // a script that smooth scrolls to the section of the page that is clicked on in the navbar
  const smoothScroll = (e: any) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    targetElement?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="mt-4 inline-block pb-4 pl-8">
      <a href="/" className="align-middle text-3xl font-bold text-black">
        Gerlach Family Dentistry
      </a>
      <div className="hidden pl-14 align-middle xl:inline-block">
        <a
          className="mt-2 inline-flex items-center px-4 py-3 text-lg font-semibold tracking-tighter text-black"
          href="#about-us"
          onClick={smoothScroll}
        >
          About Us
        </a>
        <a
          className="mt-2 inline-flex items-center px-4 py-3 text-lg font-semibold tracking-tighter text-black"
          href="#services"
          onClick={smoothScroll}
        >
          Services
        </a>
        <a
          className="mt-2 inline-flex items-center px-4 py-3 text-lg font-semibold tracking-tighter text-black"
          href="#reviews"
          onClick={smoothScroll}
        >
          Reviews
        </a>
        <a
          className="mt-2 inline-flex items-center px-4 py-3 text-lg font-semibold tracking-tighter text-black"
          href="#invisalign"
          onClick={smoothScroll}
        >
          Invisalign(?)
        </a>
        <a
          className="mt-2 inline-flex items-center px-4 py-3 text-lg font-semibold tracking-tighter text-black"
          href="#contact-us"
          onClick={smoothScroll}
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
