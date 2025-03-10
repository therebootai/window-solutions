import Head from "next/head";

import Banner from "@/components/global/Banner";
import ServiceSection from "@/components/home/ServiceSection";
import MainTemplate from "@/components/templates/MainTemplate";

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | Windows Solution - Quality & Durability</title>
        <meta
          name="description"
          content=" Looking for premium UPVC windows in Siliguri? Windows Solution offers high-quality, durable, and stylish UPVC windows for homes & businesses. Get expert installation & best deals today!"
        />
        <meta name="keywords" content="about, company, values, team" />
        <meta
          property="og:title"
          content="Services | Windows Solution - Quality & Durability"
        />
        <meta
          property="og:description"
          content="Learn more about our company and values."
        />
      </Head>
      <MainTemplate>
        <Banner />
        <ServiceSection />
      </MainTemplate>
    </>
  );
}
