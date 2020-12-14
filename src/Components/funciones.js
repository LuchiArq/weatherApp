
export  function setAnimacion(anim){

    let animacion = "" 
    switch( anim ){
        case "01d":{
            animacion = require('../assets/despejadoDia.json')
            break
        }
        case "01n":{
             animacion = require('../assets/despejadoNoche.json')
             break
        }
        case "03d": case "02d":{
             animacion = require('../assets/nubladoParcialDia.json')
             break
        }
        case "03n": case "02n":{
             animacion = require('../assets/nubladoParcialNoche.json')
             break
        }
         case "04d": case "04n":{
             animacion = require('../assets/nublado.json')
             break
        }
        case "09d": case "09n": case"11d": case "11n":{
             animacion = require('../assets/tormenta.json')
             break
        }
        case "10d":{
             animacion = require('../assets/lluviaDia.json')
             break
        }
        case "10n":{
              animacion = require('../assets/lluviaNoche.json')
              break
        }
        case "13d": case"13n":{
              animacion = require('../assets/nieve.json')
              break
        }
        case "50d": case "50n":{
             animacion = require('../assets/viento.json')
             break
        }
       default : break
    
    }
    return animacion
} 