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
        this.getPreguntasByFactor = this.getPreguntasByFactor.bind(this);
        this.redirectGra = this.redirectGra.bind(this);
        //this.onChangeAction = this.onChangeAction.bind(this)

        this.state = {
            preguntas: [],
            resultados: [],
            
            factores:[],
            valor: false,
            factorTitle:'',
            initialCheck:false,
            i:0,
            redirectGra:false
        }

    }
    onChangeAction = ()=>{
        this.setState({
            initialCheck:true
        })
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
        axios.get(`https://api-rest-crudric.herokuapp.com/api/factores`)
            .then(res => {
                const factores = (res.data).factores                
                this.setState({
                    factores: factores,
                    factorTitle : factores[this.state.i].name,
                    //initialCheck:false
                })
                this.getPreguntasByFactor();                 
            })

    }

getPreguntasByFactor(){
    if(this.state.factorTitle){ 
        axios.get(`https://api-rest-crudric.herokuapp.com/api/preguntasFactor/${this.state.factorTitle}`)
        .then(res => {
            const preguntas = (res.data).pregunta
           //console.log(preguntas);
             this.setState({
                preguntas: preguntas,                
            })
        })        
    }else {
        console.log('no se a setedo')
    }
}

    //trae todas las preguntas de la base de datos 


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
                    this.setState({
                        resultados:[],
                        i:this.state.i+1                        
                        
                    })
                    //creamos una condicional para que despues de que se guarden las respuestas
                    //se verifique si hay mas preguntas por responder si no simplemente se redirecciona 
                    //al agradecimiento de realizar la encuesta
                    if(this.state.i === this.state.factores.length){
                        this.setState({
                            redirectGra:true
                        })
                        console.log(this.state.redirectGra)
                    }else{
                        this.setState({
                            factorTitle:this.state.factores[this.state.i].name,
                        })
                        this.getPreguntasByFactor();
                    }                               
                })                
        })        
    }

   //este metodo se encarga de redireccionarnos a la vista de agradecimiento
   //lo hace una ves que el estado redirectGra sea verdadero,mientras no.
    redirectGra = () => {       
        if (this.state.redirectGra === true) {
            return <Redirect to='/endup' />
        }
    }

    render() {
        const isAlreadyAuth = this.isAuth();
        const isT = this.isType();

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
                            //estado inical de los checkbox necesario para volver a resetear los checkbox despues
                            //de guardar las respuestas
                            initialCheck = {this.state.initialCheck}

                            //titulo o nombre del factor actual
                            factorTitle={this.state.factorTitle}
                            //onchange checkbox
                            onChangeAction={this.onChangeAction}
                            //redireccionador a agradeciminento
                            gracias = {this.redirectGra}
                        />


                    </div>
                ) : (<Redirect to='/' />)}
            </div>

        )
    }
}