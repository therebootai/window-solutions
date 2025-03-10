import Head from "next/head";
import MainTemplate from "@/components/templates/MainTemplate";
import AboutSection from "@/components/home/AboutSection";
import EnquirySection from "@/components/home/EnquirySection";
import Banner from "@/components/global/Banner";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Windows Solution - Quality & Durability</title>
        <meta
          name="description"
          content=" Looking for premium UPVC windows in Siliguri? Windows Solution offers high-quality, durable, and stylish UPVC windows for homes & businesses. Get expert installation & best deals today!"
        />
        <meta name="keywords" content="about, company, values, team" />
        <meta
          property="og:title"
          content="About | Windows Solution - Quality & Durability"
        />
        <meta
          property="og:description"
          content="Learn more about our company and values."
        />
      </Head>
      <MainTemplate>
        <Banner />
        <AboutSection />
        <EnquirySection />
      </MainTemplate>
    </>
  );
}
