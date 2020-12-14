import React,{useState,useEffect} from 'react';
import './nav.scss';
import { useDispatch, useSelector } from 'react-redux';
import {getCity,setMode,getLocalCity,closeModal} from '../../store/actions.js'
import Modal from '../Modal/Modal'

export default function Nav(){

    
    const dispatch = useDispatch()
    const modo = useSelector((store) => store.cityReducer.mode);
    const ciudades = useSelector((store) => store.cityReducer.ciudades);

const [Ciudad,setCiudad] = useState("");

const modoNoche=()=>{
    dispatch(setMode(!modo))
}
const openClose = ()=>{
     dispatch(closeModal())
 }

  useEffect(()=>{
    !ciudades.length &&  dispatch(getLocalCity())
},[])  

const buscar = (Ciudad) =>{
  dispatch(getCity(Ciudad))
  setCiudad("")
}
    return(
        <nav className={`nav ${modo ? "nav-dark" : "nav"}`}>
            <Modal openClose={openClose}/>
            <div className="logo">
                <h3>Luciano Arquiel</h3>
            </div>
            <form className="searchBar" onSubmit={(e) => {
                e.preventDefault();
                buscar(Ciudad)
                
                }}>

                <label className={`searchBar-label ${modo ? "searchBar-label-dark" : "searchBar-label"}`}>
                    <input 
                        placeholder="Ciudad"
                        className={`searchBar-label-search ${modo ? "searchBar-label-search-dark" : " "}`} 
                        type="text" 
                        value={Ciudad} 
                        onChange={e=>setCiudad(e.target.value)}
                    />
                    <svg onClick={()=>{buscar(Ciudad)}} className={`searchBar-label-icon ${modo ? "searchBar-label-icon-dark" : " "}`}  viewBox="0 0 24 24">
                        <path fill={`${modo ? "#CEDDEC" : "white"}`} d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                    </svg>
                    
                </label>
            </form>
            <div className="darkMode">
                <svg style={{width:"24px",height:"24px"}} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M3.55,18.54L4.96,19.95L6.76,18.16L5.34,16.74M11,22.45C11.32,22.45 13,22.45 13,22.45V19.5H11M12,5.5A6,6 0 0,0 6,11.5A6,6 0 0,0 12,17.5A6,6 0 0,0 18,11.5C18,8.18 15.31,5.5 12,5.5M20,12.5H23V10.5H20M17.24,18.16L19.04,19.95L20.45,18.54L18.66,16.74M20.45,4.46L19.04,3.05L17.24,4.84L18.66,6.26M13,0.55H11V3.5H13M4,10.5H1V12.5H4M6.76,4.84L4.96,3.05L3.55,4.46L5.34,6.26L6.76,4.84Z" />
                </svg>
                    <input type="checkbox" id="switch"/> 
                    <label htmlFor="switch" className="darkMode-lbl" onClick={ () => modoNoche()}></label>
                <svg style={{width:"24px",height:"24px"}} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 2A9.91 9.91 0 0 0 9 2.46A10 10 0 0 1 9 21.54A10 10 0 1 0 12 2Z" />
                </svg>
            </div>
            <div className="darkMode-mobile-area">
            <div className={`darkMode-mobile ${modo? "darkMode-mobile-dark" : " " }`} onClick={ () => modoNoche()}>
                {
                    modo ?
                    <svg style={{width:"30px",height:"30px"}} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 2A9.91 9.91 0 0 0 9 2.46A10 10 0 0 1 9 21.54A10 10 0 1 0 12 2Z" />
                    </svg>
                    :
                    <svg style={{width:"30px",height:"30px"}} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M3.55,18.54L4.96,19.95L6.76,18.16L5.34,16.74M11,22.45C11.32,22.45 13,22.45 13,22.45V19.5H11M12,5.5A6,6 0 0,0 6,11.5A6,6 0 0,0 12,17.5A6,6 0 0,0 18,11.5C18,8.18 15.31,5.5 12,5.5M20,12.5H23V10.5H20M17.24,18.16L19.04,19.95L20.45,18.54L18.66,16.74M20.45,4.46L19.04,3.05L17.24,4.84L18.66,6.26M13,0.55H11V3.5H13M4,10.5H1V12.5H4M6.76,4.84L4.96,3.05L3.55,4.46L5.34,6.26L6.76,4.84Z" />
                    </svg>    
                }
            </div>
            </div>
        </nav>
    )
}