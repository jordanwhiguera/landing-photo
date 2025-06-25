import React from "react";
import Navbar from "@/app/components/Navbar";
import Hero from "./components/Hero";
import Photos from "./components/Photos";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Photos />
      <Footer />
    </>
  );
}
