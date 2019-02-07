import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable'

//import axios from 'axios';
//Componentes
import NavPrincipal from '../../reutilizables/NavPrincipal';
import NavAdmin from '../../reutilizables/NavAdmin';
import Barra from './Barra';
import Dona from './Doughnut';
import DonaGenero from './DonaGenero';
import PastelEdades from './PastelEdades';

export default class Inicio extends Component {

    constructor(...props) {
        super(...props);

        this.isAuth = this.isAuth.bind(this);
        this.isType = this.isType.bind(this);
        this.selectedResidente = this.selectedResidente.bind(this);
        this.onchange = this.onchange.bind(this);
        this.obtenerMesAñoActual = this.obtenerMesAñoActual.bind(this);
        this.diasEnUnMes = this.diasEnUnMes.bind(this);
        this.get30latest = this.get30latest.bind(this);
        this.getMesActual = this.getMesActual.bind(this);
        this.selectedGraficaFechas = this.selectedGraficaFechas.bind(this);

        //generar pdf
        this.unduhPdf = this.unduhPdf.bind(this);

        this.state = {
            tamañoconsulta:[],
            fechas: [],
            groupEdades: [],
            direccionesUser: [],
            residenteDefault: 'Local',
            selectedResidente: 'Local',
            selectedGrafica: 'Ultimos 30 dias',
            graficaDefault: 'Ultimos 30 dias',
            mesActual: [],
            mes: '',
            fechaByparams: false,


            //generar report

        }
    }

    //generar reporte
    unduhPdf(e) {
        e.preventDefault();
        const f = this.state.tamañoconsulta;
        const fec = this.obtenerMesAñoActual();
        const mes = fec[2];
        const año = fec[3]
        const d = fec [1];

        
        let months = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        // var jsPDF = require('jspdf');
        // require('jspdf-autotable');
        var doc = new jsPDF()
        doc.setFontSize(30);
        doc.text(10, 20, `Reporte de Desercion`);
        doc.setFontSize(10);
        doc.text(140, 33, `Fecha de Expedicion ${d} - ${months[mes-1]} - ${año}`);
        doc.setFontSize(15);
        doc.text(10, 33, `De : ${this.state.selectedGrafica}`)
        doc.autoTable({
            margin: { top: 46 },
            head: [['Cantidad de alumnos desertores', 'Fecha Inicial de conteo', 'Fecha Final de conteo']],
            body: [
                [`${f.length}`, `${f[f.length -1]._id.dia}`, `${this.state.tamañoconsulta[0]._id.dia}`],
           // ['Castille', 'castille@example.com', 'Norway'],
        ],
        });
        doc.save(this.state.judul)
    };

    obtenerMesAñoActual = () => {
        const hoy = new Date();
        const dd = hoy.getDate();
        const mm = hoy.getMonth() + 1;
        const yyyy = hoy.getFullYear();
        const i = [hoy, dd, mm, yyyy]
        return i
    }

    diasEnUnMes = (mes, año) => {
        return new Date(año, mes, 0).getDate();
    }


    componentDidMount() {
        axios.get('https://api-rest-crudric.herokuapp.com/api/userUltimoMes')
            .then((res) => {
                const t = res.data;
                const tamañoreal =res.data.map(e => {
                    const obj2 = {
                        _id: { dia: e.dia + '/' + e.mes + '/' + e.año, mes: e.mes, año: e.año },
                        conteo: e.conteo
                    }
                    return obj2;
                });
                this.setState({
                    tamañoconsulta:tamañoreal
                })
                //generamos un nuevo arreglo con resultado
                //esto se debe a que anteriormente ya teniamos un arreglo con esta estructura
                // y para evitar problemas se decide seguir el mismo orden en que la informacion llega
                const get30 = t.map(e => {
                    const obj = {
                        _id: { dia: e.dia + '/' + e.mes + '/' + e.año, mes: e.mes, año: e.año },
                        conteo: e.conteo
                    }
                    return obj;
                });
                console.log('ultimos 30', get30)
                this.setState({
                    fechas: get30
                })
                console.log(this.state.fechas)
            })



        axios.get('https://api-rest-crudric.herokuapp.com/api/userCountEdad')
            .then((res) => {
                const groupEdades = res.data;
                // console.log('groupedades',groupEdades)
                this.setState({
                    groupEdades: groupEdades
                })
            })

    }

    //devulve los ultimos 30 registros en la base de datos
    get30latest() {
        axios.get('https://api-rest-crudric.herokuapp.com/api/userUltimoMes')
            .then((res) => {
                const t = res.data;
                const tamañoreal =res.data.map(e => {
                    const obj2 = {
                        _id: { dia: e.dia + '/' + e.mes + '/' + e.año, mes: e.mes, año: e.año },
                        conteo: e.conteo
                    }
                    return obj2;
                });
                this.setState({
                    tamañoconsulta:tamañoreal
                })
                //generamos un nuevo arreglo con resultado
                //esto se debe a que anteriormente ya teniamos un arreglo con esta estructura
                // y para evitar problemas se decide seguir el mismo orden en que la informacion llega
                const get30 = t.map(e => {
                    const obj = {
                        _id: { dia: e.dia + '/' + e.mes + '/' + e.año, mes: e.mes, año: e.año },
                        conteo: e.conteo
                    }
                    return obj;
                });
                //    console.log('ultimos 30', get30)
                this.setState({
                    fechas: get30
                })
            })




    }

