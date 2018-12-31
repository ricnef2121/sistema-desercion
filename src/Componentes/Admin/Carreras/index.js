import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
//Componentes
import NavPrincipal from '../../reutilizables/NavPrincipal';
import NavAdmin from '../../reutilizables/NavAdmin';
import ListaCarreras from './ListaCarreras';
import BuscarCarrera from "./BuscarCarrera";

export default class Carreras extends Component {
    render() {
        return (
            <div style={{ margin: '0px' }}>
                <NavPrincipal />
                <NavAdmin></NavAdmin>
                <Col md={10} style={{ backgroundColor: '#FAFAFC', height: '100%' }}>
                    <Row>
                        <BuscarCarrera></BuscarCarrera>
                        <ListaCarreras></ListaCarreras>
                    </Row>

                </Col>
            </div>
        );
    }
} 