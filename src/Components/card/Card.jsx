import React from 'react';
import {setAnimacion} from '../funciones'
import {Link} from 'react-router-dom'
import Lottie from 'react-lottie'
import './card.scss'
import { useDispatch, useSelector } from 'react-redux';
import {close,getDetalles} from '../../store/actions.js'
import moment from 'moment-timezone'
import 'moment/locale/es'  

export default function Card(props){
    moment.locale('es')
    
    const {datos,detalles} = props.datos
    const dispatch = useDispatch()

    //datos.weather[0].icon console.log(moment.tz(detalles.current.dt*1000 , detalles.timezone).format("LLL"))

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData:setAnimacion(datos.weather[0].icon) ,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
        }
    }
    
    const cerrar =  () =>{
       dispatch(close(datos.id))
    }

    const modo = useSelector((store) => store.cityReducer.mode);

    return(
        <div className={`
            mainContainerCard 
            slideIn
            ${modo ? "mainContainerCard-dark" : " "}`
            }
        > 
            <svg onClick={cerrar} className={`boton-cierre ${modo ? "boton-cierre-dark" : "" }`} style={{width:"24px",height:"24px"}} viewBox="0 0 24 24">
                <path fill="currentColor" d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />
            </svg>
            <Link to={`/detalles/${datos.name}`}>
                <div onClick={()=>{dispatch(getDetalles(datos.id))}} className="card">
                    <div className ="ciudad">
                        <p className="ciudad-nombre">{datos.name}</p>
                        <p className="ciudad-fecha">{moment.tz(detalles.current.dt*1000 , detalles.timezone).format("LLL")}</p>
                    </div>
                    <div className="icono-area">
                        <div className="icono">
                            <Lottie 
                                options={defaultOptions}
                            />
                        </div>
                    </div>
                    <div  className ="temp">
                        <p className="temp-temp">{`${Math.round(datos.main.temp)}°`}</p>
                        <p className="temp-descr">{datos.weather[0].description}</p>
                    </div>
                    <div className="maxmin">
                        <div>
                            <svg className="maxmin-icon-max" viewBox="0 0 24 24">
                                <path fill="red" d="M7,15L12,10L17,15H7Z" />
                            </svg>
                            <p className="maxmin-temperaturas">{`${Math.round(detalles.daily[0].temp.max)}°`}</p>
                            <p className="maxmin-text-max">Max</p>
                        </div>
                        <div>
                        <svg  className="maxmin-icon-min" viewBox="0 0 24 24">
                            <path fill="blue" d="M7,10L12,15L17,10H7Z" />
                        </svg>
                            <p className="maxmin-temperaturas">{`${Math.round(detalles.daily[0].temp.min)}°`}</p>
                            <p className="maxmin-text-min">Min</p>
                        </div>
                    </div>
                </div>  
         </Link> 
        </div>
    )
}