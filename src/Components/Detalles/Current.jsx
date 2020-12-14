import React from 'react';
import './current.scss';
import { useSelector } from 'react-redux';
import {setAnimacion} from '../funciones'
import Lottie from 'react-lottie'
import moment from 'moment-timezone'
import 'moment/locale/es'

export default function Current({datos,detalles}){
moment.locale('es')

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData:datos && setAnimacion(datos.weather[0].icon) ,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
    }
}
return(
<div className="det-current">
    <div className="det-animacion">
        <div className="container-icono">
            <div className="icono_d">
                <Lottie 
                    options={defaultOptions}
                />
            </div>
        </div>
                       
    </div>
    <div className="det-nombre">
        <p className="det-nombre-nombre">{datos.name}</p>
        <p className="det-nombre-fecha">{moment.tz(detalles.current.dt*1000 , detalles.timezone).format("lll")}</p>
    </div>
    <div className="det-temperatura">
            <p className="det-temperatura-temp">{`${Math.round(datos.main.temp)}°`}</p>
        <div className="det-temperatura-maxmin">
            <p className="det-temperatura-maxmin">{`${Math.round(detalles.daily[0].temp.max)}°`}</p>
            <p className="det-temperatura-maxmin">{`${Math.round(detalles.daily[0].temp.min)}°`}</p>
        </div>
    </div>
</div>
)}




