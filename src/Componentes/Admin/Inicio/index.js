import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
//import axios from 'axios';
//Componentes
import NavPrincipal from '../../reutilizables/NavPrincipal';
import NavAdmin from '../../reutilizables/NavAdmin';
import Barra from './Barra'
import Dona from './Doughnut';
import DonaGenero from './DonaGenero';

export default class Inicio extends Component {

    constructor(...props) {
        super(...props);

        this.isAuth = this.isAuth.bind(this);
        this.isType = this.isType.bind(this);
    }

    isAuth() {
        //const t = localStorage.getItem('token');
        const t = sessionStorage.getItem('token')
        return t && t.length > 10;
    }

    isType() {
        const type = sessionStorage.getItem('typeU');
        return type;
    }
    //agregar datos generales
    


    render() {

        const isAlreadyAuth = this.isAuth();
        const isT = this.isType();
 
        return (
            <div style={{ margin: '0px' }}>
                {   (isAlreadyAuth && isT === 'administrador') || (isAlreadyAuth && isT === 'superadministrador') ? (
                        <div style={{ margin: '0px' }}>
                        <NavPrincipal />
                        <NavAdmin></NavAdmin>
                        <Col md={10} style={{ backgroundColor: '#FAFAFC', height: '100%' }}>
                            <Row>
                                <Barra />
                                <Dona />
                                <DonaGenero />
                            </Row>
                        </Col>
        
                    </div>
                                    ) : (<Redirect to='/' />)}
            </div>            
        );
    }

}