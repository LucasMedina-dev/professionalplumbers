import { useState } from "react";

export default function Gallery({ closeGallery }) {
  const [position, setPosition] = useState(0);

  const goRight = () => {
    const container = document.querySelector(".image-container");
    if (position < container.children.length - 1) {
      const newPosition = position + 1;
      setPosition(newPosition);
      container.children[newPosition].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const goLeft = () => {
    const container = document.querySelector(".image-container");
    if (position > 0) {
      const newPosition = position - 1;
      setPosition(newPosition);
      container.children[newPosition].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-slate-900 bg-opacity-70 z-50 flex flex-col justify-center">
        <button
          className="absolute top-0 right-0 text-white text-xl p-4"
          onClick={closeGallery}
        >
          X
        </button>
        <div className="absolute w-full my-auto flex flex-row justify-between text-white px-4 font-extrabold text-4xl">
          <button onClick={goLeft}>L</button>
          <button onClick={goRight}>R</button>
        </div>
        <div className="w-full h-2/3 my-auto overflow-hidden scroll-smooth flex flex-col justify-center flex-wrap image-container">
          <div className="w-full h-full mx-auto my-auto bg-gray-700">
            <img
            className="mx-auto h-full object-cover"
            src="/plomeria.jpg"
            alt=""
            id="uno"
          />
          </div>
          <div className="w-full h-full mx-auto my-auto bg-gray-700">
            <img
            className="mx-auto h-full object-cover"
            src="/main.jpg"
            alt=""
            id="dos"
          />
          </div>
          <div className="w-full h-full mx-auto my-auto bg-gray-700">
            <img
            className="mx-auto h-full object-cover"
            src="/herramientas.jpeg"
            alt=""
            id="tres"
          />
          </div>
          <div className="w-full h-full mx-auto my-auto bg-gray-700">
            <img
            className="mx-auto h-full object-cover"
            src="/plumbers.jpg"
            alt=""
            id="cuatro"
          />
          </div>
          <div className="w-full h-full mx-auto my-auto bg-gray-700">
            <img
            className="mx-auto h-full object-cover"
            src="/calentador.jpeg"
            alt=""
            id="cinco"
          />
          </div>
        </div>
      </div>
    </>
  );
}
