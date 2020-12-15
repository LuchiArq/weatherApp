import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Container from './Components/Container/Container'
import Nav from './Components/Nav/Nav'
import CardDetalles from './Components/Detalles/CardDetalles'
import { useSelector } from 'react-redux';

function App() {

const modo = useSelector((store) => store.cityReducer.mode);
  return (
    <Router  basename={process.env.REACT_APP_ROUTER_BASE || ''}>
      <div className={`appContainer ${modo ? "appContainer-dark" : "appContainer-light"}`}>
      <Route path ="/" component={Nav}/> 
      <Route exact path ="/" component={Container}/>  
      <Route exact path ="/detalles/:name" component={CardDetalles}/>     
     </div>
    </Router >
  );
}

export default App;
