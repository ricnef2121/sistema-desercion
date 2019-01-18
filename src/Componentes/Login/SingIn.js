import React, { Component } from 'react';
import {
  Form, Col, FormGroup,
  ControlLabel,
  FormControl, Button,
  Panel, Breadcrumb, Alert
} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class SigIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      hiddendiv: 'True',
      redirectReg: false,
      redirectEnc:false,
      loginMessage:null
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
    this.setRedirectEnc = this.setRedirectEnc.bind(this);
    this.registrarseForm = this.registrarseForm.bind(this);
    this.encuestaBody= this.encuestaBody.bind(this);
    this.isAuth = this.isAuth.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isType = this.isType.bind(this);
    this.isUni = this.isUni.bind(this);
    //this.clic = this.clic.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      email: e.target.value,
    });
  }

  onChange(e) {
    e.preventDefault();
    this.setState({
      password: e.target.value,
    });
  }


  clic = (e) => {
    e.preventDefault();
    console.log(this.state.email,
      this.state.password)
  }

  setRedirect = () => {
    this.setState({
      redirectReg: true
    })
  }
  setRedirectEnc = () => {
    this.setState({
      redirectEnc: true
    })
  }


  registrarseForm = () => {
    if (this.state.redirectReg) {
      return <Redirect to='/SingUp' />
    }
  }

  encuestaBody = () => {
    if (this.state.redirectEnc) {
      return <Redirect to='/Encuesta' />
    }
  }

  getValidationEmail() {
    const length = this.state.email.length;
    if (length > 7) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  getValidationPassword() {
    const long = this.state.password.length;
    if (long >= 8) return 'success';
    else if (long > 5) return 'warning';
    else if (long > 0) return 'error';
    return null;
  }




  handleSubmit = event => {
    event.preventDefault();
    if(this.state.email.length >= 7 && this.state.password.length >= 8 ){
      const user = {
        email: this.state.email,
        password: this.state.password
      };
      event.target.email.value = "";
      event.target.password.value = "";
      console.log(user);
      axios.post(`https://api-rest-crudric.herokuapp.com/api/signin`, user)
        .then(
          res => {
            //console.log('signin',res.data.id);
            const token = res.data.token;
            const typeU = res.data.user;
            const uni = res.data.id
           sessionStorage.setItem('token',token);
           sessionStorage.setItem('typeU',typeU);
           sessionStorage.setItem('uni',uni)           
            this.setRedirectEnc()           
          }
        )
        .catch(error => {
         //console.log(error.request.responseText);
         return  this.setState(this.setErrorMsg('Usuario o Password incorrectos'))
        })
    }else{
      console.log("error");
    }
    
  }


  setErrorMsg(err){
    return {loginMessage: err}
  }
 
  isAuth() {
    //const t = localStorage.getItem('token');
    const t = sessionStorage.getItem('token')
    return t && t.length > 10;
  }

  
  isType(){
    const type = sessionStorage.getItem('typeU');
    return type;
  }
  isUni(){
    const u = sessionStorage.getItem('uni');
    return u;
  }




  render() {    
    const isT = this.isType();
   // const n = 2;
   /* if(isT === 'estudiante'){
      console.log('eres estudiante')
    }if(isT=== 'administrador'){
      console.log('eres administrador')
    }*/
    /*
    isT === 'estudiante' && n === 1 ? console.log('eres estudiante 1'):
    isT === 'estudiante' ? console.log('eres estudiante nadamas'):
    isT === 'administrador' ? console.log('eres admnistrador') : console.log()
    */

    const unique = this.isUni();
    const isAlreadyAuth = this.isAuth();
   // const isAlreadyType = this.isType();
    return (   
       //<Redirect to='/Inicio' />
     // <div>
      //2 { redirectRoute ? <Redirect to={from} /> : (
        <div>
        { isAlreadyAuth && isT === 'estudiante' ?  <Redirect to={{pathname:'/Encuesta',state:{id:unique}}} /> : 
          isAlreadyAuth && isT === 'administrador' ? <Redirect to='/Inicio' /> :
        (
          <Col md={5} style={{ margin: 0, backgroundColor: '#233D7B', height: '41.08pc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Col sm={8} >
              <Panel >
                <Panel.Heading style={{ backgroundColor: 'white', paddingLeft: '50px' }}>
                  <Panel.Title style={{ fontWeight: 'bold' }} componentClass="h3">Autenticación</Panel.Title>
                </Panel.Heading>
                <Panel.Body style={{ padding: 0 }}>

                  <Form horizontal onSubmit={this.handleSubmit}>

                    <FormGroup
                      validationState={this.state.loginMessage ? 'error' : this.getValidationEmail()}                    
                      style={{ paddingTop: '10px', paddingLeft: '50px', 
                      paddingRight: '50px' }}>

                      <Col sm={12} >
                        <ControlLabel> Email</ControlLabel>
                        <FormControl
                          type="email"
                          email={this.state.email}
                          onChange={this.handleChange}
                          id="email" name="email" placeholder="email@email.com" />
                        <FormControl.Feedback id="email" />
                        <div hidden={this.state.hiddendiv}>estado oculto</div>
                      </Col>
                    </FormGroup>

                    <FormGroup
                      validationState={this.state.loginMessage ? 'error' : this.getValidationPassword()}
                      style={{ paddingTop: '4px', paddingLeft: '50px', paddingRight: '50px' }}>
                      <Col sm={12}>
                        <ControlLabel> Contraseña</ControlLabel>
                        <FormControl
                          password={this.state.password}
                          type="password"
                          onChange={this.onChange}
                          id="password" name="password"
                          placeholder="contraseña" />
                        <FormControl.Feedback id="password" />
                      </Col>
                      {
                      this.state.loginMessage && 
                      <Alert bsStyle="warning">
                      <strong>{this.state.loginMessage}</strong> Verifique su informacion.</Alert>
                      /*
                      <ControlLabel className="error"
                      style={{ paddingTop: '4px', paddingLeft: '20px' }}
                      > 
                      {this.state.loginMessage} 
                      </ControlLabel>
                      */
                      /*<div className="error">
                      Error: {this.state.loginMessage}
                      </div>*/
                    }
                    </FormGroup>

                    <div className='text-center' style={{ paddingTop: '10px' }}>
                    {this.encuestaBody()}
                      <Button style={{ backgroundColor: '#44B91A', color: 'white', fontWeight: '500', borderRadius: '3em' }}
                        type="submit">Iniciar sesion</Button>
                    </div>
                    <div >
                      {this.registrarseForm()}
                      <Breadcrumb style={{ backgroundColor: 'white', textAlign: 'right' }}>
                        <Breadcrumb.Item style={{ color: '#44B91A' }} onClick={this.setRedirect} >Registrarse</Breadcrumb.Item>
                      </Breadcrumb>
                    </div>                    
                  </Form>
                </Panel.Body>
              </Panel>
            </Col>

          </Col>
     /// ) }2
      ///</div>2
  ) }
  </div>
    );
  }
}
export default SigIn;