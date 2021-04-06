import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="text-center pt-16 pb-8 text-l sm:text-xl md:text-3xl">
      <div className="flex container mx-auto justify-around mb-10">
        <div className="w-1/5">
          <img className="w-40 mx-auto" src="/logo.svg" />
        </div>
        <div className="w-3/5 flex flex-col w-auto space-y-10">
          <div className="flex justify-between flex-wrap">
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
                Submit
              </a>
            </div>
          </div>
          <div className="flex self-center items-center">
            <span>Stay Connected at</span>
            <a
              className="noanimation inline-block text-l sm:text-xl md:text-2xl border border-black p-2 mx-4 hover:shadow-lg text-center"
              href="https://instagram.com/kashmirtypehunt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="mr-2" icon={["fab", "instagram"]} />
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
