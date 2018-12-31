import React, { Component } from 'react';
import Logo from '../reutilizables/Logo'
import SingUpForm from './SignUpForm'
export default class SingUp extends Component {
    render(){
        return(
            <div>
                <Logo></Logo>
                <SingUpForm></SingUpForm>
            </div>
        );
    }
}