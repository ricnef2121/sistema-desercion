import React,{Component} from 'react';
import '../../index.css'
import SigIn from './SingIn';
import Logo from '../reutilizables/Logo';

class LoginCompleto extends Component {
    render(){
        return(
            <div>
                <Logo></Logo>
                <SigIn></SigIn>
            </div>
        );
    }
}

export default LoginCompleto;