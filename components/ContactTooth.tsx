// A react component that displays a navbar at the top of the page
import Image from "next/image";

export default function ContactTooth() {
  return (
    <div className="fixed bottom-0 right-0 mb-8 mr-8">
      {/* A react component that displays a floating tooth icon at the bottom of the page that encourages the user to "Contact us!" */}
      <a href="#contact-us">
        {/* an image called tooth-svgrepo-com.svg */}
        <Image
          src="/floating_tooth.png"
          alt="Tooth icon"
          width={100}
          height={100}
        />
      </a>
    </div>
  );
}
