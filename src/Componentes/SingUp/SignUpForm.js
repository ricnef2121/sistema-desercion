import React, { Component } from 'react';
import {
    Form, Col, FormGroup, ControlLabel, FormControl, Button, Panel
} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from "axios";
export default class SingUpForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            email: '',
            displayName: '',
            password: ''
        }
        this.login = this.login.bind(this);
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    login = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }

    handleChange = (event) => {
        this.setState({
            email: event.target.value,
            displayName: event.target.value,
            password: event.target.value
        });
    }


    handleSubmit = event => {
        event.preventDefault();

        const email = event.target.email.value;
        const displayName = event.target.displayName.value;
        const password = event.target.password.value;
        const users = {
            email: email,
            displayName: displayName,
            password: password
        };
        event.target.email.value = "";
        event.target.password.value = "";
        event.target.displayName.value = "";
        console.log(users);
        axios.post(`https://api-rest-crudric.herokuapp.com/api/signup`, users)
            .then(res => {
                
             console.log(res.data);

            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <Col md={5} style={{ margin: 0, backgroundColor: '#233D7B', height: '41.08pc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Col sm={8} >
                    <Panel >
                        <Panel.Heading style={{ backgroundColor: 'white', paddingLeft: '50px' }}>
                            <Panel.Title style={{ fontWeight: '900' }} componentClass="h3">Registro</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body style={{ padding: 0 }}>

                            <Form horizontal onSubmit={this.handleSubmit} >

                                <FormGroup
                                    style={{ paddingTop: '10px', paddingLeft: '40px', paddingRight: '40px' }}>
                                    <Col sm={14} >
                                        <ControlLabel> Email</ControlLabel>
                                        <FormControl
                                            type="email" id="email" name="email"
                                            placeholder="email@email.com" />
                                    </Col>
                                </FormGroup>

                                <FormGroup
                                    style={{ paddingTop: '4px', paddingLeft: '40px', paddingRight: '40px' }}>
                                    <Col sm={14}>
                                        <ControlLabel> Contraseña</ControlLabel>
                                        <FormControl
                                            type="password" id="password" name="password"
                                            placeholder="contraseña" />
                                    </Col>
                                </FormGroup>

                                <FormGroup
                                    style={{ paddingTop: '4px', paddingLeft: '40px', paddingRight: '40px' }}>
                                    <Col sm={14}>
                                        <ControlLabel> NickName</ControlLabel>
                                        <FormControl
                                            type="text" id="displayName" name="displayName"
                                            placeholder="Alias" />
                                    </Col>
                                </FormGroup>

                                <FormGroup style={{ display: 'inline', alignItems: 'center', justifyContent: 'center' }}>
                                    <Col sm={6} offset={3} style={{ textAlign: 'left' }}>
                                        {this.login()}
                                        <Button
                                            style={{ backgroundColor: '#F5F6FA', color: '#707070', borderColor: 'white', fontWeight: '500', borderRadius: '3em' }}

                                            onClick={this.setRedirect}
                                        >Cancelar</Button></Col>
                                    <Col sm={6} offset={3} style={{ textAlign: 'right' }}>

                                        <Button
                                            style={{ backgroundColor: '#44B91A', color: 'white', fontWeight: '500', borderRadius: '3em' }}
                                            type="submit">Enviar</Button>
                                    </Col>
                                </FormGroup>


                            </Form>
                        </Panel.Body>
                    </Panel>
                </Col>

            </Col>
        );
    }
}

