import React, { Component } from 'react';
//import './animacion.css';
import './animacionburbujas.css';
//import './barras.css';
//import './burbujaslineal.css'

//import { Redirect } from 'react-router-dom';
export default class Animacion extends Component {
  /*  constructor(props) {
        super(props);
        this.isAuth = this.isAuth.bind(this);
        this.isType = this.isType.bind(this);
        this.isUni = this.isUni.bind(this);
        this.redirectAnimacion = this.redirectAnimacion.bind(this);

    }
    isAuth() {
        //const t = localStorage.getItem('token');
        const t = sessionStorage.getItem('token')
        return t && t.length > 10;
    }


    isType() {
        const type = sessionStorage.getItem('typeU');
        return type;
    }
    isUni() {
        const u = sessionStorage.getItem('uni');
        return u;
    }
    redirectAnimacion = () => {
        return <Redirect to='/Encuesta' />
    }
*/
    render() {
      /*  const isT = this.isType();
        const unique = this.isUni();
        const isAlreadyAuth = this.isAuth();*/
        return (
            <div hidden={this.props.hidden}>
                <div id="contenedor">
                    <div className="loader" id="loader">Loading...</div>
                </div>
                {/*}
                <div className="centrado">
                    <div className="spinner"></div>
                </div>

                <div id="spinner"></div>
                */}
                {/*} <div>
                {isAlreadyAuth && isT === 'estudiante' ? <Redirect to={{ pathname: '/Encuesta', state: { id: unique } }} /> :
                    isAlreadyAuth && isT === 'administrador' ? <Redirect to='/Inicio' /> :
                        (
                            <div style={{
                                display: 'flex', alignItems: 'center',
                                justifyContent: 'center', paddingTop: '15%'
                            }}>
                           
                                
                            </div>
                        )}
            </div>*/}
            </div>

        )
    }
}