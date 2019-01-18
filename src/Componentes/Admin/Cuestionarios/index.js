import React, {Component} from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

//Componentes
import NavPrincipal from '../../reutilizables/NavPrincipal';
import NavAdmin from '../../reutilizables/NavAdmin';
import ListaPreguntas from './ListaPreguntas';
import BuscarPregunta from './BuscarPregunta';
import ResultadoBusqueda from './ResultadoBusqueda';
import axios from 'axios' ;

export default class Cuestionarios extends Component{
    constructor(props){
        super(props);

        this.show = this.show.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.addPregunta = this.addPregunta.bind(this);
        this.sourceSelected = this.sourceSelected.bind(this);
        this.onload = this.onload.bind(this);
        this.showU = this.showU.bind(this);
        this.handleCloseUpdate = this.handleCloseUpdate.bind(this);
        this.onChangeFactor = this.onChangeFactor.bind(this);
        this.update=this.update.bind(this);
        this.showD = this.showD.bind(this);
        this.handleCloseDelete = this.handleCloseDelete.bind(this);
        this.delete = this.delete.bind(this);
        this.buscarPregunta = this.buscarPregunta.bind(this);
        this.closeBusqueda = this.closeBusqueda.bind(this);
        this.isAuth = this.isAuth.bind(this);
        this.isType = this.isType.bind(this);


        this.state={
            preguntas:[],
            factores:[],
            //modal add
            show:false,
            sourceSelected: [],

            //modal update
            showUpdate:false,
            itemName:'',
            itemId:'',
            itemFactor:'',

            //buscar
            hidden:true,
            resultBusqueda:[],
            //modal delete
            showDelete:false
            
        }
    }
    
    closeBusqueda=()=>{
        this.setState({
            hidden:true
        })
    }

    onChangeName = (e)=> {
        this.setState({
            itemName: e.target.value
        });
      }

    onChangeFactor = (e)=> {
        this.setState({
            itemFactor: e.target.value
        });
      }

    sourceSelected = ( eventkey, event) => {
        this.setState({
          sourceSelected: [eventkey],
          itemFactor: [eventkey]       
          });
        }

    show() {
        this.setState({ show: true });
    }

    showU(a,b,c) {
        this.setState({ 
            showUpdate: true,
            itemId:a,
            itemFactor:b,
            itemName:c            
            

        });
    }

    showD(a,b){
        this.setState({
            showDelete: true,
            itemId:a,
            itemName:b     
        })
    }

    handleClose() {
        this.setState({ show: false,
            sourceSelected:'' });
    }

    handleCloseUpdate() {
        this.setState({ showUpdate: false });
    }

    handleCloseDelete(){
        this.setState({
            showDelete: false
        })
    }

