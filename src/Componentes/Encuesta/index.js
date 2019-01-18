import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios';
//Componente
import EncuestaForm from './Encuesta'


export default class Encuesta extends Component {
    constructor(props) {
        super(props);

        this.isAuth = this.isAuth.bind(this);
        this.isType = this.isType.bind(this);
        this.addDataGeneral = this.addDataGeneral.bind(this);
        this.isUni = this.isUni.bind(this);
        this.sourceSelected = this.sourceSelected.bind(this);

        //hiddenFormularios
        this.handleDatosGene = this.handleDatosGene.bind(this);

        this.state={
            edadSelected:[],
            itemFactor:'',
            hiddenDatosGene:false,
            hiddenDireccionLoc:true,
            hiddenDireccionFor:true,
            hiddenDatosAca:true
        }
       
    }

/**
 * modifica el valor de state.hiddenDatosGene; pasandolo a false,
 * de esta manera oculta el componente Datos generales, y a la vez
 * cambia el valor de state.hiddenDireccionLoc; pasandolo a true,
 * de esta manera se vuelve visible el formulario de DireccionLocal
 */
handleDatosGene(){
    this.setState({ 
        hiddenDatosGene:true,
        hiddenDireccionLoc:false
     });
}


//selecciona el valor del item sellecionado de la lista de edades
//y lo setea en state.edadSelected
    sourceSelected = ( eventkey, event) => {
        this.setState({
          edadSelected: [eventkey],
          //itemFactor: [eventkey]       
          });
        }
    
 //obtiene el valor del token que ha iniciado sesion y lo devuelve
    isAuth() {
        //const t = localStorage.getItem('token');
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

    //inserta los datos generales y actualiza la informacion del usuario
    //agregando mas informacion al mismo
    addDataGeneral = e => {
        

        e.preventDefault();
        //se divide en un arreglo de dos parte el  nombre completo
        //para poder guardar el primer y segundo nombr epor separado
        const NombreCompleto = e.target.Nombre.value;
        const divirNombre = NombreCompleto.split(" ",2)
       // console.log(divirNombre[0])

       const ApellidoCompleto = e.target.Apellidos.value;
       const divirApellido = ApellidoCompleto.split(" ",2)

        const p_Nombre = divirNombre[0];        
        const s_Nombre = divirNombre[1];
        const a_Paterno = divirApellido[0];
        const a_Materno = divirApellido[1];
        const edad = e.target.edad.value;
        const telefono = e.target.Telefono.value;
        const sexo = e.target.radioSexo.value;
        const residente = e.target.radioResidente.value;

        const datos = {
            p_Nombre: p_Nombre,
            s_Nombre:s_Nombre,
            a_Paterno: a_Paterno,
            a_Materno:a_Materno,
            edad: edad,
            telefono: telefono,
            sexo: sexo,
            residente: residente
        };

        axios.put(`https://api-rest-crudric.herokuapp.com/api/user/${this.props.location.state.id}`, datos)
            .then(res => {
                console.log(res.data);
                this.handleDatosGene();
            })
            .catch(err => {
                console.log(err)
            })
    }
   
    render() {
       // console.log('encuesta',this.props.location.state.id)
        const isAlreadyAuth = this.isAuth();
        const isT = this.isType();
        
        return (
            <div style={{ margin: '0px' }}>
                {(isAlreadyAuth && isT === 'estudiante') || (isAlreadyAuth && isT === 'administrador') ? (
                    <div style={{ margin: 0 }}>                    
                        <EncuestaForm 
                        //estados de hidden sobre los formularios
                        hiddenDatosGene={this.state.hiddenDatosGene} hiddenDireccionLoc={this.state.hiddenDireccionLoc}
                        
                        addDataGeneral={this.addDataGeneral}
                        sourceSelected={this.sourceSelected}
                        source={this.state.edadSelected}
                        ></EncuestaForm>
                        
                        
                    </div>
                ) : (<Redirect to='/' />)}
            </div>


        );
    }
}