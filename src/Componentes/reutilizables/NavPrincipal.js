import React, { Component } from 'react';
import { Navbar, Col, Row, Image} from 'react-bootstrap';
/*
 <Col md={2} style={{backgroundColor:'gray'}}>
                <Image style={{}} src={require('./img/Layer_sep.png')} responsive />   
                </Col>
                <Col md={4} style={{backgroundColor:'pink'}}>
                <Image src={require('./img/Layer 0.png')} responsive />   
                </Col>
                <Col md={6} style={{color:'white'backgroundColor:'orange'}}>
               correo@correo.com
                </Col>

*/


export default class NavPrincipal extends Component {
    render() {
        return (
            <Navbar style={{ margin: '0px',/*height:'50p',*/borderColor: '#233D7B', borderRadius: '0px 0px 0px 0px', backgroundColor: '#233D7B'}}>
               
                <Row style={{display:'inline',alignItems: 'center',  justifyContent: 'center' ,padding:'0',margin:'0px' }}>
                    <Col xs={3} md={2}>
                    <Image style={{}} src={require('./img/Layer_sep.png')} responsive />   
                    </Col>
                    <Col xs={9} md={7} >
                    <Image src={require('./img/Layer 0.png')} responsive /> 
                    </Col>
                    <Col xs={12} md={3} style={{paddingTop:'15px',textAlign:'right',color:'white'}}>
                        correo@correo.com gravatar
                    </Col>
                    
                </Row>
                
            </Navbar>
        );
    }
}