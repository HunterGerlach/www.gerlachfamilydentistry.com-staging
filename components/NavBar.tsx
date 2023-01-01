// A react component that displays a navbar at the top of the page

import NavBarLinks from "./NavBarLinks";
import NavBarCTA from "./NavBarCTA";

export default function NavBar() {


    return (
        <div className="grotesk mt-6 mb-16 flex items-center justify-between py-4 px-4 sm:mx-0 sm:mb-20 sm:px-0 md:px-6">
          <NavBarLinks />

            <NavBarCTA />
        </div>
    );
}

