import React, { Component } from 'react';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import './App.css';
//componentes
import LoginCompleto from './Componentes/Login/LoginCompleto';
import SingUp from './Componentes/SingUp';
import Encuesta from './Componentes/Encuesta';
import Error from './Componentes/Error';
import InicioAdmin from './Componentes/Admin/Inicio/index';
import Carreras from './Componentes/Admin/Carreras';
import Cuestionarios from './Componentes/Admin/Cuestionarios';
import Graficas from './Componentes/Admin/Graficas';
import Animacion from './Componentes/Login/ModalAnimacion';
import CuestionarioEncuesta from './Componentes/Encuesta/Cuestionario';
import Gracias from './Componentes/Encuesta/Cuestionario/Gracias';



class App extends Component {


  render() {
    return (
      <Router>
        <div>        
        <Switch>
        <Route exact path="/"  component={LoginCompleto}></Route>
        <Route path="/SingUp" component={SingUp}></Route>
        <Route path="/Encuesta" component={Encuesta}></Route>
        <Route path="/Inicio" component={InicioAdmin}></Route>
        <Route path="/Carreras" component={Carreras}></Route>
        <Route path="/Cuestionarios" component={Cuestionarios}></Route>
        <Route path="/Graficas" component={Graficas}></Route>
        <Route path="/Animacion" component={Animacion}></Route>
        <Route path="/Survey" component={CuestionarioEncuesta}></Route>
        <Route path="/endup" component={Gracias}></Route>
        <Route component={Error}></Route>
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

