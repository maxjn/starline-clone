// Hooks/Actions
import Head from "next/head";
import { Inter } from "next/font/google";
// Components
import Header from "@/components/common/layout/header/Header";
import AdvancedSearch from "@/components/layout/home/AdvancedSearch";
import About from "@/components/layout/home/About";
import Articles from "@/components/layout/home/Articles";
import Footer from "@/components/common/layout/footer/Footer";
import CTA from "@/components/layout/home/CTA";
import Testimonial from "@/components/layout/home/Testimonial";
import HeroSlider from "@/components/layout/home/HeroSlider";
import WhyUs from "@/components/layout/home/WhyUs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Starline Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <Header />
      <main className={` ${inter.className} `}>
        <HeroSlider />
        <AdvancedSearch />
        <About />
        <Articles />
        <WhyUs />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
