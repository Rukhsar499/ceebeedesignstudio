"use client";

import { useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <footer className="bg-gradient-to-r from-[#65102f] via-[#731438] to-[#4d0b24] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* About */}
          <div data-aos="fade-up">
            <h3 className="text-3xl font-light mb-6">
              About Us
            </h3>

            <p className="text-gray-200 leading-8">
              CeeBeeDesignStudio is one of the fastest-growing interior
              execution companies with a strong presence in Bangalore,
              Goa and Kolkata.
            </p>

            <h5 className="mt-8 mb-4 font-semibold">
              More About Us
            </h5>

            <div className="flex gap-3">
              {[FaFacebookF, FaYoutube, FaInstagram].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-12 h-12 border border-white/30 flex items-center justify-center rounded-lg hover:bg-white hover:text-[#65102f] transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="text-3xl font-light mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {[
                "Client Testimonials",
                "FAQ",
                "Privacy Policy",
                "Blog",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="group flex items-center gap-3 text-gray-200 hover:text-white transition"
                  >
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      ›
                    </span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Bangalore */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className=" border-white/10"
          >
            <h3 className="text-3xl font-light mb-6">
              Bangalore
            </h3>

            <div className="space-y-5">
              <div className="flex gap-4">
                <FaMapMarkerAlt className="mt-1 text-xl" />
                <p>
                  Door No-18, 3rd B Cross,
                  Domlur II Stage,
                  Bangalore 560071
                </p>
              </div>

              <div className="flex gap-4">
                <FaPhoneAlt />
                <p>+91 8697306015</p>
              </div>

              <div className="flex gap-4">
                <FaEnvelope size={20} color="white"/>
                <p>chitralekha@ceebeedesignstudio.com</p>
              </div>
            </div>
          </div>

          {/* Kolkata */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className=" border-white/10"
          >
            <h3 className="text-3xl font-light mb-6">
              Kolkata
            </h3>

            <div className="space-y-5">
              <div className="flex gap-4">
                <FaMapMarkerAlt className="mt-1 text-xl" />
                <p>
                  3045 Rajdanga Main Road,
                  Kolkata, West Bengal 700107
                </p>
              </div>

              <div className="flex gap-4">
                <FaPhoneAlt />
                <p>+91 8697306015</p>
              </div>

              <div className="flex gap-4">
                <FaEnvelope size={20} color="white"/>
                <p>chitralekha@ceebeedesignstudio.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 text-center text-sm text-gray-300">
          © 2026 CeeBee Design Studio. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}