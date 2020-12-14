import React,{useState} from 'react';
import ReactDom from 'react-dom'
import "./modal.scss"
import {useSelector } from 'react-redux';
import Lottie from 'react-lottie'

export default function Modal({openClose}){

const animacion = require('../../assets/warning.json')    

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData:animacion ,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
        }
    }
    
const {error,mensaje} = useSelector((store) => store.cityReducer);

const [closeAnimation, setCloseAnimation] = useState("")
const [closeAnimationFondo, setCloseAnimationFondo] = useState("") 

const modo = useSelector((store) => store.cityReducer.mode);


if(!error){
    return null
}

return ReactDom.createPortal(
    <>
    <div tabIndex={-1} className={`
        fondo
        openFondo
        ${closeAnimationFondo}
    `}>
        <div 

            className={`
            modal 
            slideIn
            ${modo ? "modal-dark" : "modal-light"}
            ${closeAnimation}
        `}>
             <svg 
                onClick={()=>{
                    setCloseAnimation("CloseModal")
                    setCloseAnimationFondo("closeCard")

                    setTimeout(()=>{
                        setCloseAnimationFondo("")
                        setCloseAnimation("")
                        openClose()},400)
                    }} 
                className={`
                    boton-cierre 
                    ${modo ? "boton-cierre-dark" : "" }
                `} 
                viewBox="0 0 24 24">
                <path fill="currentColor" d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />
            </svg> 
            <div  className="modal-warning">
                <Lottie 
                    options={defaultOptions}
                    height={70}
                    width={70}
                />
            </div>
            <p className="modal-mensaje">{mensaje ? mensaje : "El nombre de la ciudad no es valido"}</p>
        </div>
    </div>
        </>,
    document.getElementById('portal')
)

}




