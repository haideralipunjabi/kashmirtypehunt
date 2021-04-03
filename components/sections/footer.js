import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer className="text-center pt-16 pb-8">
            <div className="flex justify-around">
               <div className="text-xl md:text-3xl">
                   <h3 >Follow Us</h3>
                    <ul className="flex justify-around my-4">
                        {/* <li><a href="http://" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab","twitter"]} /></a></li> */}
                        <li><a href="https://www.instagram.com/kashmirtypehunt/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab","instagram"]} /></a></li>
                    </ul>
               </div>
               <div>
               <button className="inline-block text-2xl border border-black p-4 mb-10  hover:shadow-lg" href="https://photos.app.goo.gl/2W6GyJDomNyhywXM8" target="_blank" rel="noopener noreferrer">
                See All Collections <FontAwesomeIcon  icon={["fas","caret-right"]}/> 
            </button>
               </div>
            </div>
            <div>
                <h3 className="text-xl md:text-3xl">Made with <span className="text-red-500">&hearts;</span> by <a href="https://haideralipunjabi.com" target="_blank" rel="noopener noreferrer">Haider Ali Punjabi</a></h3>
            </div>
        </footer>
    )
};
