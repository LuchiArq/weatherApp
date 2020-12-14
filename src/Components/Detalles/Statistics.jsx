import React from 'react';
import './statistics.scss';
import { useSelector } from 'react-redux';
import {Line} from 'react-chartjs-2'
import 'chartjs-plugin-datalabels';
import moment from 'moment-timezone'
import 'moment/locale/es'  


export default function Statistics({detalles,datos}){
moment.locale('es')
const modo = useSelector((store) => store.cityReducer.mode);



//FORMATEANDO DATO DE HORAS
var horas= detalles.hourly.map(hs=>{
       return moment.tz(hs.dt*1000 , detalles.timezone).format("llll").split(" ").slice(6).join()
    })
//FORMATEANDO DATO DE TEMPERATURA
var temp= detalles.hourly.map(hs=>{
    return Math.round(hs.temp)
    })

return(
    <div className="statistics">
            <Line
                data={{
                    labels: horas.slice(0,12), //time
                    datasets: [{
                      fill:'start',
                      data: temp.slice(0,12), //temp
                      backgroundColor: `${ modo ? '#232a30' : '#fff5cc'}` ,
                      borderColor: `${ modo ? '#383838' : '#fc0'}`,
                      pointRadius: 0,
                    }],
                  }}
                options= {{
                    maintainAspectRatio:false,
                    responsive:true,
                    legend:{
                        display:false
                    },
                    scales: {
                        yAxes: [{
                          gridLines: {
                            drawOnChartArea: false,
                            drawBorder: false,
                            tickMarkLength: 0,
                          },
                          ticks: {
                            suggestedMax: datos.main.temp,
                            display: false
                          }
                        }],

                        xAxes: [{
                            gridLines: {
                                tickMarkLength: 5,
                                display:false
                                }                            
                            }]
                    },
                    plugins: {
                        datalabels: {
                          align: 'top',
                          color: '#bababa',
                          font: {
                            weight: 'bold'
                          },
                          display: true,
                        }
                    },
                    layout: {
                        padding: {
                          top: 30
                        }
                    }

                }}
            
            />
  </div>
)}




