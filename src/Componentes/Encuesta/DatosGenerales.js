import React, { Component } from 'react';
import {
    Col, Form, FormGroup, ControlLabel, FormControl, Button, Panel, Row,
    InputGroup, DropdownButton, MenuItem, Radio
} from 'react-bootstrap';
export default class DatosGenerales extends Component {


    render() {
        const items = [];
        for (let number = 18; number <= 30; number++) {
            items.push(
                <MenuItem key={number * 2} eventKey={number}>{number}</MenuItem>
            );
        }

        return (
            <div style={{}} hidden={this.props.hiddenDatosGene}>
                <Col md={12} style={{
                    margin: '0px', padding: '0px',
                    //backgroundColor: 'red',
                    display: 'flex', height: '37.7pc', alignContent: 'center', justifyContent: 'center'
                }}>
                    <Col md={6} style={{ paddingTop: '70px', margin: '0px' }}>
                        <Panel >
                            <Panel.Heading style={{
                                backgroundColor: 'white',
                                paddingLeft: '20px'
                            }}>
                                <Panel.Title style={{ fontWeight: '900' }}
                                    componentClass="h3">
                                    Datos Generales</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body style={{ padding: 0 }}>

                                <Form
                                    onSubmit={this.props.addDataGeneral}
                                >
                                    <Row style={{ margin: '10px' }}>
                                        <Col md={6} >
                                            <FormGroup>
                                                <ControlLabel>Nombre(s)</ControlLabel>
                                                <FormControl
                                                    type="Nombre" id="Nombre" name="Nombre"
                                                    placeholder="Introduce tus nombre" />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6} >
                                            <FormGroup>
                                                <ControlLabel> Apellidos</ControlLabel>
                                                <FormControl
                                                    type="Apellidos" id="Apellidos"
                                                    name="Apellidos"
                                                    placeholder="Apellidos" />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6} >
                                            <FormGroup>
                                                <ControlLabel> Email</ControlLabel>
                                                <FormControl
                                                    type="email" id="email" name="email"
                                                    placeholder="email@email.com" />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6} >
                                            <FormGroup>
                                                <ControlLabel> Telefono</ControlLabel>
                                                <FormControl
                                                    type="Telefono" id="Telefono"
                                                    name="Telefono"
                                                    placeholder="(782)000000" />
                                            </FormGroup>
                                        </Col>
                                        <Col md={3} >
                                            <FormGroup>
                                                <InputGroup>
                                                    <FormControl type="text" name="edad" defaultValue={this.props.source} />
                                                    <DropdownButton
                                                        componentClass={InputGroup.Button}
                                                        id="dropdown"
                                                        title="Edad"
                                                        name="Edad"
                                                        onSelect={this.props.sourceSelected}
                                                    ///placeholder="select"
                                                    // onSelect={this.props.sourceSelected}
                                                    //value="select"                                                                            
                                                    >
                                                        {items}
                                                    </DropdownButton>
                                                </InputGroup>
                                            </FormGroup>
                                        </Col>

                                        <Col md={5} >
                                            <FormGroup>
                                                <ControlLabel>Sexo</ControlLabel>
                                                <Col md={12} style={{}}>
                                                    <Radio
                                                        // style={{background:'red'}}
                                                       
                                                        style={{borderColor:'red'}}
                                                        name="radioSexo" value="Hombre" inline
                                                    >
                                                        Masculino
                                                </Radio>{' '}
                                                    <Radio name="radioSexo" value="Mujer" inline>
                                                        Femenino
                                                </Radio>{' '}
                                                
                                                
                                                </Col>
                                            </FormGroup>
                                        </Col>
                                        <Col md={4} >
                                            <FormGroup style={{ displya: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <ControlLabel>Residente</ControlLabel>
                                                <Col md={12} >
                                                    <Radio name="radioResidente" value="Local" inline>
                                                        Local
                                                </Radio>{' '}
                                                    <Radio name="radioResidente" value="Foraneo" inline>
                                                        Foraneo
                                                </Radio>{' '}
                                                </Col>
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