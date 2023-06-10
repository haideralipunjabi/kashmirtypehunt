"use client";
import { useState } from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import logo from "../public/logo.svg";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <>
      <nav
        className={classNames(
          "flex flex-col items-center  md:relative md:h-auto md:bg-transparent",
          {
            "fixed bottom-0 left-0 right-0 top-0 z-40 h-screen bg-gray-100":
              menuActive,
          }
        )}
      >
        <div className="my-10 flex items-center">
          <div className="w-32 md:w-64">
            <Image
              alt="Kashmir Type Hunt Logo"
              src={logo}
              width={256}
              height={259}
            />
          </div>
          <div className="absolute right-10 text-4xl  md:hidden">
            <FontAwesomeIcon
              icon={menuActive ? faTimes : faBars}
              onClick={() => {
                setMenuActive(!menuActive);
              }}
            />
          </div>
        </div>
        <div
          className={classNames(
            "md:space-x-18 flex-col text-center md:flex md:flex-row lg:space-x-20",
            menuActive ? "flex" : "hidden"
          )}
        >
          <div className="navbar-item">
            <a
              href="https://www.instagram.com/kashmirtypehunt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <div className="navbar-item">
            <a onClick={() => setMenuActive(false)} href="/">
              Home
            </a>
          </div>
          <div className="navbar-item">
            <a onClick={() => setMenuActive(false)} href="#photos">
              Photos
            </a>
          </div>
          <div className="navbar-item">
            <a onClick={() => setMenuActive(false)} href="#about">
              About
            </a>
          </div>
          <div className="navbar-item">
            <a
              href="https://photos.app.goo.gl/2W6GyJDomNyhywXM8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Upload
            </a>
          </div>
          <div className="navbar-item">
            <a
              href="https://rzp.io/l/dZlMT8BYc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
