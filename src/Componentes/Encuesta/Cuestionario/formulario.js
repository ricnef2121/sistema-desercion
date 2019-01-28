import React, { Component } from 'react';
import {
    Col, Form, FormGroup, ControlLabel, Button, Panel, Row, Radio
} from 'react-bootstrap';


export default class DatosAcademicos extends Component {
    
    
 
    render() {


        const preguntas = this.props.preguntas.map((pregunta, k) => {
            return <Col md={6} key={k} >
                <Col md={10} style={{ paddingTop: '10px', marginBottom: '0px' }}>
                    <FormGroup>
                        <ControlLabel >{pregunta.name}</ControlLabel>
                    </FormGroup>
                </Col>
                <Col md={2} style={{ margin: '0px', paddingBottom: '30px' }}>
                {/*
                  <Radio name={pregunta.name} defaultChecked={this.state.valor}
                  value={pregunta.id}
                  onClick={this.handleClick.bind(null, pregunta)}
                  >                    
                </Radio>*/}
            <input type="checkbox" name={pregunta.name} 
            value={pregunta.id} defaultChecked={false} 
            onClick={this.props.handleClick.bind(null, pregunta)} /> 
   
                 
                </Col>
            </Col>
        })

        return (
            <div>
                <Col md={12} style={styles.colPrincipal}>
                    <Col xs={12} md={6} style={{ paddingTop: '70px', margin: '0px' }}>
                        <Panel >
                            <Panel.Heading style={styles.panelHeading}>
                                <Panel.Title style={{ fontWeight: '900' }}
                                    componentClass="h3">
                                    Factores Personales
                                    </Panel.Title>
                            </Panel.Heading>
                            <Panel.Body style={{ padding: 0 }}>

                                <Form
                                    onSubmit={this.props.addRespuestas}
                                >
                                    <Row style={{ margin: '10px' }}>

                                        {preguntas}

                                        <Col md={12} style={{ paddingTop: '10px' }}>
                                            <FormGroup style={styles.formButtonSiguiente}>
                                                <Button style={styles.buttonSiguiente}
                                                    type="submit" >Siguiente</Button>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Form>
                            </Panel.Body>
                        </Panel>

                    </Col>








                </Col>
            </div>
        )
    }
}

const styles = {
    colPrincipal: {
        margin: '0px',
        padding: '0px',
        //backgroundColor: 'red',
        display: 'flex',
        height: '37.7pc',
        alignContent: 'center',
        justifyContent: 'center'

    },
    panelHeading: {
        backgroundColor: 'white',
        paddingLeft: '20px'
    },
    formButtonSiguiente: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    buttonSiguiente: {
        padding: '0px', borderRadius: '3em',
        height: '25px', width: '110px',
        backgroundColor: '#44B91A',
        color: 'white', fontWeight: 'bold'
    },

}