import React, { Component } from 'react';
import { Col, Navbar, Nav, NavItem,Image,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
/**
 * <Navbar style={{ borderRadius: '0px 0px 0px 0px', backgroundColor: 'white', borderColor: 'white' }}>

                        <Navbar.Toggle />

                        <Navbar.Collapse >
                            <NavItem componentClass={Link} href="/Inicio" to="/Inicio"
                                active={window.location.pathname === "/Inicio"}>
                                Inicio
                    </NavItem>
                        </Navbar.Collapse>
                    </Navbar>
 * 
 * 
 * 
 * 
 * 
 *  <Navbar >
                    <Navbar.Toggle />
                    <Navbar.Collapse >
                        <NavItem eventKey={1} href="/home">
                            NavItem 1 content
                        </NavItem>
                        <NavItem eventKey={2} title="Item">
                            NavItem 2 content
                        </NavItem>
                        <NavItem eventKey={3} disabled>
                            NavItem 3 content
                        </NavItem>
                    </ Navbar.Collapse >
                        
                    </Navbar >


 * 
 * 
 * 
 * 
 * 
 * 
 * <Navbar style={{ borderRadius: '0px 0px 0px 0px', backgroundColor: 'white', borderColor: 'white'}}>
                        <Navbar.Header style={{ margin: '0px',display: 'inline', alignItems: 'center', justifyContent: 'center' }}>
                            <Navbar.Brand style={{  }}>
                                <a href="#home">Brand</a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse >
                            <Navbar.Text>
                                Signed  <Navbar.Link href="#">Mark Otto</Navbar.Link>
                            </Navbar.Text>
                            <Navbar.Text>
                                s <Navbar.Link href="#">Mark Otto</Navbar.Link>
                            </Navbar.Text>                                  
                        </Navbar.Collapse>
                    </Navbar>
 */
export default class NavAdmin extends Component {
    render() {
        return (
            <div>
                <Col md={2} style={{ margin: '0px', padding: '0px' }}>
                    <Nav bsStyle="pills" stacked activeKey={1} >
                    <Navbar style={{ borderRadius: '0px 0px 0px 0px', backgroundColor: 'white', borderColor: 'white'}}>
                    <Navbar.Header>
                    <Navbar.Toggle />
                    </Navbar.Header>
                       
                    <Navbar.Collapse  >
                        <NavItem   
                        componentClass={Link} href="/Inicio" to="/Inicio"
                        active={window.location.pathname === "/Inicio"}
                        style={{paddingTop:'10px'}} href="/home">
                        <Image src={require('./img/inicio.png')}/>
                        <a style={{verticalAlign:'sub',paddingLeft:'9px'}}>Inicio</a>                    
                        </NavItem>

                        <NavItem  
                        componentClass={Link} href="/Carreras" to="/Carreras"
                        active={window.location.pathname === "/Carreras"}
                        style={{paddingTop:'10px'}}>
                        <Image style={{width:'2em',height:'3em'}} 
                        src={require('./img/carreras.png')}/>
                        <a style={{verticalAlign:'sub',paddingLeft:'9px'}}>Carreras</a>        
                        </NavItem>

                        <NavItem  
                        componentClass={Link} href="/Cuestionarios" to="/Cuestionarios"
                        active={window.location.pathname === "/Cuestionarios"}
                        style={{paddingTop:'10px'}}>
                        <Image 
                        style={{width:'2sem',height:'3em'}}
                        src={require('./img/cuestionarios.png')}/>
                        <a style={{verticalAlign:'sub',paddingLeft:'9px'}}>Cuestionarios</a>        
                        </NavItem>

                        <NavItem  
                        componentClass={Link} href="/Graficas" to="/Graficas"
                        active={window.location.pathname === "/Graficas"}
                        tyle={{paddingTop:'10px'}}>
                        <Image src={require('./img/graficas.png')}/>
                        <a style={{verticalAlign:'sub',paddingLeft:'9px'}}> Graficas especificas</a>        
                        </NavItem>

                    </Navbar.Collapse>
                    </Navbar>
                    </Nav>
                </Col>
            </div>
        );
    }
}