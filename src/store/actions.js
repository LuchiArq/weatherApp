export const GET_CITY = "GET_CITY";
export const SET_MODE = "SET_MODE";
export const CLOSE = "CLOSE";
export const ERROR = "ERROR";
export const GET_LOCAL_CITY = "GET_LOCAL_CITY";
export const CLOSE_MODAL = "CLOSE_MODAL"
export const DETALLES ="DETALLES";

export function getCity(city){
    return function(dispatch){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=sp&appid=0942993d27025a20ba51ad6d7cf09141&units=metric`;
            fetch(url)
                .then(respuesta=> respuesta.json() )
                .then(datos=>{
                    console.log("ESTA ES LA CIUDAD ",datos)
                    
                        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${datos.coord.lat}&lon=${datos.coord.lon}&lang=sp&exclude=minutely&appid=0942993d27025a20ba51ad6d7cf09141&units=metric`;
                        fetch(url)
                            .then(respuesta=> respuesta.json() )
                            .then(detalles=>{
                                var obj={
                                    datos,
                                    detalles
                                }
                                console.log("ESTA ES LA CIUDAD CON DETALLES ",obj)
                                
                                dispatch({
                                    type:GET_CITY,
                                    ciudad:obj })
                    })
                })
                .catch(err=>{
                    console.log("ASDASDASDASDA",err)
                    dispatch({
                        type:ERROR,
                    })
                })
    }
}
export function getLocalCity(){
    return function(dispatch){
        navigator.geolocation.getCurrentPosition(async function(position){
           await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${position.coords.latitude.toFixed(2)}&lon=${position.coords.longitude.toFixed(2)}&lang=sp&appid=0942993d27025a20ba51ad6d7cf09141&units=metric`)
            .then(respuesta=> respuesta.json())
            .then(datos =>{
                const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${datos.coord.lat}&lon=${datos.coord.lon}&lang=sp&exclude=minutely&appid=0942993d27025a20ba51ad6d7cf09141&units=metric`;
                fetch(url)
                    .then(respuesta=> respuesta.json() )
                    .then(detalles=>{
                        var obj={
                            datos,
                            detalles
                        }
                        dispatch({
                            type:GET_LOCAL_CITY,
                            ciudad:obj })
            })
            })
            .catch(err=>{console.log(err)})
        })
    }
}

export function getDetalles(id){
      return{
        type:DETALLES,
        id
    }   
}
                
export function setMode(mode){
    return{
        type:SET_MODE,
        mode
    }
}
export function close(id){
    return{
        type:CLOSE,
        id
    }
}
export function closeModal(){
    return{
        type:CLOSE_MODAL,
        
    }
}