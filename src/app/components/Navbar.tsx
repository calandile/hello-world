"use client";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: "#github", label: "GitHub" },
    { href: "#linkedin", label: "LinkedIn" },
  ];
  const contactLinks = [
    { href: "#about", label: "About Me" },
    { href: "#contact", label: "Contact" },
  ];
  const footerLinks = [
    { href: "#myCv", label: "My CV" },
    { href: "#privacy", label: "Privacy" },
  ];
  return (
    <>
      <header>
        <nav>
          <div className="container flex justify-end lg:justify-between">
            <ul className="hidden lg:flex gap-10">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <ul className="hidden lg:flex gap-10">
              {contactLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div
              className="hidden max-lg:block cursor-pointer transition duration-300 ease-in-out"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <RxHamburgerMenu className="text-3xl" />
            </div>
          </div>
        </nav>
      </header>
      <nav className={`menu-overlay ${isMenuOpen ? "active" : ""}`}>
        <div
          className="hidden max-lg:block absolute right-0 cursor-pointer p-4 transition duration-300 ease-in-out"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <AiOutlineClose className="text-3xl text-neutral-300" />
        </div>
        <ul className="lg:hidden text-neutral-200">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
          {contactLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
          {footerLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
