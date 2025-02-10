import React from "react";
import { Link } from "react-router-dom";
import video from "../../assets/images/intro.mp4";

function Video() {
    return (
        <div className="relative w-full h-[80vh] sm:h-[60vh] mx-auto rounded-lg">
            {/* Video with overlay */}
            <div className="absolute inset-0 bg-slate-900 bg-opacity-90 flex items-center justify-center">
                <video className="absolute inset-0 w-full h-full object-cover opacity-50" autoPlay loop muted>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Centered Text and Button */}
                <div className="relative z-10 text-center text-white">
                    <p className="mb-4 text-3xl sm:text-4xl font-semibold">
                        Having fast-moving innovators upscale with purpose
                    </p>
                    <Link
                        to="/contact-us"
                        className="relative group inline-block py-2 px-4 text-sm text-gray-700 hover:text-gray-200 bg-[#FC9918] rounded-sm overflow-hidden transition duration-300">
                        <div className="absolute top-0 right-full w-full h-full bg-[#E92A31] transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                        <span className="relative tracking-wider font-semibold">
                            Join us Now
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Video;
