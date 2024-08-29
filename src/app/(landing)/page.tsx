import HeroSection from "@/components/LandingHero";
import NavBar from "@/components/LandingNavbar";
import { FeatureSection } from "@/components/FeatureSection";
import { Footer } from "@/components/Footer";
import { currentUser, User } from "@clerk/nextjs/server";
import React from "react";

type Props = {};

const LandingPage = (props: Props) => {
  
  return (
    <div className="h-full">
      <NavBar />
      <HeroSection  />
      <FeatureSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
