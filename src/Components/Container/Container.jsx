import React from 'react';
import './container.scss';
import  Card from '../Card/Card'
import { useSelector } from 'react-redux';


export default function Container(){

const ciudades = useSelector((store) => store.cityReducer.ciudades);
const modo = useSelector((store) => store.cityReducer.mode);



return(
    <div className="cont container">

        <div className={`containerCard ${modo ? "containerCard-dark" : "containerCard-light"}`}>
            { 
            ciudades.length
                ?
                ciudades.map((item,i) => <Card key={i} datos={item}/>)
                :
                null 
            } 
        </div>

    </div>
)}




