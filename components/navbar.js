import { useState } from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <>
      <nav className={classNames("flex items-center flex-col  md:bg-transparent md:h-auto md:relative",{"bg-gray-100 fixed z-40 top-0 bottom-0 left-0 right-0 h-screen":menuActive})}>
        <div className="flex my-10 items-center">
          <img className="w-32 md:w-64" src="/logo.svg" />
          <div className="absolute right-10 text-4xl  md:hidden">
            <FontAwesomeIcon icon={["fas",menuActive?"times":"bars"]} onClick={()=>{setMenuActive(!menuActive)}}/>
          </div>
        </div>
        <div className={classNames("flex-col md:flex md:flex-row md:space-x-18 lg:space-x-20 text-center",menuActive?"flex":"hidden")}>
            <div className="navbar-item"><a href="https://www.instagram.com/kashmirtypehunt/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab","instagram"]} /></a></div>
            <div className="navbar-item"><a href="/">Home</a></div>
            <div className="navbar-item"><a href="#photos">Photos</a></div>
            <div className="navbar-item"><a href="#about">About</a></div>
            <div className="navbar-item"><a href="https://photos.app.goo.gl/2W6GyJDomNyhywXM8" target="_blank" rel="noopener noreferrer">Submit</a></div>
        </div>
      </nav>
    </>
  );
}
