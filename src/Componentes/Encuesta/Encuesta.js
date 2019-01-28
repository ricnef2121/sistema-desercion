import React, { Component } from 'react'; 
import './loader.css';
//import { Col,Row } from 'react-bootstrap';
//import { Col, Form, FormGroup, ControlLabel, FormControl, Button, Panel, Row, Checkbox, Radio } from 'react-bootstrap';

import DatosGenerales from './DatosGenerales';
import DireccionLocal from './DireccionLocal';
import DireccionForanea from './DireccionForanea';
import DatosAcademicos from './DatosAcademicos';

//import Indicador from './indicador';

//componentes
import NavPrincipal from '../reutilizables/NavPrincipal';
import { Row } from 'react-bootstrap';

export default class EncuestaForm extends Component {


    render() {
 
        return (
            <div style={{ margin: '0px', height: '100%', backgroundColor: '#FAFAFC' }}>
                <NavPrincipal e={this.props.e}/>
                <Row style={{ margin: '0px' }}>
                    
                        <div
                         hidden={this.props.hiddenAnimacion}
                          id="contenedor2">
                            <div className="loader2" id="loader2">Loading...</div>
                        </div>

                    


                    <DatosGenerales
                        e={this.props.e}
                        hiddenDatosGene={this.props.hiddenDatosGene}
                        source={this.props.source}
                        sourceSelected={this.props.sourceSelected}
                        addDataGeneral={this.props.addDataGeneral}
                    ></DatosGenerales>

                    <DireccionLocal
                    //metodos
                        hiddenDireccionLoc={this.props.hiddenDireccionLoc}
                        addDireccionLocal={this.props.addDireccionLocal}

                    //estados
                    title={this.props.title}
                    ></DireccionLocal>

                    <DireccionForanea
                    //estados
                    hiddenDireccionFor = {this.props.hiddenDireccionFor}

                    //metodos
                    addDireccionForaneo = {this.props.addDireccionForaneo}
                    ></DireccionForanea>

                    <DatosAcademicos
                    //formulario oculto
                    hiddenDireccionFor={this.props.hiddenDireccionFor}
                    hiddenDatosAca = {this.props.hiddenDatosAca}

                    carreras = {this.props.carreras}
                    sourceCarrera = {this.props.sourceCarrera} 
                    selectedCarrera = {this.props.selectedCarrera}
                    //seteo del turno seleccionado
                    sourceTurno = {this.props.sourceTurno}
                    selectedTurno = {this.props.selectedTurno}
                    //seteo del tipo de baja seleccionado
                    sourceTbaja = {this.props.sourceTbaja}
                    selectedTbaja = {this.props.selectedTbaja}
                    //seteo de el semestre seleccionado
                    sourceSemestre = {this.props.sourceSemestre}
                    selectedSemestre = {this.props.selectedSemestre}
                    //put datos academicos
                    addDatosAcademicos = {this.props.addDatosAcademicos}
                    //redireccionamiento a survey
                    survey={this.props.survey}
                    ></DatosAcademicos>
                </Row>
            </div>
        );
    }
}
/*
let styles = {
    contenedor: {
        backgroundColor: 'red'
    },

}*/