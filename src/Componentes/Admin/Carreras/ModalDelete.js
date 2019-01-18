import React, { Component } from 'react';
import { Modal, Form, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import axios from 'axios';

export default class ModalDelete extends Component {
    constructor(props) {
        super(props);
        //this.onChangeName= this.onChangeName.bind(this);
        this.onSubmit= this.onSubmit.bind(this); 

        this.state = {
            name: '',
            id: '',

        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            name: nextProps.itemName,
            id: nextProps.itemId,

        });
    }

    onSubmit(e) {
        e.preventDefault();       
        axios.delete(`https://api-rest-crudric.herokuapp.com/api/carreras/${this.state.id}`)
            .then(res => {
               // console.log(res.data);
                this.props.onHide3();                  
                this.props.onload();
                this.props.showFalse();
               // this.props.onload();
            })
            .catch(err=> {
                console.log(err);
            })
       
      }
    render() {
        return (
            <div>
                <Modal style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} show={this.props.show3} onHide={this.props.onHide3}>
                    <Form onSubmit={this.onSubmit} >
                        <Modal.Header style={{ backgroundColor: '#FF6565',color:'white' }} closeButton>
                            <Modal.Title>Esta seguro de querer
                                         eliminar el siguiente
                                        registro:
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>


                            <FormGroup style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <ControlLabel>{this.state.name}</ControlLabel>
                                
                            </FormGroup>


                        </Modal.Body>
                        <Modal.Footer
                            style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                            }}>
                            <Button style={{ borderRadius: '3em', width: '130px', backgroundColor: '#F5F6FA', borderColor: 'transparent', fontWeight: 'bold', color: '#707070' }} onClick={this.props.onHide3}>Cancelar</Button>
                            <Button style={{ borderRadius: '3em', width: '130px', backgroundColor: '#44B91A', color: 'white', fontWeight: 'bold' }} type="submit" >Si</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </div>
        );
    }
}