import Navbar from "../components/navbar";
import About from "../components/sections/about";
import Footer from "../components/sections/footer";
import Photos from "../components/sections/photos";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kashmir Type Hunt",
  description:
    "Kashmir Type Hunt is a design community based in Kashmir. Our motive is to document and archive indigenous type forms. The goal is to build awareness about design and type forms around us. What started as individuals documenting type has now evolved into a community where everyone can submit their find thus documenting and showcasing for all the people out there.",
  openGraph: {
    title: "Kashmir Type Hunt",
    description:
      "Kashmir Type Hunt is a design community based in Kashmir. Our motive is to document and archive indigenous type forms. The goal is to build awareness about design and type forms around us. What started as individuals documenting type has now evolved into a community where everyone can submit their find thus documenting and showcasing for all the people out there.",
    url: "https://kashmirtypehunt.com",
    type: "website",
    siteName: "Kashmir Type Hunt",
  },
};
export default function Home() {
  return (
    <>
      <Navbar />
      <Photos />
      <About />
      <Footer />
    </>
  );
}
