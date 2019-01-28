import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
//componentes
import Body from './Body';

export default class CuestionarioRes extends Component {
    constructor(props) {
        super(props);
        this.isAuth = this.isAuth.bind(this);
        this.isType = this.isType.bind(this);
        this.isUni = this.isUni.bind(this);
        this.addRespuestas = this.addRespuestas.bind(this);
        //this.handleClick = this.handleClick.bind(this);

        this.state = {
            preguntas: [],
            resultados: [],
            valor: false
        }

    }
   //inserta la pregunta y sus valores al arreglo de resultados
    handleClick = (data) => {
        const res = this.state.resultados;
        //Encontrar si un elemento existe en la matriz o no y actualizar la matriz
        //si el elemento no existe ,entonces lo crea o inserta
        if (res.indexOf(data) === -1) {
            //se agrega un nuevo elemento para indicar que enverdad se selecciono esta opcion
            data.response = true;
            res.push(data);
            console.log('resultados: ' + res);
            //si elemento ya existe no lo inserta pero lo elimina, esto con el fin de no duplicar elemntos dentro
            //de las respuestas
        } else if (res.indexOf(data) > -1) {
            console.warn(res.indexOf(data))
            console.log(data + ' ya existe dentro del arreglo');
            //delete res[res.indexOf(data)]
            //como ya existe lo elimina del arreglo de resultados
            res.splice(res.indexOf(data), 1);
        }

    }


    //trae todas las preguntas de la base de datos
    componentDidMount() {
        axios.get(`https://api-rest-crudric.herokuapp.com/api/preguntas`)
            .then(res => {
                const preguntas = (res.data).preguntas
                // console.log(preguntas);
                this.setState({
                    preguntas: preguntas
                })
            })
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
    //con este metodo obtenemos el id seteado anteriormente
    //en el signin
    isUni() {
        const u = sessionStorage.getItem('uni');
        return u;
    }

    //inserta una nueva respuesta por cada elemento de la matriz de resultados
    addRespuestas = (e) => {
        e.preventDefault();

        this.state.resultados.forEach(r => {
            const c = {
                pregunta: r.name,
                factor: r.factor,
                response:r.response
            }
            axios.put(`https://api-rest-crudric.herokuapp.com/api/userRes/${this.props.location.state.id}`, c)
                .then(res => {
                    const carreras = (res.data);
                    console.log(carreras);

                })
        })

    }

    render() {
        const isAlreadyAuth = this.isAuth();
        const isT = this.isType();
        //console.log(this.state.valor);
        console.log('res', this.state.resultados)
        //console.log()
        return (
            <div style={{ margin: '0px' }}>
                {(isAlreadyAuth && isT === 'estudiante') || (isAlreadyAuth && isT === 'administrador') ? (
                    <div style={{ margin: 0 }}>

                        <Body
                            //pasamos el objeto preguntas que contiene los datos 
                            //recuperados por la cnsulta del componentdidmount
                            preguntas={this.state.preguntas}
                            email = {this.props.location.state.e} 
                            addRespuestas={this.addRespuestas}
                            handleClick={this.handleClick}
                        // valor={this.state.valor}
                        />


                    </div>
                ) : (<Redirect to='/' />)}
            </div>

        )
    }
}