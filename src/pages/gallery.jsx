import { useState } from "react";

export default function Gallery({ closeGallery }) {
  const [position, setPosition] = useState(0);
  const images = ["agua1.jpeg", "bomba1.jpeg", "colocacion1.jpeg", "colocacion2.jpeg", "colocacion3.jpeg", "colocacion4.jpeg", "herramientas1.jpeg", "herramientas2.jpeg", "obra1.jpeg", "obra2.jpeg", "termosolar1.jpeg", "termosolar2.jpeg"];

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
      <div className="fixed top-0 left-0 w-full h-full bg-slate-900 bg-opacity-70 z-50 flex flex-col justify-center opacity-0 show">
        <button
          className="absolute top-0 right-0 text-white text-xl p-4"
          onClick={closeGallery}
        >
          <img src="/close.svg" alt="" />
        </button>
        <div className="absolute top-0 left-0 w-full h-full -z-10" onClick={closeGallery}></div>
        <div className="absolute w-full my-auto flex flex-row justify-between text-white px-4 font-extrabold text-4xl">
          <button onClick={goLeft}><img className="bg-white rounded-full bg-opacity-40" src="/leftarrow.svg" alt="leftarrow" /></button>
          <button onClick={goRight}><img className="bg-white rounded-full bg-opacity-40" src="/rightarrow.svg" alt="rightarrow" /></button>
        </div>
        <div className="w-full h-2/3 my-auto overflow-hidden scroll-smooth flex flex-col justify-center flex-wrap image-container">
          {images.map((image, index) => (
            <div key={index} className="w-full h-full mx-auto bg-orange-100 bg-opacity-80">
              <img
                className="mx-auto h-full object-cover"
                src={`/jobs/${image}`}
                alt={`Imagen ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
