import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import logo from "../public/logo.svg";

export default function Footer() {
  return (
    <footer className="text-l pb-8 pt-16 text-center sm:text-xl md:text-3xl">
      <div className="container mx-auto mb-10 flex justify-around">
        <div className="w-1/5">
          <div className="mx-auto w-24 md:w-40">
            <Image
              alt="Kashmir Type Hunt Logo"
              src={logo}
              height={162}
              width={160}
            />
          </div>
        </div>
        <div className="flex w-auto flex-col space-y-10">
          <div className="flex flex-wrap justify-between">
            <div className="mr-2">
              <a href="/">Home</a>
            </div>
            <div className="mr-2">
              <a href="#photos">Photos</a>
            </div>
            <div className="mr-2">
              <a href="#about">About</a>
            </div>
            <div className="mr-2">
              <a
                href="https://photos.app.goo.gl/2W6GyJDomNyhywXM8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Upload
              </a>
            </div>
          </div>
          <div className="flex items-center self-center">
            <span>Stay Connected at</span>
            <a
              className="noanimation text-l ml-4 inline-block border border-black p-2 text-center hover:shadow-lg sm:text-xl md:text-2xl"
              href="https://instagram.com/kashmirtypehunt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="mr-2" icon={faInstagram} />
              kashmirtypehunt
            </a>
          </div>
        </div>
      </div>
      <div>
        <h3>
          Made with <span className="text-red-500">&hearts;</span> by{" "}
          <a
            href="https://haideralipunjabi.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Haider Ali Punjabi
          </a>
        </h3>
      </div>
    </footer>
  );
}
