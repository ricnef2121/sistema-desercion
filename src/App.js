import React, { Component } from 'react';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import './App.css';
//componentes
import LoginCompleto from './Componentes/Login/LoginCompleto';
import SingUp from './Componentes/SingUp';
import Encuesta from './Componentes/Encuesta';
import Error from './Componentes/Error';
//import Menu from './Componentes/menu';
import InicioAdmin from './Componentes/Admin/Inicio/index';
import Carreras from './Componentes/Admin/Carreras';
import Cuestionarios from './Componentes/Admin/Cuestionarios';
import Graficas from './Componentes/Admin/Graficas';
/*
const isAuth = {
  //const t = localStorage.getItem('token');
  //return t && t.length > 10;
  auth() {
    const t = localStorage.getItem('token');
    return t && t.length > 10;
  },
  signOut(){
    const t = localStorage.clear();
    return t;
  }
}
*/
// <Route path="/Encuesta" component={Encuesta}></Route>
//<PrivateRoute path="/Encuesta" component={Encuesta} ></PrivateRoute>
/*
const PrivateRoute = ({ component: Component, rest }) => (
  <Route {...rest} render={(props)=>(
    isAuth.auth ? <Component {...props} /> :
    <Redirect to={ { pathname: '/', state: { from: props.location}}}/>
  )}/>
)
*/

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
        <Route component={Error}></Route>
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

