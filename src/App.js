import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Container from './Components/Container/Container'
import Nav from './Components/Nav/Nav'
import CardDetalles from './Components/Detalles/CardDetalles'
import { useDispatch, useSelector } from 'react-redux';

function App() {
//const dispatch  = useDispatch()

const modo = useSelector((store) => store.cityReducer.mode);
  return (
    <Router>
      <div className={`appContainer ${modo ? "appContainer-dark" : "appContainer-light"}`}>
      <Route path ="/" component={Nav}/> 
      <Route exact path ="/detalles/:name" component={CardDetalles}/>     
      <Route exact path ="/" component={Container}/>  
     </div>
    </Router >
  );
}

export default App;
