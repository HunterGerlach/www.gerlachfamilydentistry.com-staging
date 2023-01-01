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
    const { id, type, message, link, linkText } = props;

    // Script to close the MessageBanner component when the x button is clicked based on the key prop passed in
    const closeBanner = () => {
        const banner = document.getElementById("message-banner-"+id);
        banner?.classList.add("hidden");
    };

    console.log(message);
    console.log(id)

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
                <a href={link} className="pl-3 underline">
                    {linkText}
                </a>
            )}
            {/* A button that appears in each message banner that closes that specific MessageBanner component */}
            <button
                className="absolute right-0 mr-2"
                onClick={closeBanner}
            >x</button>
            
        </div>
    );
}
