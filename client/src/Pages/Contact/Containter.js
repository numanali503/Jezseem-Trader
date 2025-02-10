import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Intro from './Intro';
import ContactForm from './Form'
gsap.registerPlugin(ScrollTrigger);


function Containter() {
    const formRef = useRef();

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
        animateOnScroll(formRef.current);
    }, []);
    return (
        <div>
            <div className="w-full overflow-x-hidden">
                <Intro />
                <div ref={formRef}>
                    <ContactForm></ContactForm>
                </div>
            </div>
        </div>
    )
}

export default Containter
