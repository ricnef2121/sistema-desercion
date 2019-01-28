import React, {Component} from 'react';
import { Row } from 'react-bootstrap';

//componentes
import NavPrincipal from '../../reutilizables/NavPrincipal';
import Formulario from './formulario';
import Documen from './documentacion';

export default class Body extends Component {
    render(){
        return(
            <div style={{ margin: '0px', backgroundColor: '#FAFAFC', height: '41.08pc' }}>
            <NavPrincipal e={this.props.email}/>
            <Row style={{ margin: '0px' }}>
           
           <Formulario 
            preguntas = {this.props.preguntas}
            addRespuestas = {this.props.addRespuestas}
            handleClick={this.props.handleClick}
            
            //valor={this.props.valor}
            />
        
            {/*<Documen
            preguntas = {this.props.preguntas}
            />*/}
         
           
            </Row>
            </div>
        )
    }
}