    componentDidMount() {       
        axios.get(`https://api-rest-crudric.herokuapp.com/api/preguntas`)
            .then(res => {
                const preguntas = (res.data).preguntas
                 console.log(preguntas);
                this.setState({
                    preguntas: preguntas
                })
            }) 
            
            axios.get(`https://api-rest-crudric.herokuapp.com/api/factores`)
            .then(res => {
                const factores = (res.data).factores;
                 console.log(factores);
                this.setState({
                    factores: factores
                })
            })    
    }
    addPregunta = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const factor = this.state.sourceSelected;
        const datos = {
            name: name,
            factor: factor
        };        
        e.target.name.value = "";
        //e.target.factor.value = ""; 
        //console.log(c);
        axios.post(`https://api-rest-crudric.herokuapp.com/api/preguntas`, datos)
            .then(res => {                
            console.log(res.data);
           this.handleClose();
           this.onload();
           this.setState({
           sourceSelected:''
           })
            })
            .catch(err => {
                console.log(err)
            })
    }

    onload(){
        axios.get(`https://api-rest-crudric.herokuapp.com/api/preguntas`)
        .then(res => {
            const preguntas = (res.data).preguntas
             console.log(preguntas);
            this.setState({
                preguntas: preguntas
            });
            this.closeBusqueda();
        }) 
    }

    update(e) {
        e.preventDefault();
        const name = e.target.name.value;
        const factor = e.target.factor.value;
        //this.props.callback(this.state.name);
        const obj = {
          name: name,
          factor:factor       
        };
        e.target.name.value= "";                        
        axios.put(`https://api-rest-crudric.herokuapp.com/api/preguntas/${this.state.itemId}`, obj)
            .then(res => {
               console.log(res.data);
               this.setState({
                itemFactor: ''
            })
               this.handleCloseUpdate();
               this.onload();
            })
            .catch(err=> {
                console.log(err);
            })       
      }

      
      delete(e) {
        e.preventDefault();                            
        axios.delete(`https://api-rest-crudric.herokuapp.com/api/preguntas/${this.state.itemId}`)
            .then(res => {
               console.log(res.data);               
               this.handleCloseDelete();
               this.onload();
            })
            .catch(err=> {
                console.log(err);
            })       
      }

      buscarPregunta = async(e) =>{//e.target.name.value;
        e.preventDefault();
        const buscarPregunta = e.target.BuscarPregunta.value;
        //console.log(peliculaPorBuscar)
        e.target.BuscarPregunta.value = ""; 
        axios.get(`https://api-rest-crudric.herokuapp.com/api/preguntasBuscar/${buscarPregunta}`)
        .then(res => {
            const preguntas = (res.data).pregunta;
            console.log(preguntas);
            this.setState({
                resultBusqueda: preguntas,
                hidden:false
            })            
        })        
    }

    //validaciones para el tipo de usuario
    isAuth() {
        //const t = localStorage.getItem('token');
        const t = sessionStorage.getItem('token')
        return t && t.length > 10;
    }

    isType() {
        const type = sessionStorage.getItem('typeU');
        return type;
    }
    
    render(){
        const isAlreadyAuth = this.isAuth();
        const isT = this.isType();


        const preguntas = this.state.preguntas.map((pregunta,k) => {
            return <tr key={k}><td >{pregunta.factor}</td><td >{pregunta.name}</td>
                <td style={{ padding: '0px' }}>
                    <button
                        style={{
                            backgroundColor: 'transparent', margin: '0px',
                            borderColor: 'transparent', padding: '0px'
                        }}
                        //onClick={()=> this.handleShow2(pregunta.factor,pregunta.name,pregunta._id)}  
                        onClick={()=>  this.showU(pregunta._id,pregunta.factor,pregunta.name)}                      
                    >
                        <Image                            
                            style={{ width: '22px', margin: '0px', padding: '0px' }}
                            src={require('../../reutilizables/img/update.png')}
                            responsive 
                            />
                    </button>
                    <button
                        style={{
                            backgroundColor: 'transparent', margin: '0px',
                            borderColor: 'transparent', padding: '0px', marginLeft: '20px'
                        }}
                        onClick={()=> this.showD(pregunta._id,pregunta.name)}
                    >
                        <Image
                            style={{ width: '18px', margin: '0px', padding: '0px' }}
                            src={require('../../reutilizables/img/delete.png')}
                            responsive />
                    </button>
                </td>
            </tr>
        });

        return(
            <div style={{ margin: '0px'}}>
               {   (isAlreadyAuth && isT === 'administrador') || (isAlreadyAuth && isT === 'superadministrador') ? (
                        <div style={{ margin: '0px' }}>
                        <NavPrincipal />
                <NavAdmin></NavAdmin>
                <Col md={10} style={{ backgroundColor: '#FAFAFC', height: '100%' }}>
                    <Row>
                    <BuscarPregunta buscarPregunta={this.buscarPregunta}></BuscarPregunta>
                    <ResultadoBusqueda hidden={this.state.hidden} id={this.state.itemId} 
                    factor={this.state.itemFactor} name={this.state.itemName} factores={this.state.factores}
                    resultBusqueda={this.state.resultBusqueda} closeBusqueda={this.closeBusqueda}
                    showU={this.showU}
                    showUpdate={this.state.showUpdate} onHideUpdate={this.handleCloseUpdate}
                    
                    delete={this.delete} showD={this.showD}
                    >
                    </ResultadoBusqueda>

                    <ListaPreguntas preguntas={preguntas} stateshow={this.state.show} 
                    source={this.state.sourceSelected}
                    show={this.show} onHide={this.handleClose} factores={this.state.factores}
                    addPregunta={this.addPregunta} sourceSelected={this.sourceSelected}
                    
                    showUpdate={this.state.showUpdate} onHideUpdate={this.handleCloseUpdate}
                    id={this.state.itemId} factor={this.state.itemFactor} name={this.state.itemName} 
                    onChangeFactor = {this.onChangeFactor} onChangeName={this.onChangeName}
                    update={this.update}


                    showDelete={this.state.showDelete} onHideDelete={this.handleCloseDelete}
                    delete={this.delete}
                    ></ListaPreguntas>
                    </Row>
                </Col>
        
                    </div>
                                    ) : (<Redirect to='/' />)}

            </div>
        );
    }
}
/**
 *  {   (isAlreadyAuth && isT === 'administrador') || (isAlreadyAuth && isT === 'superadministrador') ? (
                        <div style={{ margin: '0px' }}>
                        <NavPrincipal />
                <NavAdmin></NavAdmin>
                <Col md={10} style={{ backgroundColor: '#FAFAFC', height: '100%' }}>
                    <Row>
                    <BuscarPregunta buscarPregunta={this.buscarPregunta}></BuscarPregunta>
                    <ResultadoBusqueda hidden={this.state.hidden} id={this.state.itemId} 
                    factor={this.state.itemFactor} name={this.state.itemName} factores={this.state.factores}
                    resultBusqueda={this.state.resultBusqueda} closeBusqueda={this.closeBusqueda}
                    showU={this.showU}
                    showUpdate={this.state.showUpdate} onHideUpdate={this.handleCloseUpdate}
                    
                    delete={this.delete} showD={this.showD}
                    >
                    </ResultadoBusqueda>

                    <ListaPreguntas preguntas={preguntas} stateshow={this.state.show} 
                    source={this.state.sourceSelected}
                    show={this.show} onHide={this.handleClose} factores={this.state.factores}
                    addPregunta={this.addPregunta} sourceSelected={this.sourceSelected}
                    
                    showUpdate={this.state.showUpdate} onHideUpdate={this.handleCloseUpdate}
                    id={this.state.itemId} factor={this.state.itemFactor} name={this.state.itemName} 
                    onChangeFactor = {this.onChangeFactor} onChangeName={this.onChangeName}
                    update={this.update}


                    showDelete={this.state.showDelete} onHideDelete={this.handleCloseDelete}
                    delete={this.delete}
                    ></ListaPreguntas>
                    </Row>
                </Col>
        
                    </div>
                                    ) : (<Redirect to='/' />)}
            
 */