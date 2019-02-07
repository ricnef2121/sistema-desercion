import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

//componentes
import NavPrincipal from '../../reutilizables/NavPrincipal';

export default class Gracias extends Component {
    constructor(props) {
        super(props);
        this.isAuth = this.isAuth.bind(this);
        this.isType = this.isType.bind(this);
        this.isOut = this.isOut.bind(this);
        this.signOff = this.signOff.bind(this);
        this.state = {
            redirectLogin: false
        }
    }

    //obtiene el valor del token del usuario que ha iniciado sesion y lo devuelve    
    isAuth() {
        const t = sessionStorage.getItem('token')
        return t && t.length > 10;
    }
    //obtiene el valor de la variable tipo de usuario que ha iniciado sesion y lo devuelve
    isType() {
        const type = sessionStorage.getItem('typeU');
        return type;
    }
    isOut() {
        this.setState({
            redirectLogin: true
        })
        const tOut = sessionStorage.clear();
        return tOut;
    }
    //Mostrar un cuadro de alerta después de 3 segundos (3000 milisegundos):
    //setTimeout(function(){ alert("Hello"); }, 3000);

    //esta funcion sirve para que despues de 5 segundos se ejecute la funcion de isOut
    //la cual limpia los datos de sesion que se guardaron del usuario en el navegador
    //y a su vez setea a true el valor de redirectLogin para redireccionar al login nuevamente
    signOff() {
        setTimeout(() => {
            this.isOut();
        }, 4000);
    }

    render() {
        const isAlreadyAuth = this.isAuth();
        const isT = this.isType();

        return (
            <div style={{ margin: '0px' }}>
                {(isAlreadyAuth && isT === 'estudiante') || (isAlreadyAuth && isT === 'administrador') ? (
                    <div style={{ margin: 0 }}>
                        {this.signOff()}
                        <div style={{ margin: '0px', backgroundColor: '#FAFAFC', height: '41.08pc' }}>
                            {console.log(this.state.redirectLogin)}
                            <NavPrincipal
                            //e={this.props.email}
                            />
                            <Col xs={12} md={12} style={{
                                //backgroundColor: 'red',
                                display: 'flex', alignItems: 'center',
                                justifyContent: 'center'
                            }}>

                                <Col xs={12} md={6} style={{
                                    background: '#FFFFFF',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    marginTop: '100px', marginBottom: '100px', padding: '100px'
                                }}>

                                    <div style={{
                                        fontWeight: '800',
                                        textAlign: 'center',
                                        fontFamily: 'Gill Sans MT',
                                        fontSize: '2em'
                                    }}>
                                        Gracias por haber contestado nuestra encuesta.
                        </div>
                                </Col>

                            </Col>
                        </div>


                    </div>
                ) : (<Redirect to='/' />)}
            </div>

        )
    }
}
