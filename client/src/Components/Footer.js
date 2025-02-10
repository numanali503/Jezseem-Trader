import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 w-full">
      <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-6">
          <div className="col-span-full lg:col-span-1">
            <Link
              className="flex-none text-xl font-semibold text-slate-800 focus:outline-none focus:opacity-80"
              to="/"
              aria-label="Brand"
            >
              <img src={logo} alt="" className="w-[12rem]" />
            </Link>
          </div>
          {/* Product */}
          <div className="col-span-1">
            <h4 className="font-semibold text-slate-800">Product & Services</h4>
            <div className="mt-3 grid space-y-3">
              <p>
                <Link
                  className="inline-flex gap-x-2 text-slate-800 hover:text-slate-900 focus:outline-none focus:text-slate-900"
                  to="/products"
                >
                  Products
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-slate-800 hover:text-slate-900 focus:outline-none focus:text-slate-900"
                  to="/consulting-services"
                >
                  Consulting Services
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-slate-800 hover:text-slate-900 focus:outline-none focus:text-slate-900"
                  to="/after-sales-services"
                >
                  After-Sales Services
                </Link>
              </p>
            </div>
          </div>
          {/* Company */}
          <div className="col-span-1">
            <h4 className="font-semibold text-slate-800">Company</h4>
            <div className="mt-3 grid space-y-3">
              <p>
                <Link
                  className="inline-flex gap-x-2 text-slate-800 hover:text-slate-900 focus:outline-none focus:text-slate-900"
                  to="/"
                >
                  Home
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-slate-800 hover:text-slate-900 focus:outline-none focus:text-slate-900"
                  to="/about"
                >
                  About Us
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-slate-800 hover:text-slate-900 focus:outline-none focus:text-slate-900"
                  to="/industry-served"
                >
                  Industry Served
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-slate-800 hover:text-slate-900 focus:outline-none focus:text-slate-900"
                  to="/why-choose-us"
                >
                  Why Choose Us
                </Link>
              </p>
            </div>
          </div>
          {/* Stay up to date */}
          <div className="col-span-2">
            <h4 className="font-semibold text-slate-800">Stay up to date</h4>
            <form>
              <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2">
                <div className="w-full">
                  <label htmlFor="hero-input" className="sr-only">
                    Subscribe
                  </label>
                  <input
                    type="text"
                    id="hero-input"
                    name="hero-input"
                    className="py-3 px-4 block w-full border-transparent outline-none rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50"
                    placeholder="Enter your email"
                  />
                </div>
                <Link
                  className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-orangePrimary text-white hover:bg-orange-700 focus:outline-none focus:bg-orange-700"
                  to="/"
                >
                  Subscribe
                </Link>
              </div>
              <p className="mt-3 text-sm text-slate-800">
                Get Monthly Insights & Updates. Never spam.
              </p>
            </form>
          </div>
        </div>
        {/* Social and Copyright */}
        <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
          <p className="text-sm text-slate-800">© 2025 Jezseem Traderss.</p>
          <div className="flex space-x-2">
            {/* Social Media Icons */}
            <Link
              className="size-10 inline-flex justify-center items-center text-slate-800 hover:bg-slate-100"
              to="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </Link>
            <Link
              className="size-10 inline-flex justify-center items-center text-slate-800 hover:bg-slate-100"
              to="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>
            </Link>
            <Link
              className="size-10 inline-flex justify-center items-center text-slate-800 hover:bg-slate-100"
              to="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;