import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import logo from "../assets/images/logo.png";
import logo1 from "../assets/images/logo1.png";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/data";

const Navbar = ({ openModal }) => {
  const { authURL } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [aboutSidebarOpen, setAboutSidebarOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [psLinks, setPsLinks] = useState([]); // State to store links from localStorage
  const currentPAge = useLocation();

  console.log(currentPAge.pathname);

  const sidebarRef = useRef(null);
  const aboutSidebarRef = useRef(null);
  const megaMenuRef = useRef(null);

  // Get links from localStorage
  useEffect(() => {
    const storedPsLinks = localStorage.getItem("psLinks"); // Assuming the key for psLinks is 'psLinks'
    if (storedPsLinks) {
      const linksArray = JSON.parse(storedPsLinks);
      setPsLinks(linksArray);
      console.log("data fetched from LS");
    } else {
      console.log("No data found in localStorage.");
    }
  }, []);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
    if (mobileNavOpen) setAboutSidebarOpen(false);
  };

  const toggleAboutSidebar = () => {
    setAboutSidebarOpen(!aboutSidebarOpen);
  };

  const toggleMegaMenu = () => {
    setMegaMenuOpen(!megaMenuOpen);
  };

  useEffect(() => {
    if (megaMenuOpen) {
      gsap.to(megaMenuRef.current, {
        y: 0,
        opacity: 1,
        height: "auto",
        duration: 0.5,
        ease: "power3.inOut",
        display: "block",
      });
    } else {
      gsap.to(megaMenuRef.current, {
        y: -20,
        opacity: 0,
        height: 0,
        duration: 0.5,
        ease: "power3.inOut",
        display: "none",
      });
    }
  }, [megaMenuOpen]);

  useEffect(() => {
    if (mobileNavOpen) {
      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.inOut",
      });
    } else {
      gsap.to(sidebarRef.current, {
        x: "-100%",
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
  }, [mobileNavOpen]);

  useEffect(() => {
    if (aboutSidebarOpen) {
      gsap.to(aboutSidebarRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.inOut",
      });
    } else {
      gsap.to(aboutSidebarRef.current, {
        x: "-100%",
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
  }, [aboutSidebarOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();

  useEffect(() => {
    setMobileNavOpen(false);
    setAboutSidebarOpen(false);
    setMegaMenuOpen(false);
  }, [location]);

  // Group the links by categoryName
  const groupedLinks = psLinks.reduce((acc, link) => {
    const { categoryName, linkName, linkURL } = link;
    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }
    // Push an object containing both linkName and linkURL
    acc[categoryName].push({ linkName, linkURL });
    return acc;
  }, {});

  return (
    <>
      <header>
        <nav className="z-50 fixed top-0 left-0 right-0 bg-transparent">
          <div
            className={`w-full mx-auto px-10 md:px-24 py-4 ${
              isScrolled || megaMenuOpen
                ? "bg-white text-gray-800"
                : "bg-white opacity-70 text-gray-900"
            }`}
          >
            <div className="flex items-center relative">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <button
                    onClick={toggleMobileNav}
                    className="flex md:hidden w-12 h-12 md:ml-0 -ml-5 items-center md:justify-center bg-transparent rounded-md transition duration-200"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path
                        d="M3 12H21"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M3 6H21"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M3 18H21"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <Link className="text-lg font-bold -ml-2 md:ml-1" to="/">
                    <img
                      src={megaMenuOpen || isScrolled ? logo : logo}
                      alt="Logo"
                      className="w-[12rem]"
                    />
                  </Link>
                </div>
                <div className="hidden md:flex items-center justify-center space-x-8">
                  <Link
                    className="text-sm font-medium ml-6 pl-6 border-l-2 border-slate-300 flex items-center justify-center space-x-1"
                    to="/"
                  >
                    Home
                  </Link>
                  <Link className="text-sm font-medium" to="/about">
                    About Us
                  </Link>
                  <button
                    className="text-sm font-medium flex items-center justify-center space-x-1"
                    onClick={toggleMegaMenu}
                  >
                    <h1>Products & Services</h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M13 5.5L8 10.5L3 5.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <Link className="text-sm font-medium" to="/industry-served">
                    Industries
                  </Link>
                  <Link className="text-sm font-medium" to="/why-choose-us">
                    Why Us?
                  </Link>
                </div>
                <div className="hidden lg:block ml-auto">
                  <div className="flex items-center">
                    <Link
                      to="/contact-us"
                      className="relative group inline-block py-2 px-4 text-sm text-gray-700 hover:text-gray-200 bg-[#FC9918] rounded-sm overflow-hidden transition duration-300"
                    >
                      <div className="absolute top-0 right-full w-full h-full bg-[#E92A31] transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                      <span className="relative tracking-wider font-semibold">
                        Contact Us
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Mega Menu */}
        {megaMenuOpen && (
          <div
            ref={megaMenuRef}
            className=" fixed top-16 left-0 right-0 mx-auto z-40  border-b-4 border-mainYellow  transition-transform duration-300"
          >
            <div className="container px-24 w-full mx-auto p-12 text-center max-w-[120rem] bg-white text-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {/* Mega Menu 1 */}
                <div className="text-left col-span-2">
                  <h2 className="text-lg font-medium">Jezseem Traders</h2>
                  <h1 className="text-4xl font-bold mb-4 text-gray-800">
                    Product & Services
                  </h1>
                  <p className="mb-8">
                    At Moja, we provide a comprehensive range of products and
                    services to meet the needs of the textile and manufacturing
                    industries.
                  </p>
                </div>

                {Object.keys(groupedLinks).map((categoryName, index) => (
                  <div key={index} className="text-start">
                    <Link
                      to={`/${categoryName}`}
                      className="font-bold underline capitalize"
                    >
                      {categoryName}
                    </Link>
                    <ul>
                      {groupedLinks[categoryName].map((link, idx) => (
                        <li key={idx} className="capitalize  font-light">
                          <Link to={link.linkURL}>{link.linkName}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu and Secondary Sidebar remain unchanged */}
        {/* Mobile Menu */}
        <div
          ref={sidebarRef}
          className={`${
            mobileNavOpen ? "block" : "hidden"
          } fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50`}
        >
          <div
            onClick={toggleMobileNav}
            className="fixed inset-0 bg-gray-800 opacity-25"
          ></div>
          <nav className="relative flex flex-col py-6 px-2 w-full h-full bg-gray-800 border-r-8 border-blue-500 overflow-y-auto">
            <div className="flex items-center mb-16 mt-4 mx-4">
              <Link
                to="/"
                className="mr-auto text-2xl font-medium leading-none"
              >
                <img src={logo} alt="err" className="w-[12rem]" />
              </Link>
              <button onClick={toggleMobileNav}>
                <svg
                  className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <ul className="mb-2">
              <li>
                <Link
                  to="/about"
                  className="block py-4 px-5 text-gray-200 hover:bg-blue-50 hover:text-gray-800  rounded-lg"
                >
                  About Us
                </Link>
              </li>
              <li className="w-full">
                <button
                  className="block py-4 px-5 text-gray-200 text-start hover:bg-blue-50 hover:text-gray-800  rounded-lg w-full"
                  onClick={toggleAboutSidebar}
                >
                  Products & Services
                </button>
              </li>
              <li>
                <Link
                  to="/industry-served"
                  className="block py-4 px-5 text-gray-200 hover:bg-blue-50 hover:text-gray-800  *:rounded-lg"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  to="/why-choose-us"
                  className="block py-4 px-5 text-gray-200 hover:bg-blue-50 hover:text-gray-800 rounded-lg"
                >
                  Why Us
                </Link>
              </li>
            </ul>
            <Link
              to="/contact-us"
              className="relative group inline-block py-4  px-6 mx-4 text-sm text-blue-50 bg-mainYellow rounded-sm overflow-hidden transition duration-300"
            >
              <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
              <span className="relative font-semibold">Contact Us</span>
            </Link>
          </nav>
        </div>

        {/* Secondary Sidebar (About Us) */}
        <div
          ref={aboutSidebarRef}
          className={`${
            aboutSidebarOpen ? "block" : "hidden"
          } fixed top-0 left-0 bottom-0 w-full md:w-1/2 max-w-4xl z-50 bg-mainBlue`}
        >
          <div
            onClick={toggleAboutSidebar}
            className="fixed inset-0 bg-gray-800 opacity-25"
          ></div>
          <nav className="relative flex flex-col py-6 mt-4 px-10 w-full h-full bg-mainBlue border-r-2 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <Link
                to="/products-and-services"
                className="text-2xl font-semibold text-gray-200 leading-none underline"
              >
                Products & Services
              </Link>
              <button onClick={toggleAboutSidebar}>
                <svg
                  className="h-6 w-6 text-mainYellow cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="h-full w-full border-l-4 border border-mainYellow bg-white p-6">
                <h2 className="text-xl font-semibold text-gray-800 leading-none mb-3">
                  Products
                </h2>
                <ul>
                  <li>
                    <Link className="text-sm underline font-semibold text-mainBlue leading-none">
                      Cutting Machines
                    </Link>
                  </li>
                  <li>
                    <Link className="text-sm underline font-semibold text-mainBlue leading-none">
                      Spreaders & Tables
                    </Link>
                  </li>
                  <li>
                    <Link className="text-sm underline font-semibold text-mainBlue leading-none">
                      Spare Parts
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="h-full w-full border-l-4 border border-mainYellow bg-white p-6">
                <h2 className="text-xl font-semibold text-gray-800 leading-none mb-3">
                  Consulting Services
                </h2>
                <ul>
                  <li>
                    <Link className="text-sm underline font-semibold text-mainBlue leading-none">
                      Operational Optimization
                    </Link>
                  </li>
                  <li>
                    <Link className="text-sm underline font-semibold text-mainBlue leading-none">
                      Cost Reduction
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="h-full w-full border-l-4 border border-mainYellow bg-white p-6">
                <h2 className="text-xl font-semibold text-gray-800 leading-none mb-3">
                  After Sales Services
                </h2>
                <ul>
                  <li>
                    <Link className="text-sm underline font-semibold text-mainBlue leading-none">
                      Maintenance
                    </Link>
                  </li>
                  <li>
                    <Link className="text-sm underline font-semibold text-mainBlue leading-none">
                      Repair
                    </Link>
                  </li>
                  <li>
                    <Link className="text-sm underline font-semibold text-mainBlue leading-none">
                      Technical Support
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
