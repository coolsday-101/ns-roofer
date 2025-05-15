import React, { useState, useRef, useEffect } from "react";
import HamburgerMenu from "../../images/logo/white-burger.svg";
import CloseIcon from "../../images/logo/icons8-close.svg";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
//import NSRooferLogo from "../../images/logo/ns-roofer-logo.svg";

export default function NavigationHeader() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  /*useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);*/

  return (
    <nav className="relative flex justify-between items-center px-16 py-2 bg-blue1 max-md:px-8 max-md:py-2 max-sm:px-4 max-sm:py-2">
      <StaticImage
        src={"../../images/logo/ns-roofer-logo.svg"}
        alt="NS Roofer Logo"
        layout="fixed"
        width={100}
        height={25}
      />

      <div className="flex gap-12 items-center max-sm:hidden">
        <Link
          href="/"
          className="text-sm font-bold text-white hover:text-cyan1"
        >
          Home
        </Link>
        <div className="relative h-[100%]" ref={dropdownRef}>
          <button
            className="flex gap-2 items-center text-sm font-bold text-white cursor-pointer hover:text-cyan1"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            onClick={() => setDropdownOpen(!isDropdownOpen)} // keep click for accessibility/touch
          >
            Services
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L5 5L9 1" stroke="white"></path>
            </svg>
          </button>
          {isDropdownOpen && (
            <>
              {" "}
              <div
                className="absolute h-[20px] w-[50px] z-100"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              ></div>
              <div
                className="absolute top-full left-0 mt-4 w-fit bg-blue1 shadow-lg z-10"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  href="/roofing/shingle"
                  className="block px-4 py-2 text-sm text-white hover:text-cyan1"
                >
                  Roofing
                </Link>
                <Link
                  href="/insulation"
                  className="block px-4 py-2 text-sm text-white hover:text-cyan1"
                >
                  Insulation
                </Link>
                <Link
                  href="/siding"
                  className="block px-4 py-2 text-sm text-white hover:text-cyan1"
                >
                  Siding
                </Link>
                <Link
                  href="/repair"
                  className="block px-4 py-2 text-sm text-white hover:text-cyan1"
                >
                  Repair
                </Link>
              </div>
            </>
          )}
        </div>
        <Link
          href="/about-us"
          className="text-sm font-bold text-white hover:text-cyan1"
        >
          About Us
        </Link>
        <button className="px-4 py-2 text-xs font-bold text-white hover:bg-cyan2 bg-cyan1 rounded cursor-pointer">
          <Link href="/get-a-quote">Get a Quote</Link>
        </button>
      </div>
      <button
        className="hidden max-sm:block cursor-pointer"
        onClick={() => setDrawerOpen(true)}
      >
        <img src={HamburgerMenu} alt="Hamburger Menu" className="w-8 h-8" />
      </button>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-20"
            onClick={(e) => {
              setDrawerOpen(false);
              e.stopPropagation();
            }}
          ></div>
          <div className="fixed font-archivo top-0 right-0 w-64 h-full bg-blue1 shadow-lg z-30 p-4">
            <button
              className="max-sm:block cursor-pointer absolute right-0 mr-4"
              onClick={() => setDrawerOpen(false)}
            >
              <img src={CloseIcon} alt="Close Menu" className="w-6 h-6" />
            </button>
            <Link href="/" className="block mb-2 text-white">
              Home
            </Link>
            <div className="mb-2 cursor-pointer">
              <button
                className="flex gap-2 items-center text-white font-bold cursor-pointer"
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              >
                Services
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 1L5 5L9 1" stroke="white"></path>
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="ml-4 mt-2">
                  <Link
                    href="/roofing/shingle"
                    className="block py-1 text-white"
                  >
                    Roofing
                  </Link>
                  <Link href="/insulation" className="block py-1 text-white">
                    Insulation
                  </Link>
                  <Link href="/siding" className="block py-1 text-white">
                    Siding
                  </Link>
                  <Link href="/repair" className="block py-1 text-white">
                    Repair
                  </Link>
                </div>
              )}
            </div>
            <Link href="/about-us" className="block mb-2 text-white">
              About Us
            </Link>
            <button className="px-4 py-2 mt-2 text-xs font-bold text-white bg-blue-400 rounded">
              <Link href="/get-a-quote">Get a Quote</Link>
            </button>
          </div>
        </>
      )}
    </nav>
  );
}
