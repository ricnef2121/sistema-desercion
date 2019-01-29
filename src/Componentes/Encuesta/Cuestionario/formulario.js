import React, { Component } from 'react';
import {
    Col, Form, FormGroup, ControlLabel, Button, Panel, Row,
    // Radio, Checkbox
} from 'react-bootstrap';


export default class DatosAcademicos extends Component {



    render() {


        const preguntas = this.props.preguntas.map((pregunta) => {
            return <Col md={6} key={pregunta._id} >
                <Col md={10} style={{ paddingTop: '5px', marginBottom: '0px',paddingBottom:'1px'}}>
                    <FormGroup>
                        <ControlLabel >{pregunta.name}</ControlLabel>
                    </FormGroup>
                </Col>
                <Col md={2} style={{ margin: '0px',paddingTop:'10px', paddingBottom: '0px' }}>

                    <input type="checkbox" name={pregunta.name} 
                        value={pregunta.id} 
                        //defaultChecked={this.props.initialCheck}
                        checked={this.props.initialCheck[pregunta.id]}
                        onChange={this.props.onChangeAction.bind(this)}
                        onClick={this.props.handleClick.bind(null, pregunta)} />
                    
                </Col>
            </Col>
        })

        return (
            <div>{this.props.gracias()}
                <Col md={12} style={styles.colPrincipal}>
                    <Col xs={12} md={6} style={{ paddingTop: '70px', margin: '0px' }}>
                        <Panel >
                            <Panel.Heading style={styles.panelHeading}>
                                <Panel.Title style={styles.panelTitle} componentClass="h3">
                                    Factor {this.props.factorTitle}
                                </Panel.Title>
                                <div style={styles.leyenda}>
                                    ¿Cuál o cuáles de los siguientes factores influyeron en su decisión
                                    de abandonar la carrera? Selecciona todos los que creas necesarios.
                                    </div>
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
    leyenda: {
        // fontWeight: 'bold',
        paddingTop: '5px',
        fontSize: '1.2em',
        textAlign: 'justify',
        fontWeight: '700',
    },
    panelTitle: {
        fontWeight: '800',
        fontFamily: 'Gill Sans MT',
        fontSize: '2.2em'
    },
    formButtonSiguiente: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    buttonSiguiente: {
        padding: '0px',
        borderRadius: '3em',
        height: '25px', 
        width: '110px',
        backgroundColor: '#44B91A',
        color: 'white', 
        fontWeight: 'bold'
    },

}