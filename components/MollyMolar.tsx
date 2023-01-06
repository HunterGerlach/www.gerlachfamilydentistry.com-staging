// A react component that displays a navbar at the top of the page
import Image from "next/image";

export default function ContactTooth() {
  // a script that unhides a div that contains information about teeth called "tooth-info"
  const showToothInfo = () => {
    // the div that contains the information about teeth should bounce into place when the tooth icon is clicked
    const toothInfo = document.querySelector(".tooth-info");
    toothInfo?.classList.toggle("hidden");
  };

  return (
    <div className="floating-tooth fixed bottom-0 right-0 mb-8 mr-8">
      {/* A react component that displays a floating tooth icon at the bottom of the page */}
      <Image
        className="floating-tooth drop-shadow-xl cursor-pointer"
        onClick={showToothInfo}
        src="/floating_tooth.png"
        alt="Tooth icon"
        width={100}
        height={100}
      />
    </div>
  );
}
