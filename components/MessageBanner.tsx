/* React component to display a variety of message banners depending on the props passed in */

/* define the props that the component will accept */
interface Props {
  id: string;
  type: string;
  message: string;
  link?: string;
  linkText?: string;
}

/* define the component */
export default function MessageBanner(props: Props) {
  // a script that unhides a div that contains information about teeth called "tooth-info"
  const showToothInfo = () => {
    // the div that contains the information about teeth should bounce into place when the tooth icon is clicked
    const toothInfo = document.querySelector(".tooth-info");
    toothInfo?.classList.toggle("hidden");
  };
  const { id, type, message, link, linkText } = props;

  // Script to close the MessageBanner component when the x button is clicked based on the key prop passed in
  const closeBanner = () => {
    const banner = document.getElementById("message-banner-" + id);
    banner?.classList.add("hidden");
  };

  return (
    <div
      // set the id to the value of the key prop passed in
      id={`message-banner-${id}`}
      className={`
        bg-${type}
        grotesk
        top-0
        h-7
        w-full 
        text-center
        text-sm
        leading-6
        text-white
      `}
    >
      {message}

      {link && linkText && (
        <a onClick={showToothInfo} className="pl-3 underline">
          {linkText}
        </a>
      )}
      {/* A button that appears in each message banner that closes that specific MessageBanner component */}
      <button className="absolute right-0 mr-2" onClick={closeBanner}>
        x
      </button>
    </div>
  );
}
