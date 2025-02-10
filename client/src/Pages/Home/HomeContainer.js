import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./Hero";
import PageQuery from "./PageQuery";
import Infographics from "./Infographics";
import ServicesCarousel from "./ServicesCarousel";
import Video from "./Video";
import Insights from "./Insights";
import Testimonial from "./Testimonial";
import Services from "./Services";
import CallToAction from "./CallToAction";
gsap.registerPlugin(ScrollTrigger);

function HomeContainer() {
    const pageQuery = useRef();
    const serviceRef = useRef();
    const infographicsRef = useRef();
    const servicesRef = useRef();
    const videoRef = useRef();
    const insightsRef = useRef();
    const testimonialRef = useRef();
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

        animateOnScroll(pageQuery.current);
        animateOnScroll(infographicsRef.current);
        animateOnScroll(servicesRef.current);
        animateOnScroll(videoRef.current);
        animateOnScroll(insightsRef.current);
        animateOnScroll(testimonialRef.current);
        animateOnScroll(ctaRef.current);
        animateOnScroll(serviceRef.current);
    }, []);



    return (
        <div className="w-full overflow-hidden">
            <Hero />
            <div ref={serviceRef}>
                <Services></Services>
            </div>
            <div ref={pageQuery} className="py-10 md:py-12 bg-gray-50">
                <PageQuery />
            </div>
            <div ref={infographicsRef}>
                <Infographics />
            </div>
            <div ref={videoRef} >
                <Video />
            </div>
            <div ref={insightsRef} className="py-10 md:py-12 bg-gray-50">
                <Insights />
            </div>
            <div ref={testimonialRef} className="pt-10 md:pt-12">
                <Testimonial />
            </div>
            <div ref={ctaRef} className="pt-10 md:pt-12">
                <CallToAction />
            </div>
        </div>
    );
}

export default HomeContainer;
