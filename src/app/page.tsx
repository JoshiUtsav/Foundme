"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { products } from "@/data/Hero-section-products";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <HeroParallax products={products} />
        <Footer />
      </div>
    </>
  );
}
