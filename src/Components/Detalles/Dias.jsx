import React from 'react';
import './dias.scss';
import Lottie from 'react-lottie'
import {setAnimacion} from '../funciones'

export default function Dias({datos,fecha}){

let dia = fecha.split(" ").slice(0,2).join().replace(".,,"," ")

console.log(datos)
   const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData:setAnimacion(datos.weather[0].icon) ,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
    }
} 
return(
    <div className="dia-container">
        <div className="dia-container-fecha">
            <p>{dia}</p>
        </div>

        <div className="dia-container-icono">
          <Lottie
            options={defaultOptions}
            height={50}
            width={50}

          />
        </div>

        <div className="dia-container-temp">
          <p>{Math.round(datos.temp.max)+"°"}</p>
          <p>{Math.round(datos.temp.min)+"°"}</p>
        </div>
  </div>
)}