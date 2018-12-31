import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
//Componentes
import NavPrincipal from '../../reutilizables/NavPrincipal';
import NavAdmin from '../../reutilizables/NavAdmin'

export default class Graficas extends Component {
    render() {
        return (
            <div style={{ margin: '0px'}}>
                <NavPrincipal />
                <NavAdmin></NavAdmin>
                <Col md={10} style={{ backgroundColor: '#FAFAFC', height: '100%' }}>
                    <h1>
                        Graficas especificas
                </h1>
                </Col>

            </div>
        );
    }
}