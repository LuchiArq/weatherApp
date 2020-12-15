import { GET_CITY, SET_MODE, CLOSE, ERROR,GET_LOCAL_CITY , CLOSE_MODAL,DETALLES} from './actions.js';

const initalState = {
    ciudades : [],
    mode:false,
    error:"",
    mensaje:"",
    detalles:{}
}

export default (state = initalState, action)=>{
    switch(action.type){

        case GET_LOCAL_CITY :{
         
            return{
                ...state,
                ciudades: action.ciudad.datos.cod == "200" ? state.ciudades.concat(action.ciudad) : state.ciudades,
                error: action.ciudad.datos.cod == "200" ?  false : true 
            }
        }

        case GET_CITY:{
           var existe = !!(state.ciudades.filter(city=> city.datos.id == action.ciudad.datos.id)[0])
          
            return{  
               ...state, 
               ciudades: action.ciudad.datos.cod == "200" && !existe ? state.ciudades.concat(action.ciudad) : state.ciudades,
               detalles:action.ciudad,
               error: action.ciudad.datos.cod == "200" && !existe  ?  false : true,
               mensaje: existe && ` ${action.ciudad.datos.name} ya se encuentra en la lista`
            }
        }
       case DETALLES:
            return{
                ...state,
                detalles:state.ciudades.filter(city=> city.datos.id == action.id)[0]
            }
        
        case SET_MODE:{
            return{
                ...state,
                mode: action.mode,
            }
        }
        case CLOSE:{
            return{
                ...state,
                ciudades: state.ciudades.filter(city=> city.datos.id !== action.id)
            }
     
        }
        case ERROR:{
            return{
                ...state,
                error:true

            }
        }
        case CLOSE_MODAL:{
            return{
                ...state,
                error:false,
                mensaje:""
            }
        }
        default: return state;
    }

  
}