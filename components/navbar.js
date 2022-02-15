import { useEffect, useState } from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  // const [donationButton, setDonationButton] = useState();

  // useEffect(()=>{
  //   setDonationButton(<form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_Gy43qTRd8zCxZZ" async ></script></form>)
  // },[])
  return (
    <>
      <nav
        className={classNames(
          "flex items-center flex-col  md:bg-transparent md:h-auto md:relative",
          {
            "bg-gray-100 fixed z-40 top-0 bottom-0 left-0 right-0 h-screen": menuActive,
          }
        )}
      >
        <div className="flex my-10 items-center">
          {/* <img alt="Kashmir Type Hunt Logo" className="w-32 md:w-64" src="/logo.svg" /> */}
          <div className="w-32 md:w-64">
            <Image
              alt="Kashmir Type Hunt Logo"
              src="/logo.svg"
              width={256}
              height={259}
            />
          </div>
          <div className="absolute right-10 text-4xl  md:hidden">
            <FontAwesomeIcon
              icon={["fas", menuActive ? "times" : "bars"]}
              onClick={() => {
                setMenuActive(!menuActive);
              }}
            />
          </div>
        </div>
        <div
          className={classNames(
            "flex-col md:flex md:flex-row md:space-x-18 lg:space-x-20 text-center",
            menuActive ? "flex" : "hidden"
          )}
        >
          <div className="navbar-item">
            <a
              href="https://www.instagram.com/kashmirtypehunt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "instagram"]} />
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