    //devuelve los usuarios registrados en el mes actual
    getMesActual = () => {
        const fec = this.obtenerMesAñoActual();
        const mes = fec[2];
        const año = fec[3]
        const diasmes = this.diasEnUnMes(mes, año);
        const arreglodias = []
        for (let d = 1; d <= diasmes; d++) {
            const p = { _id: { dia: d, mes: mes, año: año }, conteo: 0 }
            arreglodias.push(p)
        }
        this.setState({
            mesActual: arreglodias,
            mes: mes
        })

        axios.get(`https://api-rest-crudric.herokuapp.com/api/userFechasCount/${mes}/${año}`)
            .then((res) => {
                const fechas = (res.data);
                this.setState({
                    tamañoconsulta:fechas
                })

                const j = this.state.mesActual;
                // console.log('fechas2', fechas);
                //  console.log('cantidadde dias del mes', j);
                //por cada elemento del mes actual
                for (let i = 0; i < j.length; i++) {
                    // console.log('j', j[i]._id)
                    //sse guarda en una variable el elemento sobre el cual este pasando el ciclo for
                    //y se toma solo el elemnto id que es el que guarda la fecha completa
                    const diaDelMes = j[i]._id;

                    //gurdamos el indice del elemento con relacion al arreglo que guarda 
                    //los dias del mes actual del arreglo actual
                    //let posicion = j.indexOf(j[i]);

                    //convertimps el elemento del arreglo en un json para poder compararlo
                    //debido a que es un objeto
                    const comp1 = JSON.stringify(diaDelMes)
                    //console.log(comp1)

                    //por cada elemento de las fechas que nos devolvio el api 
                    for (let k = 0; k < fechas.length; k++) {
                        //console.log('k', fechas[k]._id)
                        //guardamos el item actual del ciclo
                        const diaRegistrado = fechas[k]._id;

                        //gurdamos el indice del elemento con relacion al arreglo que guarda
                        // las fechas que devolvio el api
                        ///let posicion2 = fechas.indexOf(fechas[k]);
                        //lo convertimos a un json para poder compararlo despues
                        const comp2 = JSON.stringify(diaRegistrado);
                        // console.log('comp2',comp2)
                        if (comp1 === comp2) {
                            //  console.log(j[i],'son iguales, el index a modificar es:',posicion,fechas[k])
                            j[i] = fechas[k]
                            // console.log(j)

                            // console.log('estado', this.state.fechas);
                        } else {
                            continue;
                        }
                    }
                }
                this.setState({
                    fechas: j
                })
            })
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


    //toma el valor del dropwdom de la grafica de residentes
    selectedResidente = (eventkey, event) => {
        event.preventDefault();
        this.setState({
            selectedResidente: eventkey,
            direccionesUser: []
        });

    }

    //toma el valor del dropwdom de la grafica de fechas
    selectedGraficaFechas = (eventkey, event) => {
        event.preventDefault();
        this.setState({
            //selectedResidente: eventkey,
            selectedGrafica: eventkey,
            // fechas:[]
            //direccionesUser: []
        });
        if (eventkey === 'Mes actual') {
            this.getMesActual()
        } else if (eventkey === 'Ultimos 30 dias') {
            this.get30latest()
        }
    }



    onchange = () => {
        if (this.state.residenteDefault !== this.state.selectedResidente) {
            if (this.state.selectedResidente === "Foraneo") {
                if (this.state.direccionesUser.length === 0) {
                    // console.log('se relleno la consulta')
                    axios.get('https://api-rest-crudric.herokuapp.com/api/userCountForaneo')
                        .then(res => {
                            const direccionesUser = (res.data);
                            //   console.log('onchange',direccionesUser);
                            this.setState({
                                direccionesUser: direccionesUser
                            })
                        })
                } else {
                    return
                }
            }
        } else if (this.state.selectedResidente === "Local") {
            if (this.state.direccionesUser.length === 0) {
                axios.get('https://api-rest-crudric.herokuapp.com/api/userCountLocal')
                    .then(res => {
                        const direccionesUser = (res.data);
                        // console.log('onchange',direccionesUser);
                        this.setState({
                            direccionesUser: direccionesUser
                        })
                    })
            } else {
                return
            }

        }
    }





    render() {

        // this.get30latest();
        const isAlreadyAuth = this.isAuth();
        const isT = this.isType();

        return (
            <div style={{ margin: '0px' }}>
                {(isAlreadyAuth && isT === 'administrador') || (isAlreadyAuth && isT === 'superadministrador') ? (
                    <div style={{ margin: '0px', scrollMargin: '' }}>
                        {this.onchange()}

                        <NavPrincipal />
                        <NavAdmin></NavAdmin>
                        <Col md={10} style={{ backgroundColor: '#FAFAFC', paddingTop: '10px' }}>
                            <Row>

                                <Dona
                                    direccionesUser={this.state.direccionesUser}
                                    stateResidente={this.state.selectedResidente}
                                    selectedResidente={this.selectedResidente}
                                    onchange={this.onchange}
                                />
                                <DonaGenero

                                />

                                <PastelEdades
                                    groupEdades={this.state.groupEdades}
                                />
                                <Barra
                                    fechas={this.state.fechas}
                                    mes={this.state.mes}
                                    fechaByparams={this.state.fechaByparams}
                                    stateGrafica={this.state.selectedGrafica}
                                    selectedGraficaFechas={this.selectedGraficaFechas}
                                    unduhPdf={this.unduhPdf}
                                />

                            </Row>
                        </Col>

                    </div>
                ) : (<Redirect to='/' />)}
            </div>
        );
    }

}