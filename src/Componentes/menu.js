import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Navbar,Nav,NavItem } from 'react-bootstrap';

export default class Menu extends Component {
    render(){
        return(
            <Navbar>
                <Nav>
                    <NavItem componentClass={Link} href="/Inicio" to="/Inicio"
                    active={window.location.pathname === "/Inicio"}>
                        Inicio
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}