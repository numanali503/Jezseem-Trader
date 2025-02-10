import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Intro from "./Intro";
import Overview from "./Overview";
import MissionVision from "./MissionVision";
import IndustryFocus from "./IndustryFocus";
import CTA from "./CTA";
gsap.registerPlugin(ScrollTrigger);

function AboutContainer() {
  const overviewRef = useRef();
  const missVissRef = useRef();
  const IndustryRef = useRef();
  const ctaRef = useRef();

  useEffect(() => {
    const animateOnScroll = (element) => {
      gsap.fromTo(
        element,
        { y: 100, opacity: 0 }, // Start position below the viewport
        {
          y: 0,
          opacity: 1,
          duration: 0.5, // Set duration to 0.5 seconds
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%", // Trigger when the element reaches 80% of viewport
            toggleActions: "play none none none", // Only play on scroll down
          },
        }
      );
    };

    animateOnScroll(overviewRef.current);
    animateOnScroll(missVissRef.current);
    animateOnScroll(IndustryRef.current);
    animateOnScroll(ctaRef.current);
  }, []);
  return (
    <div>
      <div className="w-full">
        <Intro />
        <div ref={overviewRef}>
          <Overview />
        </div>
        <div ref={missVissRef}>
          <MissionVision />
        </div>
        <div ref={IndustryRef}>
          <IndustryFocus />
        </div>
        <div ref={ctaRef} className="mt-12">
          <CTA />
        </div>
      </div>
    </div>
  );
}

export default AboutContainer;
