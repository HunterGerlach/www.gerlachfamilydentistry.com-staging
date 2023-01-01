// React component

export default function NavBarLinks() {
    return (
        <div className="mt-4 inline-block pb-4 pl-8">
            <a href="/" className="align-middle text-3xl font-bold text-black">
              Gerlach Family Dentistry
            </a>
            <div className="hidden pl-14 align-middle xl:inline-block">
              <a
                className="mt-2 inline-flex items-center px-4 py-3 text-lg font-semibold tracking-tighter text-black"
                href="/"
              >
                New Patients
              </a>
              <a
                className="mt-2 inline-flex items-center px-4 py-3 text-lg font-semibold tracking-tighter text-black"
                href="/"
              >
                About Us
              </a>
              <a
                className="mt-2 inline-flex items-center px-4 py-3 text-lg font-semibold tracking-tighter text-black"
                href="/"
              >
                Services
              </a>
              <a
                className="mt-2 inline-flex items-center px-4 py-3 text-lg font-semibold tracking-tighter text-black"
                href="/"
              >
                Reviews
              </a>
              <a
                className="mt-2 inline-flex items-center px-4 py-3 text-lg font-semibold tracking-tighter text-black"
                href="/"
              >
                Contact Us
              </a>

            </div>

          </div>
    );
}