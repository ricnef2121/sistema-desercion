import React, { Component }  from 'react';
//import { Col,Row } from 'react-bootstrap';
//import { Col, Form, FormGroup, ControlLabel, FormControl, Button, Panel, Row, Checkbox, Radio } from 'react-bootstrap';

import DatosGenerales from './DatosGenerales';
import DireccionLocal from './DireccionLocal';
//import Indicador from './indicador';

//componentes
import NavPrincipal from '../reutilizables/NavPrincipal';
import { Row } from 'react-bootstrap';

export default class EncuestaForm extends Component { 
   
    render(){
        
        return(
            <div style={{margin:'0px',height:'100%',backgroundColor:'#FAFAFC'}}>
            <NavPrincipal/>
            <Row style={{margin:'0px'}}>   

            <DatosGenerales
            hiddenDatosGene={this.props.hiddenDatosGene}           
            source={this.props.source} 
            sourceSelected={this.props.sourceSelected}
            addDataGeneral={this.props.addDataGeneral}             
            ></DatosGenerales>
            
            <DireccionLocal
             hiddenDireccionLoc={this.props.hiddenDireccionLoc}
            ></DireccionLocal>
            </Row>          
            </div>
        );
    }
}