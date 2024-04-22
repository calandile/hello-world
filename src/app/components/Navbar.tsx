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
              className="hidden max-lg:block cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <RxHamburgerMenu className="text-3xl" />
            </div>
          </div>
        </nav>
      </header>
      {isMenuOpen && (
        <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-100">
          <div
            className="hidden max-lg:block fixed right-0 cursor-pointer p-4"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <AiOutlineClose className="text-3xl" />
          </div>
          <ul className=" lg:hidden flex flex-col items-center justify-center h-full">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
            {contactLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
            {footerLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};
export default Navbar;
