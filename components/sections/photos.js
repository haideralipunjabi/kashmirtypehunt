import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { useState } from "react";
import Images from "../../data/images.json";

export default function Photos({ photos }) {
  const [showModal, setShowModal] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  return (
    <>
      <div id="photos" className="min-h-screen z-10 text-center">
        <div className="mx-auto p-10 md:px-0 container col-count-1 sm:col-count-2 md:col-count-3 lg:col-count-4 col-gap-sm">
          {
            Images.map((image,idx)=>(
                <Image key={idx} src={"/"+image.name} width={image.width} height={image.height} onClick={()=>{
                  setModalIndex(idx);
                  setShowModal(true);
                }}/>
            ))
               
          }
        </div>
        <div className="space-x-10">
            <button className="inline-block text-2xl border border-black p-4 mb-10  hover:shadow-lg" href="https://photos.app.goo.gl/2W6GyJDomNyhywXM8" target="_blank" rel="noopener noreferrer">
                See All Collections <FontAwesomeIcon  icon={["fas","caret-right"]}/> 
            </button>
            <button className="inline-block text-2xl border border-black p-4 mb-10  hover:shadow-lg" href="https://photos.app.goo.gl/2W6GyJDomNyhywXM8" target="_blank" rel="noopener noreferrer">
                Submit a Photo
            </button>
        </div>
      </div>
      <PhotoModal
        photos={Images}
        modalIndex={modalIndex}
        setModalIndex={setModalIndex}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
}

function PhotoModal({
  photos,
  modalIndex,
  setModalIndex,
  showModal,
  setShowModal,
}) {
    const changeIndex = i => {
        let max = photos.length;
        if(modalIndex+i < 0) setModalIndex(max-1);
        else if (modalIndex+i === max) setModalIndex(0);
        else setModalIndex(modalIndex+i)
    }
  return (
    <div className={classNames("bg-smoke-darkest z-50 fixed top-0 left-0 w-full h-full outline-none fade",{"hidden":!showModal})}>
      <div className="flex h-full flex-col items-center p-24">
        <div className="max-h-full my-auto">
        {/* <Image objectFit="contain" src={"/"+Images[modalIndex].name} width={Images[modalIndex].width} height={Images[modalIndex].height}/> */}
        <Image className="p-24" objectFit="contain" layout="fill" src={"/"+Images[modalIndex].name} />
        </div>
      </div> 
      <span
        className="fixed top-10 right-10 text-3xl sm:text-4xl md:text-7xl text-white"
        onClick={() => {
          setShowModal(false);
        }}
      >
        &times;
      </span>
      <span className="text-3xl sm:text-4xl md:text-5xl text-white fixed top-1/2 right-10" onClick={()=>{changeIndex(1)}}>
        <FontAwesomeIcon icon={["fas", "arrow-right"]} />
      </span>
      <span className="text-3xl sm:text-4xl md:text-5xl text-white fixed top-1/2 left-10" onClick={()=>{changeIndex(-1)}}>
        <FontAwesomeIcon icon={["fas", "arrow-left"]} />
      </span>
    </div>
  );
}
