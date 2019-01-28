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
        this.addDireccionLocal = this.addDireccionLocal.bind(this);
        this.addDireccionForaneo = this.addDireccionForaneo.bind(this);
        this.isUni = this.isUni.bind(this);
        this.sourceSelected = this.sourceSelected.bind(this);
        this.getCarreras = this.getCarreras.bind();
        this.selectedCarrera = this.selectedCarrera.bind(this);
        this.selectedTurno = this.selectedTurno.bind(this);
        this.selectedTbaja = this.selectedTbaja.bind(this);
        this.selectedSemestre = this.selectedSemestre.bind(this);
        this.addDatosAcademicos = this.addDatosAcademicos.bind(this);
        this.handleAnimacionAca = this.handleAnimacionAca.bind(this);

        //hiddenFormularios
        this.handleDatosGene = this.handleDatosGene.bind(this);
        this.handleAnimacion = this.handleAnimacion.bind(this);
        this.handleAnimacionDire = this.handleAnimacionDire.bind(this);
        this.handleDireccionLoc = this.handleDireccionLoc.bind(this);
        this.handleAnimacionDireFor = this.handleAnimacionDireFor.bind(this);
        this.handleDireccionFor = this.handleDireccionFor.bind(this);

        //redirecciona a Survey
        this.redirectSurvey = this.redirectSurvey.bind(this);
        
        this.state = {
            edadSelected: [],
            itemFactor: '',
            carreras: [],
            sourceSelected: [],
            selectedCarrera: [],
            selectedTurno: [],
            selectedTbaja: [],
            selectedSemestre: [],

            hiddenDatosGene: false,
            hiddenDireccionLoc: true,
            hiddenDireccionFor: true,
            hiddenDatosAca: true,
            hiddenAnimacion: true,

            //propiedad con la que se valida si mostrar o no el formulario de 
            //direccion foranea
            residente: null,
            //propiedad que inicia vacia y cambia a Local dependiendo si el
            //usuario es residente Foraneo
            tituloForm: null,
            //propiedad para redireccionar si o no a Survey
            redirectSurvey:false



        }

    }



    /**
     * modifica el valor de state.hiddenAnimacion; pasandolo a false,
     * de esta manera vueleve visible el div de la animacion, y a la vez
     * cambia el valor de state.hiddenDatosGene; pasandolo a true,
     * de esta manera se vuelve invisible 
     */
    handleAnimacion() {
        this.setState({
            hiddenAnimacion: false,
            hiddenDatosGene: true,
            // hiddenDireccionLoc:false
        });
    }
    /**
     * modifica el valor de state.hiddenDatosGene; pasandolo a true,
     * de esta manera oculta el componente Datos generales, y a la vez
     * cambia el valor de state.hiddenDireccionLoc; pasandolo a false,
     * de esta manera se vuelve visible el formulario de DireccionLocal
     */
    handleDatosGene() {
        this.setState({
            hiddenAnimacion: true,
            hiddenDatosGene: true,
            hiddenDireccionLoc: false
        });
    }

    /**
     * modifica el valor de state.hiddenAnimacion; pasandolo a true,
     * de esta manera ocultando la animacion de loader, y a la vez
     * cambia el valor de state.hiddenDireccionFor; pasandolo a false,
     * de esta manera se vuelve visible el formulario de DireccionForanea
     */
    handleDireccionLoc() {
        if(this.state.residente === 'Foraneo'){
           return this.setState({
                hiddenAnimacion: true,
                hiddenDireccionFor: false
            });
        }else if(this.state.residente === 'Local'){
           return this.setState({
                hiddenAnimacion: true,
                hiddenDatosAca: false
            });
        }else{
            return null;
        }
    }
     /**
     * modifica el valor de state.hiddenAnimacion; pasandolo a true,
     * de esta manera ocultando la animacion de loader, y a la vez
     * cambia el valor de state.hiddenDireccionFor; pasandolo a false,
     * de esta manera se vuelve visible el formulario de DireccionForanea
     */
    handleDireccionFor() {
        this.setState({
            hiddenAnimacion: true,
            hiddenDatosAca: false
        });
    }


    /**
     * modifica el valor de state.hiddenAnimacion; pasandolo a false,
     * de esta manera vueleve visible el div de la animacion, y a la vez
     * cambia el valor de state.hiddenDireccionLoc pasandolo a true,
     * de esta manera se vuelve invisible 
     */
    handleAnimacionDire() {
        this.setState({
            hiddenAnimacion: false,
            hiddenDireccionLoc: true
        });
    }
    /**
     * modifica el valor de state.hiddenAnimacion; pasandolo a false,
     * de esta manera vueleve visible el div de la animacion, y a la vez
     * cambia el valor de state.hiddenDireccionFor pasandolo a true,
     * de esta manera se vuelve invisible 
     */
    handleAnimacionDireFor() {
        this.setState({
            hiddenAnimacion: false,
            hiddenDireccionFor: true
        });
    }
    
    //oculta el formulario de datos academicos
    //vuelve visible la animaciond e carga
    handleAnimacionAca() {
        this.setState({
            hiddenAnimacion: false,
            hiddenDatosAca: true,
            redirectSurvey:true
        });
    }

    //selecciona el valor del item sellecionado de la lista de edades
    //y lo setea en state.edadSelected
    sourceSelected = (eventkey, event) => {
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
        this.handleAnimacion();
        e.preventDefault();
        //se divide en un arreglo de dos parte el  nombre completo
        //para poder guardar el primer y segundo nombr epor separado
        const NombreCompleto = e.target.Nombre.value;
        const divirNombre = NombreCompleto.split(" ", 2)

        const ApellidoCompleto = e.target.Apellidos.value;
        const divirApellido = ApellidoCompleto.split(" ", 2)

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
            s_Nombre: s_Nombre,
            a_Paterno: a_Paterno,
            a_Materno: a_Materno,
            edad: edad,
            telefono: telefono,
            sexo: sexo,
            residente: residente
        };

        axios.put(`https://api-rest-crudric.herokuapp.com/api/user/${this.props.location.state.id}`, datos)
            .then(res => {
                console.log(res.data);
                this.setState({ residente: residente });
                this.showTitle();
                this.handleDatosGene();
                this.getCarreras();
            })
            .catch(err => {
                console.log(err)
            })
    }

    //muestra el titulo local si el usuario es un residente foraneo
    showTitle = () => {
        if (this.state.residente === 'Foraneo') {
            return this.setState({
                tituloForm: 'Local'
            });
        } else {
            return null;
        }
    }


    //inserta los datos sobre la direccion local del usuario, actualiza la
    // informacion del subdocumento Local
    //agregando mas informacion al usuario loggueado
    addDireccionLocal = e => {
        this.handleAnimacionDire();
        e.preventDefault();

        const calle = e.target.calle.value;
        const colinda_Cizquierda = e.target.colinda_Cizquierda.value;
        const colinda_Cderecha = e.target.colinda_Cderecha.value;
        const colinda_Ctrasera = e.target.colinda_Ctrasera.value;
        const n_Interior = e.target.n_Interior.value;
        const n_Exterior = e.target.n_Exterior.value;
        const cp = e.target.cp.value;
        const colonia = e.target.colonia.value;
        const estado = e.target.estado.value;
        const t_Casa = e.target.t_Casa.value;

        const datos = {
            calle: calle,
            colinda_Cizquierda: colinda_Cizquierda,
            colinda_Cderecha: colinda_Cderecha,
            colinda_Ctrasera: colinda_Ctrasera,
            n_Interior: n_Interior,
            n_Exterior: n_Exterior,
            cp: cp,
            colonia: colonia,
            estado: estado,
            t_Casa: t_Casa
        };
        axios.put(`https://api-rest-crudric.herokuapp.com/api/userLocal/${this.props.location.state.id}`, datos)
            .then(res => {
                console.log(res.data);
                this.handleDireccionLoc();
                //this.handleDatosGene();
            })
            .catch(err => {
                console.log(err)
            })
    }




    //inserta los datos sobre la direccion Foranea del usuario, actualiza la
    // informacion del subdocumento Foraneo
    //agregando mas informacion al usuario loggueado
    addDireccionForaneo = e => {
        this.handleAnimacionDireFor();
        e.preventDefault();

        const calle = e.target.calle.value;
        const colinda_Cizquierda = e.target.colinda_Cizquierda.value;
        const colinda_Cderecha = e.target.colinda_Cderecha.value;
        const colinda_Ctrasera = e.target.colinda_Ctrasera.value;
        const n_Interior = e.target.n_Interior.value;
        const n_Exterior = e.target.n_Exterior.value;
        const cp = e.target.cp.value;
        const colonia = e.target.colonia.value;
        const estado = e.target.estado.value;
        const t_Casa = e.target.t_Casa.value;

        const datos = {
            calle: calle,
            colinda_Cizquierda: colinda_Cizquierda,
            colinda_Cderecha: colinda_Cderecha,
            colinda_Ctrasera: colinda_Ctrasera,
            n_Interior: n_Interior,
            n_Exterior: n_Exterior,
            cp: cp,
            colonia: colonia,
            estado: estado,
            t_Casa: t_Casa
        };
        axios.put(`https://api-rest-crudric.herokuapp.com/api/userForaneo/${this.props.location.state.id}`, datos)
            .then(res => {
                console.log(res.data);
                this.handleDireccionFor();
            })
            .catch(err => {
                console.log(err)
            })
    }

    addDatosAcademicos = e => {
        this.handleAnimacionAca();
        e.preventDefault();
        const matricula = e.target.Matricula.value;
        const carrera = this.state.selectedCarrera;
        const semestre = this.state.selectedSemestre;
        const fecha_ingreso = e.target.fecha.value;
        const turno = this.state.selectedTurno;
        const grupo = e.target.Grupo.value;
        const t_baja = this.state.selectedTbaja;
        console.log(fecha_ingreso);
        const datos = {
            semestre: semestre,
            turno: turno,
            grupo: grupo,
            carrera: carrera,
            t_baja: t_baja,
            matricula: matricula,
            i_fecha: fecha_ingreso
        };

        axios.put(`https://api-rest-crudric.herokuapp.com/api/userAcademico/${this.props.location.state.id}`, datos)
            .then(res => {
                console.log(res.data);
                console.warn(this.state.redirectSurvey)
                
                //this.handleDireccionLoc();
                //this.handleDatosGene();
            })
            .catch(err => {
                console.log(err)
            })
    }

    //traeme de la base de datos todas las carreras, para rellenar los
    //items  del dropdown de carreras del formulario de datos academicos
    getCarreras = () => {
        axios.get('https://api-rest-crudric.herokuapp.com/api/carreras')
            .then(res => {
                //console.log(res.data.carreras)
                const carreras = res.data.carreras;
                this.setState({
                    carreras: carreras
                })
            })
    }

    //setea el estado de selectedCarrera selecaccionada en el dropdown de carrera
    selectedCarrera = (eventkey, event) => {
        this.setState({
            selectedCarrera: [eventkey]

        });
    }
    //setea el estado de selectedTurno selecaccionada en el dropdown de turno
    selectedTurno = (eventkey, event) => {
        this.setState({
            selectedTurno: [eventkey]

        });
    }
    //setea el estado de selectedTbaja selecaccionada en el dropdown de tipo de baja
    selectedTbaja = (eventkey, event) => {
        this.setState({
            selectedTbaja: [eventkey]

        });
    }
    //setea el estado de selectedSemestre con el valor seleccionado del dropdown de semestre
    selectedSemestre = (eventkey, event) => {
        this.setState({
            selectedSemestre: [eventkey]

        });
    }

    redirectSurvey = () => {
        //<Redirect to={{pathname:'/Encuesta',state:{id:unique,e:e}}}
        if (this.state.redirectSurvey === true) {
            return <Redirect to={{pathname:'/Survey',state:{id:this.props.location.state.id,e:this.props.location.state.e}}} />
        }
    }

    render() {
        //console.log('encuesta',this.props.location.state.id)
        const isAlreadyAuth = this.isAuth();
        const isT = this.isType();
        console.log(this.props.location.state.e)
        return (
            <div style={{ margin: '0px' }}>
                {(isAlreadyAuth && isT === 'estudiante') || (isAlreadyAuth && isT === 'administrador') ? (
                    <div style={{ margin: 0 }}>
                        <EncuestaForm
                            //valor del campo email
                            e={this.props.location.state.e}
                            //estados de hidden sobre los formularios
                            hiddenDatosGene={this.state.hiddenDatosGene}
                            hiddenDireccionLoc={this.state.hiddenDireccionLoc}
                            hiddenAnimacion={this.state.hiddenAnimacion}
                            hiddenDireccionFor={this.state.hiddenDireccionFor}
                            hiddenDatosAca = {this.state.hiddenDatosAca}

                            //metodos
                            addDataGeneral={this.addDataGeneral}
                            addDireccionLocal={this.addDireccionLocal}
                            addDireccionForaneo={this.addDireccionForaneo}
                            sourceSelected={this.sourceSelected}
                            addDatosAcademicos = {this.addDatosAcademicos}

                            //estados adicionales
                            title={this.state.tituloForm}
                            source={this.state.edadSelected}
                            carreras={this.state.carreras}

                            //seteo de la carrera seleccionada
                            sourceCarrera={this.state.selectedCarrera}
                            selectedCarrera={this.selectedCarrera}
                            //seteo del turno seleccionado
                            sourceTurno={this.state.selectedTurno}
                            selectedTurno={this.selectedTurno}
                            //seteo del tipo de baja seleccionado
                            sourceTbaja={this.state.selectedTbaja}
                            selectedTbaja={this.selectedTbaja}
                            //seteo de el semestre seleccionado
                            sourceSemestre={this.state.selectedSemestre}
                            selectedSemestre={this.selectedSemestre}
                            //redireccionaminento a survey
                            survey = {this.redirectSurvey}

                        ></EncuestaForm>


                    </div>
                ) : (<Redirect to='/' />)}
            </div>


        );
    }
}