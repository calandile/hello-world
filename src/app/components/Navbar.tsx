"use client";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IconType } from "react-icons";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { MdPrivacyTip } from "react-icons/md";

interface INavbarLink {
  href: string;
  label: string;
  icon: IconType;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks: INavbarLink[] = [
    {
      href: "#github",
      label: "GitHub",
      icon: FaGithub,
    },
    {
      href: "#linkedin",
      label: "LinkedIn",
      icon: FaLinkedinIn,
    },
  ];
  const contactLinks: INavbarLink[] = [
    { href: "#about", label: "About Me", icon: IoPersonSharp },
    { href: "#contact", label: "Contact", icon: FaPhoneAlt },
  ];
  const footerLinks: INavbarLink[] = [
    { href: "#myCv", label: "My CV", icon: IoDocumentText },
    { href: "#privacy", label: "Privacy", icon: MdPrivacyTip },
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
              <a href={item.href} className="inline-flex items-center gap-3">
                {<item.icon />}
                {item.label}
              </a>
            </li>
          ))}
          {contactLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="inline-flex items-center gap-3">
                {<item.icon />}
                {item.label}
              </a>
            </li>
          ))}
          {footerLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="inline-flex items-center gap-3">
                {<item.icon />}
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
