import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import ContactTooth from "../components/MollyMolar";
import Hero from "../components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Gerlach Family Dentistry &mdash; Louisville&apos;s Trusted Family
          Dentistry Since 1982 with Two Convenient Locations
        </title>
        <meta
          name="description"
          content="Providing Louisville families with comprehensive dental services since 1982. From routine check-ups to advanced cosmetic procedures like Invisalign, Gerlach Family Dentistry has you covered. Two local offices ready to serve all your dental needs. Book now for a radiant smile!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <div id="top" className="dark:bg-red">
        <Header />
        <Hero />
        <Layout />
        <Footer />

        <ContactTooth />
      </div>
    </>
  );
}
