/* eslint-disable @next/next/no-html-link-for-pages */

import MessageBanner from "./MessageBanner";
import NavBar from "./NavBar";

export default function Header() {
    return (
      <>
        <MessageBanner id="new-patients" type="blue" message="New patients welcome!" link="/" linkText="Book your appointment today" />
        <MessageBanner id="book" type="green" message="We are open!" link="/" linkText="Book your appointment today" />
        <MessageBanner id="warn" type="red" message="We are closed!" link="/" linkText="Book your appointment today" />
        <MessageBanner id="info" type="yellow" message="We are open!" link="/" linkText="Book your appointment today" />
        
        < NavBar />
      </>
    );
  }
