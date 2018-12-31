import React, {Component} from 'react';
import { Col, Row } from 'react-bootstrap';
//Componentes
import NavPrincipal from '../../reutilizables/NavPrincipal';
import NavAdmin from '../../reutilizables/NavAdmin';
import ListaPreguntas from './ListaPreguntas';
import BuscarPregunta from './BuscarPregunta';

export default class Cuestionarios extends Component{
    render(){
        return(
            <div style={{ margin: '0px'}}>
                <NavPrincipal />
                <NavAdmin></NavAdmin>
                <Col md={10} style={{ backgroundColor: '#FAFAFC', height: '100%' }}>
                    <Row>
                    <BuscarPregunta></BuscarPregunta>
                    <ListaPreguntas></ListaPreguntas>
                    </Row>
                </Col>
            </div>
        );
    }
}