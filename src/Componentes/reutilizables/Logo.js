import React, { Component } from 'react';
import {Row,Col,Image} from 'react-bootstrap';

export default class Logo extends Component{
    render(){
        return(
            <Col md={7} style={{margin:0, backgroundColor: 'white',display: 'inline', alignItems: 'center', justifyContent: 'center' }}>
            <Row style={{backgroundColor:'white',display:'flex',alignItems: 'center', justifyContent: 'center'}}>
                <Col sm={12}  >
                <Image src={require('./img/logo-tn.png')} responsive />    
                </Col>
            </Row>
            <Row style={{backgroundColor:'white',display:'flex',alignItems: 'center', justifyContent: 'center'}}>
                <Col sm={4} offset={3}>
                <Image src={require('./img/sep.png')} responsive />   
                </Col>                    
            </Row>
            <Row style={{backgroundColor:'white',display:'flex',alignItems: 'center', justifyContent: 'center'}}>
                <Col sm={12} offset={3} >
                <Image src={require('./img/itspr.png')} responsive />
                </Col>
            </Row>
        </Col>
        );
    }
}