import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="text-center pt-16 pb-8 text-xl sm:text-2xl md:text-3xl">
      <div className="flex flex-wrap justify-around gap-10">
        <div>
          <img className="w-32" src="/logo.svg" />
        </div>
        <div>
          <h3>Follow Us</h3>
          <ul className="flex justify-around my-4">
            {/* <li><a href="http://" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab","twitter"]} /></a></li> */}
            <li>
              <a
                href="https://www.instagram.com/kashmirtypehunt/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </a>
            </li>
          </ul>
        </div>
        <div>
          If you would like to contribute <br />
          <a
            className="noanimation inline-block text-2xl border border-black p-4 mb-10  mt-4 hover:shadow-lg"
            href="https://photos.app.goo.gl/2W6GyJDomNyhywXM8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Submit a Photo
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
