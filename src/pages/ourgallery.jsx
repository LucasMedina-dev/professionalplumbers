import {useState} from 'react';
import Gallery from './gallery.jsx';



export default function Ourgallery() {
    const [open, setOpen]=useState(false)

    const openGallery=()=>{
        setOpen(true)
    }
    const closeGallery=()=>{
        setOpen(false)
    }
    return (
      <>
      <div className="w-full h-72 max-md:px-2 my-20">
        <div className="w-full md:w-2/3 h-full gap-x-7 bg-gray-400 rounded-xl mx-auto px-10 flex flex-row items-center bg-cover bg-[url('/plumbers.jpg')]">
          <div className="h-2/3 relative rounded-xl overflow-hidden max-sm:hidden w-2/3">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent">
              <h2 className="text-white font-semibold w-min pt-7 pl-5">PROFESSIONAL PLUMBERS</h2>
            </div>
            <img
              className="w-full h-full object-cover object-center"
              src="/herramientas.jpeg"
              alt="herramientas"
            />
          </div>
          <div className="w-full h-2/3 sm:w-1/2">
            <h6 className="text-3xl text-black text-wrap w-44 max-sm:w-full leading-7">
              NUESTRA <span className="font-bold tracking-wider">GALERIA</span> DE TRABAJOS
            </h6>
            <span className="flex h-px w-full border border-orange-500 max-md:mx-auto mb-4 -translate-y-1"></span>
            <p className="text-xs font-normal">
              Hacemos trabajos edilicios, domicilarios y comerciales.
            </p>
            <p className="text-xs font-normal mb-3">Proffessional Plumbers</p>
            <button
                onClick={openGallery}
              className="px-6 py-2 border-2 border-blue-700 text-xs rounded-lg font-bold hover:bg-blue-700 hover:text-white transition-all cursor-pointer"
              
            >
              GALERIA DE FOTOS
            </button>
          </div>
        </div>
      </div>
        {
            open && (<Gallery closeGallery={closeGallery}></Gallery>)
        }
      
      </>
    );
  }
  