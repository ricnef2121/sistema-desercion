import React, { Component } from 'react';
import {
    Modal, Form, FormControl, FormGroup, ControlLabel, Button,
    InputGroup, DropdownButton, MenuItem
} from 'react-bootstrap'

export default class ModalAdd extends Component {
    render() {
        const factores = this.props.factores.map((factor,i) => {
            return  <MenuItem key={i} eventKey={factor.name}
            //onSelectedValue={this.props.sourceSelected(factor._id)}
             >
            {factor.name}</MenuItem>})

        return (
            <div>
                <Modal style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} show={this.props.stateshow} onHide={this.props.onHide} >
                    <Form onSubmit={this.props.addPregunta} >
                        <Modal.Header style={{ backgroundColor: '#FAFAFC' }} closeButton>
                         <Modal.Title>Agregar Pregunta</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <FormGroup> 
                                <InputGroup>
                                    <FormControl type="text"  defaultValue={this.props.source} />
                                    <DropdownButton
                                        componentClass={InputGroup.Button}
                                        id="dropdown"
                                        title="Factor"
                                        ///placeholder="select"
                                        onSelect={this.props.sourceSelected}
                                        //value="select"                                                                            
                                    >                                        
                                        {factores}
                                    </DropdownButton>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Nombre</ControlLabel>
                                <FormControl
                                    type="text" id="name" name="name"
                                    placeholder="Introduce una nueva pregunta"
                                ></FormControl>
                            </FormGroup>
                        </Modal.Body>
                        <Modal.Footer
                            style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                            }}>
                            <Button style={{ borderRadius: '3em', width: '130px', backgroundColor: '#F5F6FA', borderColor: 'transparent', fontWeight: 'bold', color: '#707070' }} onClick={this.props.onHide}>Cancelar</Button>
                            <Button style={{ borderRadius: '3em', width: '130px', backgroundColor: '#44B91A', color: 'white', fontWeight: 'bold' }} type="submit" >Agregar</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </div>
        )
    }
}