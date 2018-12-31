import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
//Componentes
import NavPrincipal from '../../reutilizables/NavPrincipal';
import NavAdmin from '../../reutilizables/NavAdmin';
import Barra from './Barra'
import Dona from './Doughnut';
import DonaGenero from './DonaGenero';

export default class Inicio extends Component {
//style={{display:'inline',alignItems: 'center',justifyContent:'center',}}
    render() {
        return (
            <div style={{ margin: '0px'}}>
                <NavPrincipal />
                <NavAdmin></NavAdmin>
                <Col md={10} style={{backgroundColor:'#FAFAFC',height: '100%' }}>
                    <Row>
                        <Barra />
                        <Dona />
                        <DonaGenero />
                    </Row>
                </Col>

            </div>
        );
    }

}