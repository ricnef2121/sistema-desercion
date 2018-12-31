import React,{ Component } from 'react';
import { Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

//Componente
import EncuestaForm from './Encuesta'

export default class Encuesta extends Component {
    constructor(...props) {
        super(...props);

        this.isAuth = this.isAuth.bind(this);
    
    }    

    isAuth() {
        //const t = localStorage.getItem('token');
        const t = sessionStorage.getItem('token')
        return t && t.length > 10;
      } 
    

    render(){
        const isAlreadyAuth = this.isAuth();
        return(
        <div style={{margin:'0px'}}>
            { isAlreadyAuth ? (
                <div style={{margin:0}}>
                <EncuestaForm></EncuestaForm>
                </div>
            ) : (
                <Redirect to='/' />
            )}
        </div>
            
            
        );
    }
}