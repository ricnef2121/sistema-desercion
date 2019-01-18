import React, { Component } from 'react';
import {
    Col, Form, FormGroup, ControlLabel, FormControl, Button, Panel, Row,
    InputGroup, DropdownButton, MenuItem, Radio
} from 'react-bootstrap';
export default class DireccionLocal extends Component {


    render() {
        const items = [];
        for (let number = 18; number <= 30; number++) {
            items.push(
                <MenuItem key={number * 2} eventKey={number}>{number}</MenuItem>
            );
        }

        return (
            <div style={{}} hidden={this.props.hiddenDireccionLoc}>
                <Col md={12} style={{
                    margin: '0px', padding: '0px',
                    //backgroundColor: 'red',
                    display: 'flex', height: '37.7pc', alignContent: 'center', justifyContent: 'center'
                }}>
                    <Col md={8} style={{ paddingTop: '70px', margin: '0px' }}>
                        <Panel >
                            <Panel.Heading style={{
                                backgroundColor: 'white',
                                paddingLeft: '20px'
                            }}>
                                <Panel.Title style={{ fontWeight: '900' }}
                                    componentClass="h3">
                                    Direccion</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body style={{ padding: 0 }}>

                                <Form
                                   // onSubmit={this.props.addDataGeneral}
                                >
                                    <Row style={{ margin: '10px' }}>
                                        <Col md={4} >
                                            <FormGroup>
                                                <ControlLabel>Calle</ControlLabel>
                                                <FormControl
                                                    type="Nombre" id="Nombre" name="Nombre"
                                                    placeholder="Introduce tus nombre" />
                                            </FormGroup>
                                        </Col>
                                        <Col md={4} >
                                            <FormGroup>
                                                <ControlLabel>Colinda con calle izquierda</ControlLabel>
                                                <FormControl
                                                    type="Apellidos" id="Apellidos"
                                                    name="Apellidos"
                                                    placeholder="Apellidos" />
                                            </FormGroup>
                                        </Col>
                                        <Col md={4} >
                                            <FormGroup>
                                                <ControlLabel>Colinda con calle derecha</ControlLabel>
                                                <FormControl
                                                    type="Apellidos" id="Apellidos"
                                                    name="Apellidos"
                                                    placeholder="Apellidos" />
                                            </FormGroup>
                                        </Col>
                                        <Col md={4} >
                                            <FormGroup>
                                                <ControlLabel>Colinda con calle trasera</ControlLabel>
                                                <FormControl
                                                    type="Apellidos" id="Apellidos"
                                                    name="Apellidos"
                                                    placeholder="Apellidos" />
                                            </FormGroup>
                                        </Col>
                                        <Col md={1} >
                                            <FormGroup>
                                                <ControlLabel>Nº I</ControlLabel>
                                                <FormControl
                                                    type="Telefono" id="Telefono"
                                                    name="Telefono"
                                                    placeholder="11" 
                                                     />
                                            </FormGroup>
                                        </Col>
                                        <Col md={1} >
                                            <FormGroup>
                                                <ControlLabel>Nº E</ControlLabel>
                                                <FormControl
                                                    type="Telefono" id="Telefono"
                                                    name="Telefono"
                                                    placeholder="B" 
                                                     />
                                            </FormGroup>
                                        </Col>
                                        <Col md={2} >
                                            <FormGroup>
                                                <ControlLabel>C.P</ControlLabel>
                                                <FormControl
                                                    type="Telefono" id="Telefono"
                                                    name="Telefono"
                                                    placeholder="93000" />
                                            </FormGroup>
                                        </Col>
                                        <Col md={4} >
                                            <FormGroup>
                                                <ControlLabel>Colonia</ControlLabel>
                                                <FormControl
                                                    type="Telefono" id="Telefono"
                                                    name="Telefono"
                                                    placeholder="(782)000000" />
                                            </FormGroup>
                                        </Col>
                                        <Col md={4} >
                                            <FormGroup>
                                                <ControlLabel>Estado</ControlLabel>
                                                <FormControl
                                                    type="Nombre" id="Nombre" name="Nombre"
                                                    placeholder="Ej.Veracruz" />
                                            </FormGroup>
                                        </Col>

                                        <Col md={4} >
                                            <FormGroup>
                                                <ControlLabel>Telefono de casa</ControlLabel>
                                                <FormControl
                                                    type="Nombre" id="Nombre" name="Nombre"
                                                    placeholder="Introduce tus nombre" />
                                            </FormGroup>
                                        </Col>

                                        <Col md={12} style={{ paddingTop: '10px' }}>
                                            <FormGroup style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                                                <Button style={{
                                                    padding: '0px', borderRadius: '3em',
                                                    height: '25px', width: '110px', backgroundColor: '#44B91A', color: 'white', fontWeight: 'bold'
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