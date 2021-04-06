import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="text-center pt-16 pb-8 text-l sm:text-2xl md:text-3xl">
      <div className="flex flex-col container mx-auto">
        <div className="flex justify-around">
          <div className="w-2/5">
            <img className="w-32 mx-auto" src="/logo.svg" />
          </div>
          <div className="flex justify-around flex-wrap gap-3 sm:gap-5 md:gap-7 lg:10 my-auto">
            <div>
              <a href="/">Home</a>
            </div>
            <div>
              <a href="#photos">Photos</a>
            </div>
            <div>
              <a href="#about">About</a>
            </div>
            <div>
              <a
                href="https://photos.app.goo.gl/2W6GyJDomNyhywXM8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Submit
              </a>
            </div>
          </div>
          </div>
          <div>
            Stay Connected at
            <a
              className="noanimation inline-block text-l sm:text-xl  md:text-2xl border border-black p-4 mb-10 mx-4 mt-4 hover:shadow-lg"
              href="https://instagram.com/kashmirtypehunt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="mx-4" icon={["fab", "instagram"]} />
              kashmirtypehunt
            </a>
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
