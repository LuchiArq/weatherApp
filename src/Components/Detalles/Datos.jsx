import React from 'react';
import './datos.scss';
import { useSelector } from 'react-redux';

export default function Datos({title,datos,icono,unidades}){


return(
    <div className="dato-container">
        <div className="dato-container-tipo">
          <p>{title}</p>
        </div>
        <div className="dato-container-dato">
          <p className="dato-container-dato-texto">{datos}</p>
          <p className="dato-container-dato-unidades">{unidades}</p>
        </div>
  </div>
)}




