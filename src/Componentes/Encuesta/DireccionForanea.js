import React, { Component } from 'react';
import {
    Col, Form, FormGroup, ControlLabel, FormControl, Button, Panel, Row, MenuItem,
} from 'react-bootstrap';
export default class DireccionForanea extends Component {


    render() {
        const items = [];
        for (let number = 18; number <= 30; number++) {
            items.push(
                <MenuItem key={number * 2} eventKey={number}>{number}</MenuItem>
            );
        }

        return (
            <div style={{}} 
            hidden={this.props.hiddenDireccionFor}
            >
                <Col md={12} style={{
                    margin: '0px', padding: '0px',
                    //backgroundColor: 'red',
                    display: 'flex', height: '37.7pc', alignContent: 'center', justifyContent: 'center'
                }}>
                    <Col xs={12} md={8} style={{ paddingTop: '70px', margin: '0px' }}>
                        <Panel >
                            <Panel.Heading style={{
                                backgroundColor: 'white',
                                paddingLeft: '20px'
                            }}>
                                <Panel.Title style={{ fontWeight: '900' }}
                                    componentClass="h3">
                                    Direccion Foranea{this.props.title}</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body style={{ padding: 0 }}>

                                <Form
                                onSubmit={this.props.addDireccionForaneo}
                                >
                                    <Row style={{ margin: '10px' }}>
                                        <Col md={4} >
                                            <FormGroup>
                                                <ControlLabel>Calle</ControlLabel>
                                                <FormControl
                                                    type="text" id="calle" name="calle"
                                                    placeholder="Calle sobre la cual esta tu casa" />
                                            </FormGroup>
                                        </Col>
                                        <Col md={4} >
                                            <FormGroup>
                                                <ControlLabel>Colinda con calle izquierda</ControlLabel>
                                                <FormControl
                                                    type="text" id="colinda_Cizquierda"
                                                    name="colinda_Cizquierda"
                                                    placeholder="Colinda con calle izquierda" />
                                            </FormGroup>
                                        </Col>
                                        <Col md={4} >
                                            <FormGroup>
                                                <ControlLabel>Colinda con calle derecha</ControlLabel>
                                                <FormControl
                                                    type="text" id="colinda_Cderecha"
                                                    name="colinda_Cderecha"
                                                    placeholder="Colinda con calle derecha" />
                                            </FormGroup>
                                        </Col>
                                        <Col md={4} >
                                            <FormGroup>
                                                <ControlLabel>Colinda con calle trasera</ControlLabel>
                                                <FormControl
                                                    type="text" id="colinda_Ctrasera"
                                                    name="colinda_Ctrasera"
                                                    placeholder="Colinda con calle trasera" />
                                            </FormGroup>
                                        </Col>
                                        <Col md={1} >
                                            <FormGroup>
                                                <ControlLabel>Nº I</ControlLabel>
                                                <FormControl
                                                    type="text" id="n_Interior"
                                                    name="n_Interior"
                                                    placeholder="11" 
                                                     />
                                            </FormGroup>
                                        </Col>
                                        <Col md={1} >
                                            <FormGroup>
                                                <ControlLabel>Nº E</ControlLabel>
                                                <FormControl
                                                    type="text" id="n_Exterior"
                                                    name="n_Exterior"
                                                    placeholder="B" 
                                                     />
                                            </FormGroup>
                                        </Col>
                                        <Col md={2} >
                                            <FormGroup>
                                                <ControlLabel>C.P</ControlLabel>
                                                <FormControl
                                                    type="text" id="cp"
                                                    name="cp"
                                                    placeholder="93000" />
                                            </FormGroup>
                                        </Col>
                                        <Col md={4} >
                                            <FormGroup> 
                                                <ControlLabel>Municipio</ControlLabel>
                                                <FormControl
                                                    type="text" id="colonia"
                                                    name="colonia"
                                                    placeholder="Colonia" />
                                            </FormGroup>
                                        </Col>
                                        <Col md={4} >
                                            <FormGroup>
                                                <ControlLabel>Estado</ControlLabel>
                                                <FormControl
                                                    type="text" id="estado" name="estado"
                                                    placeholder="Ej.Veracruz" />
                                            </FormGroup>
                                        </Col>

                                        <Col md={4} >
                                            <FormGroup>
                                                <ControlLabel>Telefono de casa</ControlLabel>
                                                <FormControl
                                                    type="text" id="t_Casa" name="t_Casa"
                                                    placeholder="(782) 000 00 00" />
                                            </FormGroup>
                                        </Col>

                                        <Col md={12} style={{ paddingTop: '10px' }}>
                                            <FormGroup style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                                                <Button style={{
                                                    padding: '0px', borderRadius: '3em',
                                                    height: '25px', width: '110px', 
                                                    backgroundColor: '#44B91A',
                                                    color: 'white', fontWeight: 'bold'
                                                }}
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