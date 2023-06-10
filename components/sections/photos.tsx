"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { useState } from "react";
import Images from "../../data/images.json";
import {
  faArrowLeft,
  faArrowRight,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Photos() {
  const [showModal, setShowModal] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  return (
    <>
      <div id="photos" className="z-10 min-h-screen text-center">
        <div className="container mx-auto p-10 col-count-1 col-gap-sm sm:col-count-2 md:px-0 md:col-count-3 lg:col-count-4">
          {Images.map((image, idx) => (
            <Image
              alt={image.alt}
              key={idx}
              src={"/" + image.name}
              width={400}
              height={image.height / (image.width / 400)}
              onClick={() => {
                setModalIndex(idx);
                setShowModal(true);
              }}
            />
          ))}
        </div>
        <div className="space-x-10">
          <a
            className="noanimation mb-10 inline-block border border-black p-4 text-2xl  hover:shadow-lg"
            href="https://photos.app.goo.gl/2W6GyJDomNyhywXM8"
            target="_blank"
            rel="noopener noreferrer"
          >
            See All Collections <FontAwesomeIcon icon={faCaretRight} />
          </a>
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
}: {
  photos: Photo[];
  modalIndex: number;
  setModalIndex: React.Dispatch<React.SetStateAction<number>>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const changeIndex = (i: number) => {
    const max = photos.length;
    if (modalIndex + i < 0) setModalIndex(max - 1);
    else if (modalIndex + i === max) setModalIndex(0);
    else setModalIndex(modalIndex + i);
  };
  return (
    <div
      className={classNames(
        "fade fixed left-0 top-0 z-50 h-full w-full bg-smoke-darkest outline-none",
        { hidden: !showModal }
      )}
    >
      <div className="flex h-full flex-col items-center p-24">
        <div className="my-auto max-h-full">
          <Image
            alt={Images[modalIndex].alt}
            className="p-24"
            style={{ objectFit: "contain" }}
            fill={true}
            src={"/" + Images[modalIndex].name}
          />
        </div>
      </div>
      <span
        className="fixed right-10 top-10 text-3xl text-white sm:text-4xl md:text-7xl"
        onClick={() => {
          setShowModal(false);
        }}
      >
        &times;
      </span>
      <span
        className="fixed right-10 top-1/2 text-3xl text-white sm:text-4xl md:text-5xl"
        onClick={() => {
          changeIndex(1);
        }}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </span>
      <span
        className="fixed left-10 top-1/2 text-3xl text-white sm:text-4xl md:text-5xl"
        onClick={() => {
          changeIndex(-1);
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </span>
    </div>
  );
}
