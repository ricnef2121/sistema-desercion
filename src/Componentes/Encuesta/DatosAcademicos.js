import React, { Component } from 'react';
import {
    Col, Form, FormGroup, ControlLabel, FormControl, Button, Panel, Row,
    InputGroup, DropdownButton, MenuItem
} from 'react-bootstrap';
//import DatePicker from 'react-datepicker';
//import 'react-datepicker/dist/react-datepicker.css';
export default class DatosAcademicos extends Component {


    render() {

        const carreras = this.props.carreras.map((carrera, i) => {
            return <MenuItem key={i} eventKey={carrera.name}
            //onSelectedValue={this.props.sourceSelected(factor._id)}
            >
                {carrera.name}</MenuItem>
        })


        const items = [];
        for (let number = 18; number <= 30; number++) {
            items.push(
                <MenuItem key={number * 2} eventKey={number}>{number}</MenuItem>
            );
        }

        return (
            <div            
            hidden={this.props.hiddenDatosAca}
            >{this.props.survey()}
                <Col md={12} style={{
                    margin: '0px', padding: '0px',
                    //backgroundColor: 'red',
                    display: 'flex', height: '37.7pc', alignContent: 'center', justifyContent: 'center'
                }}>
                    <Col xs={12} md={6} style={{ paddingTop: '70px', margin: '0px' }}>
                        <Panel >
                            <Panel.Heading style={{
                                backgroundColor: 'white',
                                paddingLeft: '20px'
                            }}>
                                <Panel.Title style={{ fontWeight: '900' }}
                                    componentClass="h3">
                                    Datos Academicos</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body style={{ padding: 0 }}>

                                <Form
                                onSubmit={this.props.addDatosAcademicos}
                                >
                                    <Row style={{ margin: '10px' }}>
                                        <Col md={6} >
                                            <FormGroup>
                                                <ControlLabel>Matricula</ControlLabel>
                                                <FormControl
                                                    type="text" id="Matricula" name="Matricula"
                                                    placeholder="Ejemplo: m120m120" />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}  >
                                            <FormGroup>
                                            <ControlLabel>Carrera</ControlLabel>
                                                <InputGroup>
                                                <DropdownButton
                                                        componentClass={InputGroup.Button}
                                                        id="carrera"
                                                        title=""
                                                        name="carrera"
                                                        onSelect={this.props.selectedCarrera}                                                                                                                         
                                                    >
                                                        {carreras}
                                                    </DropdownButton>
                                                    <FormControl type="text" name="carrera"
                                                        defaultValue={this.props.sourceCarrera}
                                                    />                                                    
                                                </InputGroup>

                                            </FormGroup>
                                        </Col>
                                        <Col md={6} >
                                        <FormGroup>
                                        <ControlLabel>Semestre</ControlLabel>
                                                <InputGroup>
                                                <DropdownButton
                                                        componentClass={InputGroup.Button}
                                                        id="semestre"
                                                        title=""
                                                        name="semestre"
                                                        onSelect={this.props.selectedSemestre}                                                                                                                                                                          
                                                    >
                                                        <MenuItem key="1" eventKey="1º Semestre">1º Semestre</MenuItem>
                                                        <MenuItem key="2" eventKey="2º Semestre">2º Semestre</MenuItem>
                                                        <MenuItem key="3" eventKey="3º Semestre">3º Semestre</MenuItem>
                                                        <MenuItem key="4" eventKey="4º Semestre">4º Semestre</MenuItem>
                                                        <MenuItem key="5" eventKey="5º Semestre">5º Semestre</MenuItem>
                                                        <MenuItem key="6" eventKey="6º Semestre">6º Semestre</MenuItem>
                                                        <MenuItem key="7" eventKey="7º Semestre">7º Semestre</MenuItem>
                                                        <MenuItem key="8" eventKey="8º Semestre">8º Semestre</MenuItem>
                                                        <MenuItem key="9" eventKey="9º Semestre">9º Semestre</MenuItem>
                                                        <MenuItem key="10" eventKey="10º Semestre">10º Semestre</MenuItem>
                                                        <MenuItem key="11" eventKey="11º Semestre">11º Semestre</MenuItem>
                                                        <MenuItem key="12" eventKey="12º Semestre">12º Semestre</MenuItem>
                                                    </DropdownButton>
                                                    <FormControl type="text" name="semestre"
                                                    defaultValue={this.props.sourceSemestre} 
                                                    />
                                                    
                                                </InputGroup>
                                            </FormGroup>
                                        </Col>
                                        
                                        <Col md={6} >
                                            <FormGroup>
                                                <ControlLabel>Fecha de Ingreso</ControlLabel>
                                                <FormControl
                                                    type="date" id="fecha" name="fecha"
                                                    />
                                            </FormGroup>
                                        </Col>
                                        

                                        <Col md={2} >
                                            <FormGroup>
                                                <ControlLabel>Grupo</ControlLabel>
                                                <FormControl
                                                    type="text" id="Grupo" name="Grupo"
                                                    placeholder="A" />
                                            </FormGroup>
                                        </Col>

                                        <Col md={4} >
                                            <FormGroup>
                                            <ControlLabel>Turno</ControlLabel>
                                                <InputGroup>
                                                <DropdownButton
                                                        componentClass={InputGroup.Button}
                                                        id="turno"
                                                        title=""
                                                        name="turno"
                                                        onSelect={this.props.selectedTurno}                                                                                                                                                                          
                                                    >
                                                        <MenuItem key="1" eventKey="Matutino">Matutino</MenuItem>
                                                        <MenuItem key="2" eventKey="Vespertino">Vespertino</MenuItem>
                                                    </DropdownButton>
                                                    <FormControl type="text" name="turno"
                                                    defaultValue={this.props.sourceTurno} 
                                                    />                                                    
                                                </InputGroup>
                                            </FormGroup>
                                        </Col>


                                        <Col md={6} >
                                            <FormGroup>
                                                <ControlLabel>Tipo de baja</ControlLabel>
                                                <InputGroup>
                                                <DropdownButton
                                                        componentClass={InputGroup.Button}
                                                        id="t_baja"
                                                        title=""
                                                        name="t_baja"                                                 
                                                        onSelect={this.props.selectedTbaja}                                                                                                                           
                                                    >
                                                        <MenuItem key="1" eventKey="Temporal">Temporal</MenuItem>
                                                        <MenuItem key="2" eventKey="Definitiva">Definitiva</MenuItem>
                                                        <MenuItem key="3" eventKey="Rendimiento escolar">Rendimiento escolar</MenuItem>
                                                        
                                                    </DropdownButton>
                                                    <FormControl type="text" name="t_baja"
                                                    defaultValue={this.props.sourceTbaja} 
                                                    />                                                    
                                                </InputGroup>
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

/**
 * <Col md={6}
                                        //style={{ paddingTop: '25px' }} 
                                        >
                                            <FormGroup>
                                                <ControlLabel>Fecha de ingreso</ControlLabel>
                                                <InputGroup>
                                                    <FormControl
                                                        style={{ backgroundColor: '#F5F6FA' }}
                                                        type="date"
                                                        // value="Submit"
                                                        name="fecha"
                                                        id="fecha"
                                                    />
                                                    <InputGroup.Button>
                                                        <Button
                                                            onClick={this.props.toggleCalendar}
                                                        >
                                                            {
                                                                this.props.isOpen && (
                                                                    <DatePicker
                                                                        selected={this.props.startDate}
                                                                        onChange={this.props.handleChange}
                                                                        withPortal
                                                                        inline />
                                                                )
                                                            }
                                                            <Image
                                                                style={{ width: '18px', margin: '0px', padding: '0px' }}
                                                                src={require('../reutilizables/img/Dropdown.png')}
                                                            /></Button>
                                                    </InputGroup.Button>
                                                </InputGroup>
                                            </FormGroup>
                                        </Col>

 */ 