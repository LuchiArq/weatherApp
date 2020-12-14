import React from 'react';
import './detalles.scss'
import {useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import Datos from './Datos'
import Dias from './Dias'
import moment from 'moment-timezone'
import '../Card/node_modules/moment/locale/es'  
import Statistics from './Statistics'
import Current from './Current'

export default function CardDetalles(props){

    moment.locale('es')
    const {datos,detalles} = useSelector((store) => store.cityReducer.detalles);
    const modo = useSelector((store) => store.cityReducer.mode);

    return(
        <div className={`containerDetalles ${modo ? "containerDetalles-dark" : "containerDetalles-light"}`}>
            {datos 
                ? 
            <div 
                className={`
                card-detalles
                slideIn 
                ${modo ? "card-detalles-dark" : "card-detalles-light"}
                `}>
                    <Link to="/">    
                        <svg className={`back ${modo ? 'back-dark': " "}`} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
                        </svg>
                    </Link>
                <div className="current">
                    <Current
                        datos={datos}
                        detalles={detalles}
                    />
                </div>

                <div className="mapa">
                    <Statistics
                        datos={datos}
                        detalles={detalles}
                    />
                </div>

                <div className="dias_d">
                    <div className="ContainerDias">
                    {
                        detalles.daily.map((dia,i)=>{
                           return <Dias 
                            fecha={moment.tz(dia.dt*1000 , detalles.timezone).format("llll")}
                            datos={dia}
                            key={i}
                           />
                        })
                    }
                    </div>
                </div>

                <div className="datos_d">
                    <Datos 
                        title={"Humedad"} 
                        datos={datos.main.humidity} 
                        unidades={"%"} 
                        icono={"icono"}/>
                    <Datos 
                        title={"Viento"} 
                        datos={(datos.wind.speed*3.6).toFixed(2)} 
                        unidades={"Km/h"} icono={"icono"}/>
                    <Datos 
                        title={"Presipit. %"} 
                        datos={detalles.daily[0].pop*100} 
                        unidades={"%"} 
                        icono={"icono"}/>
                    <Datos 
                        title={"Índice UV"} 
                        datos={Math.round(detalles.daily[0].uvi)} 
                        unidades={"uv"} 
                        icono={"icono"}/>
                </div>

            </div>
             : props.history.push('/')}
        </div>
    )
}