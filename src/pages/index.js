import Head from "next/head";

import AboutSection from "@/components/home/AboutSection";
import CustomerSection from "@/components/home/CustomerSection";
import EnquirySection from "@/components/home/EnquirySection";
import GallerySection from "@/components/home/GallerySection";
import HomeBanner from "@/components/home/HomeBanner";
import InfoSection from "@/components/home/InfoSection";
import ServiceSection from "@/components/home/ServiceSection";
import MainTemplate from "@/components/templates/MainTemplate";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          {" "}
          UPVC Window Dealer in Siliguri | Windows Solution - Quality &
          Durability
        </title>
        <meta
          name="description"
          content=" Looking for premium UPVC windows in Siliguri? Windows Solution offers high-quality, durable, and stylish UPVC windows for homes & businesses. Get expert installation & best deals today!"
        />
        <meta name="keywords" content="about, company, values, team" />
        <meta
          property="og:title"
          content=" UPVC Window Dealer in Siliguri | Windows Solution - Quality &
          Durability"
        />
        <meta
          property="og:description"
          content="Learn more about our company and values."
        />
      </Head>
      <MainTemplate>
        <HomeBanner />
        <InfoSection />
        <AboutSection />
        <EnquirySection heading={"Get a Free Quote for UPVC Solutions"} />
        <ServiceSection />
        <GallerySection />
        <CustomerSection />
      </MainTemplate>
    </>
  );
}
