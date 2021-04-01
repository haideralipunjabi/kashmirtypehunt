import Image from "next/image";
import { useState } from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <>
      <nav className="shadow-sm absolute left-0 right-0 z-40 flex flex-col md:flex-row items-center min-h-24 h-24 mx-auto bg-smoke-lightest">
        <div className="md:ml-5 md:mr-auto">
          <Image src="/logo.svg" width={100} height={100} />
          <div className="md:hidden absolute top-10 right-10 text-4xl">
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
            'navbar-items',
            { "hidden": !menuActive },
            { "flex": menuActive }
          )}
        >
        <a href="#">Home</a>
        <a href="#photos">Photos</a>
        </div>
      </nav>
      {menuActive && (
        <div className="min-h-screen bg-smoke bg-opacity-70 z-60 absolute top-0 bottom-0 right-0 left-0 md:hidden"></div>
      )}
    </>
  );
}
