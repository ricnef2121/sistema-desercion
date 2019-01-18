import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
//import axios from 'axios';
//Componentes
import NavPrincipal from '../../reutilizables/NavPrincipal';
import NavAdmin from '../../reutilizables/NavAdmin';
import ListaCarreras from './ListaCarreras';
import BuscarCarrera from "./BuscarCarrera";
import ResultBusqueda from './resulbusqueda';


export default class Carreras extends Component {
    constructor(props) {
        super(props);

        this.setCarreras = this.setCarreras.bind(this);
        this.showTrue = this.showTrue.bind(this);
        this.showFalse = this.showFalse.bind(this);
        this.isAuth = this.isAuth.bind(this);
        this.isType = this.isType.bind(this);

        this.state = {
            carreras: [],
            hiddenbusqueda: true,
        }
    }

    //validaciones de tipo de usuario
    isAuth() {
        //const t = localStorage.getItem('token');
        const t = sessionStorage.getItem('token')
        return t && t.length > 10;
    }

    isType() {
        const type = sessionStorage.getItem('typeU');
        return type;
    }

//metodos de modal y demas
    showTrue() {
        this.setState({
            hiddenbusqueda: false
        })
    }

    showFalse() {
        this.setState({
            hiddenbusqueda: true
        })
    }


    setCarreras(param) {
        this.setState({
            carreras: param
        });
        console.log('new', this.state.carreras)
    }


    render() {
        const isAlreadyAuth = this.isAuth();
        const isT = this.isType();
        return (
            <div style={{ margin: '0px' }}>
                {(isAlreadyAuth && isT === 'administrador') || (isAlreadyAuth && isT === 'superadministrador') ? (
                    <div style={{ margin: '0px' }}>
                        <NavPrincipal />
                        <NavAdmin></NavAdmin>
                        <Col md={10} style={{ backgroundColor: '#FAFAFC', height: '100%' }}>
                            <Row>
                                <BuscarCarrera callback={this.setCarreras} showTrue={this.showTrue} ></BuscarCarrera>
                                <ResultBusqueda hidden={this.state.hiddenbusqueda} newcarreras={this.state.carreras} showFalse={this.showFalse}></ResultBusqueda>
                                <ListaCarreras newcarreras={this.state.carreras} ></ListaCarreras>
                            </Row>

                        </Col>

                    </div>
                ) : (<Redirect to='/' />)}


            </div>
        );
    }
}