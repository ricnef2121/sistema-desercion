import React, { Component } from 'react';
import { Col, Navbar, NavItem,Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default class NavAdmin extends Component {
    render() {
        return (//bsStyle="pills" stacked activeKey={1}
            <div>
                <Col md={2} style={{ margin: '0px', padding: '0px' }}>
                    <Navbar.Form style={{listStyle:'none',margin:'0px',padding:'0px'}} >
                    <Navbar style={{ borderRadius: '0px 0px 0px 0px', backgroundColor: 'white', borderColor: 'white'}}>
                    <Navbar.Header >
                    <Navbar.Toggle />
                    </Navbar.Header>
                    
                    <Navbar.Collapse  >
                        <NavItem   
                        componentClass={Link} href="/Inicio" to="/Inicio"
                        //active={window.location.pathname === "/Inicio"}
                        style={{paddingTop:'10px'}}
                        //justifyContent: 'space-between'
                        //<a style={{verticalAlign:'sub',paddingLeft:'9px'}}>Inicio</a> 
                        >
                        <Image style={{marginRight:'9px',verticalAlign:'middle'}} src={require('./img/inicio.png')}/>
                          Inicio            
                        </NavItem>

                        <NavItem  
                        componentClass={Link} href="/Carreras" to="/Carreras"
                        //active={window.location.pathname === "/Carreras"}
                        style={{paddingTop:'10px',}}>
                        <Image style={{width:'2em',height:'3em',marginRight:'9px',verticalAlign:'middle'}} 
                        src={require('./img/carreras.png')}/>
                       Carreras        
                        </NavItem>

                        <NavItem  
                        componentClass={Link} href="/Cuestionarios" to="/Cuestionarios"
                        //active={window.location.pathname === "/Cuestionarios"}
                        style={{paddingTop:'10px'}}>
                        <Image 
                        style={{width:'2sem',height:'3em',marginRight:'9px',verticalAlign:'middle'}}
                        src={require('./img/cuestionarios.png')}/>
                        Cuestionarios        
                        </NavItem>

                        <NavItem  
                        componentClass={Link} href="/Graficas" to="/Graficas"
                        //active={window.location.pathname === "/Graficas"}
                        style={{paddingTop:'10px'}}>
                        <Image 
                        style={{marginRight:'9px',verticalAlign:'middle'}}
                        src={require('./img/graficas.png')}/>
                        Graficas especificas        
                        </NavItem>

                    </Navbar.Collapse>
                    </Navbar>
                    </Navbar.Form>
                </Col>
            </div>
        );
    }
}