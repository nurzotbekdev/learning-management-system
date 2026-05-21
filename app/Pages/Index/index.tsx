"use client";

import About from "./About/about";
import Achievements from "./Achievements/achievements";
import Articles from "./Articles/articles";
import Courses from "./Courses/courses";
import Features from "./Features/features";
import Hero from "./Hero/hero";
import WhyChoose from "./WhyChoose/whyChoose";

function Index() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Achievements />
      <Courses />
      <WhyChoose />
      <Articles />
    </>
  );
}

export default Index;
