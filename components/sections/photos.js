import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";

export default function Photos({ photos }) {
  const [showModal, setShowModal] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const changeIndex = i => {

  }
  return (
    <>
      <div id="photos" className="min-h-screen bg-yellow-200 text-center">
        <h1 className="text-7xl py-10">Photos</h1>
        <div className="mx-auto p-10 md:px-0 container h-full flex flex-wrap gap-0">
          {photos.map((url,key) => {
            return (
              <div className="h-96 w-full md:w-1/3" key={key} >
                <img className="w-full h-full object-cover" src={url + "=w256"} onClick={()=>{
                    setModalIndex(key);
                    setShowModal(true);
                }} />
              </div>
            );
          })}
        </div>
            <a className="inline-block text-2xl bg-white p-4 mb-10 rounded-full" href="https://photos.app.goo.gl/2W6GyJDomNyhywXM8" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={["fas","image"]}/> See More
            </a>
      </div>
      <PhotoModal
        photos={photos}
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
      <span
        className="fixed top-10 right-10 text-7xl text-white"
        onClick={() => {
          setShowModal(false);
        }}
      >
        &times;
      </span>
      <div className="flex h-full items-center">
        <img className="mx-auto my-auto max-h-full" src={photos[modalIndex] + "=w1024"} />
      </div>
      <span className="text-5xl text-white fixed top-1/2 right-10" onClick={()=>{changeIndex(1)}}>
        <FontAwesomeIcon icon={["fas", "arrow-right"]} />
      </span>
      <span className="text-5xl text-white fixed top-1/2 left-10" onClick={()=>{changeIndex(-1)}}>
        <FontAwesomeIcon icon={["fas", "arrow-left"]} />
      </span>
    </div>
  );
}
