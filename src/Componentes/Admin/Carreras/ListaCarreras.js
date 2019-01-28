import React, { Component } from 'react';
import { Col, Panel, Form, FormGroup, FormControl, ControlLabel,Table, Image, Modal, Button } from 'react-bootstrap';
import axios from 'axios';
//Componentes
import ModalUpdate from './ModalUpdate';
import ModalDelete from './ModalDelete';

export default class ListaCarreras extends Component {
    constructor(props) {
        super(props);

        this.handleShow1 = this.handleShow1.bind(this);
        this.handleClose1 = this.handleClose1.bind(this);
        this.handleShow2 = this.handleShow2.bind(this);
        this.handleClose2 = this.handleClose2.bind(this);
        this.handleShow3 = this.handleShow3.bind(this);
        this.handleClose3 = this.handleClose3.bind(this);        
        this.getRepsonse=this.getRepsonse.bind(this);
        this.onChangeName= this.onChangeName.bind(this);
        this.setnewcarreras=this.setnewcarreras.bind(this)
        this.onload=this.onload.bind(this);

        this.state = {
            show1: false,
            show2:false,
            show3:false,
            name:'',
            itemName:'',
            itemId:'',
            carreras: [],
            result:'',
            newcarreras:[],
            busqueda:false
        };
    }
    onChangeName = (e)=> {
        this.setState({
          name: e.target.name.value
        });
      }
    handleClose1() {
        this.setState({ show1: false });
    }

    handleShow1() {
        this.setState({ show1: true });
    }

    handleClose2() {
        this.setState({ show2: false });
    }

    handleShow2(item1,item2) {
        this.setState({ 
            show2: true,
            itemName:item1,
            itemId:item2
            
         });
       
    }

    handleClose3() {
        this.setState({ show3: false });
    }

    handleShow3(item1,item2) {
        this.setState({ 
            show3: true,
            itemName:item1,
            itemId:item2
         });
    }

    onload = e => {
        axios.get(`https://api-rest-crudric.herokuapp.com/api/carreras`)
            .then(res => {
                const carreras = (res.data).carreras;
                // console.log(carreras);
                this.setState({
                    carreras: carreras
                })
            })
      }

      busqueda() {
        this.setState({ 
            busqueda: true,
            newcarreras: this.props.newcarreras
         });
    }
    
    componentDidMount() {       
        axios.get(`https://api-rest-crudric.herokuapp.com/api/carreras`)
            .then(res => {
                const carreras = (res.data).carreras;
                // console.log(carreras);
                this.setState({
                    carreras: carreras
                })
            })            
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            newcarreras: nextProps.newcarreras,
            

        });
    }
/* 
    shouldComponentUpdate(nextProps, nextState){
    
        if(nextState.itemName === this.state.result){
           
        }else{
           
            this.onload()
        return true;
        }
       return true;
}*/
    

    handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const c = {
            name: name
            
        };        
        event.target.name.value = "";        
        console.log(c);
        axios.post(`https://api-rest-crudric.herokuapp.com/api/carreras`, c)
            .then(res => {                
            // console.log(res.data);
            this.handleClose1();
            this.onload();
            })
            .catch(err => {
                console.log(err)
            })
    }

    getRepsonse(result){
        this.setState({result:result})
    }

    setnewcarreras(){
        this.setState({
            carreras:this.state.newcarreras
        })
    }
    

    render() {
      
       
        const carreras = this.state.carreras.map((carrer,k) => {
            return <tr key={k}><td >{carrer.name}</td>
                <td style={{ padding: '0px' }}>
                    <button
                        style={{
                            backgroundColor: 'transparent', margin: '0px',
                            borderColor: 'transparent', padding: '0px'
                        }}
                        onClick={()=> this.handleShow2(carrer.name,carrer._id)}
                        
                    >
                        <Image
                            
                            style={{ width: '22px', margin: '0px', padding: '0px' }}
                            src={require('../../reutilizables/img/update.png')}
                            responsive />
                    </button>
                    <button
                        style={{
                            backgroundColor: 'transparent', margin: '0px',
                            borderColor: 'transparent', padding: '0px', marginLeft: '20px'
                        }}
                        onClick={()=> this.handleShow3(carrer.name,carrer._id)}
                    >
                        <Image
                            style={{ width: '18px', margin: '0px', padding: '0px' }}
                            src={require('../../reutilizables/img/delete.png')}
                            responsive />
                    </button>
                </td>
            </tr>//<li key={k}>{carrer.name}</li>

        });

        return (
            <div>
                <Col md={12} style={{ paddingTop: '10px', height: '100%' }} >
                    <Panel >
                        <Panel.Heading style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            backgroundColor: 'white', borderColor: '#DDDDDD'
                        }}>
                            <div style={{
                                font: 'Gill Sans MT', fontSize: '25px',
                                fontWeight: 'bold', color: 'black'
                            }}>
                                Carreras
                            </div>
                            <button
                                style={{

                                    backgroundColor: 'transparent', margin: '0px',
                                    borderColor: 'transparent', padding: '0px',
                                    color: '#44B91A', fontWeight: 'bold'
                                }}
                                onClick={this.handleShow1}
                            >

                                Agregar Carrera
                            </button>
                        </Panel.Heading>
                        <Panel.Body style={{ padding: '0px' }}>
                            <Table responsive>
                                <thead style={{ color: '#A3A6B4', backgroundColor: '#F5F6FA' }}>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Configuraciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {carreras}
                                </tbody>
                            </Table>
                        </Panel.Body>
                    </Panel>
                </Col>




                <Modal style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} show={this.state.show1} onHide={this.handleClose1}>
                <Form onSubmit={this.handleSubmit} >
                    <Modal.Header style={{ backgroundColor: '#FAFAFC' }} closeButton>
                        <Modal.Title>Agregar Carrera</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                       
                            <FormGroup>
                                <ControlLabel>Nombre</ControlLabel>
                                <FormControl
                                    type="text" id="name" name="name"
                                    placeholder="Introduce el nombre de una nueva carrera"
                                ></FormControl>
                            </FormGroup>                                                
                    </Modal.Body>
                    <Modal.Footer
                        style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                        }}>
                        <Button style={{ borderRadius: '3em', width: '130px', backgroundColor: '#F5F6FA', borderColor: 'transparent', fontWeight: 'bold', color: '#707070' }} onClick={this.handleClose1}>Cancelar</Button>
                        <Button style={{ borderRadius: '3em', width: '130px', backgroundColor: '#44B91A', color: 'white', fontWeight: 'bold' }} type="submit" >Agregar</Button>
                    </Modal.Footer>
                    </Form>
                </Modal>
                        <ModalUpdate 
                        show={this.state.show2}
                        onHide={this.handleClose2} 
                        itemName={this.state.itemName} 
                        itemId={this.state.itemId}  
                        onChangeName={this.onChangeName} 
                        callback={this.getRepsonse}
                        onload={this.onload}
                        ></ModalUpdate>

                        <ModalDelete 
                        show3={this.state.show3} 
                        onHide3={this.handleClose3} 
                        itemName={this.state.itemName}
                        itemId={this.state.itemId} 
                        onload={this.onload}
                        ></ModalDelete>                
            </div>
        );
    }
}