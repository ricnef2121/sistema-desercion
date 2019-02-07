import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
//Componentes
import NavPrincipal from '../../reutilizables/NavPrincipal';
import NavAdmin from '../../reutilizables/NavAdmin'
import BarrasFactor from './Barras';
import Tabla from './Tabla';
import PieEdades from './PastelEdades';

export default class Graficas extends Component {
  constructor(props, context) {
    super(props, context);

    this.isAuth = this.isAuth.bind(this);
    this.isType = this.isType.bind(this);

    this.state = {
      groupFactors: [],
      groupSemestres:[],
      groupEdades:[]
    };
  }

  componentDidMount() {
    axios.get('https://api-rest-crudric.herokuapp.com/api/userResCount')
      .then((res) => {
        const groupFactors = res.data;
       // console.log('groupfactores',groupFactors)
        this.setState({
          groupFactors: groupFactors
        })
      })

      axios.get('https://api-rest-crudric.herokuapp.com/api/userSemCount')
      .then((res) => {
        const groupSemestres = res.data;
        console.log('groupSem',groupSemestres) 
        this.setState({
          groupSemestres: groupSemestres
        })
      })

      axios.get('https://api-rest-crudric.herokuapp.com/api/userCountEdad')
      .then((res)=>{
        const groupEdades = res.data;
       // console.log('groupedades',groupEdades)
        this.setState({
          groupEdades:groupEdades
        })
      })
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
              <Row>
                <BarrasFactor
                groupFactors={this.state.groupFactors}
               
                />
                <Tabla 
                groupFactors2={this.state.groupFactors}
                groupSemestres={this.state.groupSemestres}
                />
                <PieEdades 
                groupEdades = {this.state.groupEdades}
                />
              </Row>
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