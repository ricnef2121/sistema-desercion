import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
//Componentes
import NavPrincipal from '../../reutilizables/NavPrincipal';
import NavAdmin from '../../reutilizables/NavAdmin'

export default class Graficas extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.isAuth = this.isAuth.bind(this);
    this.isType = this.isType.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  //validar el tipo de usuario
  isAuth() {
    //const t = localStorage.getItem('token');
    const t = sessionStorage.getItem('token')
    return t && t.length > 10;
  }

  isType() {
    const type = sessionStorage.getItem('typeU');
    return type;
  }

  render() {
    const isAlreadyAuth = this.isAuth();
    const isT = this.isType();

    return (
      <div style={{ margin: '0px' }}>
        {(isAlreadyAuth && isT === 'administrador') || (isAlreadyAuth && isT === 'superadministrador') ? (
          <div style={{ margin: '0px' }}>
            <NavPrincipal />
            <NavAdmin></NavAdmin>
            <Col md={10} style={{ backgroundColor: '#FAFAFC', height: '100%' }}>
              <h1>asas</h1>
            </Col>


          </div>
        ) : (<Redirect to='/' />)}
      </div>
    );
  }
}

/**
 * {   (isAlreadyAuth && isT === 'administrador') || (isAlreadyAuth && isT === 'superadministrador') ? (
                        <div style={{ margin: '0px' }}>
                        <NavPrincipal />
                <NavAdmin></NavAdmin>
                <Col md={10} style={{ backgroundColor: '#FAFAFC', height: '100%' }}>
                     <h1>asas</h1>
                </Col>


                    </div>
                                    ) : (<Redirect to='/' />)}
 */