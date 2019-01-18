import React, {Component} from 'react';
import {Modal,Form,FormGroup, ControlLabel,FormControl,Button} from 'react-bootstrap'
import axios from 'axios';
//import { Redirect } from 'react-router-dom';
export default class ModalUpdate extends Component{

    constructor(props) {
        super(props);
        this.onChangeName= this.onChangeName.bind(this);
        this.onSubmit= this.onSubmit.bind(this); 
        
        this.state = {                       
            name:'',
            id:'',
            
        };
    }
   
  

    onChangeName = (e)=> {
        this.setState({
          name: e.target.value
        });
      }

      componentWillReceiveProps(nextProps) {
        this.setState({
            name: nextProps.itemName,
            id: nextProps.itemId,
            
        });
    }


    /*shouldComponentUpdate(nextProps, nextState){
        
        console.log(nextProps.itemName)
        console.log(this.state.name);
        if(nextProps.itemName === this.state.name){
            return false
        }else{
            return true;
        }
       // console.log(this.state.itemName)
       // console.log(nextProps.itemName)
        // console.log('should',this.state.carreras)
       //
       /*
       
            
       // return true;
}*/

    onSubmit(e) {
        e.preventDefault();
        const name = e.target.name.value;
        //console.log('put',this.state.name)
        this.props.callback(this.state.name);

        const obj = {
          name: name       
        };
        e.target.name.value= "";
        axios.put(`https://api-rest-crudric.herokuapp.com/api/carreras/${this.state.id}`, obj)
            .then(res => {
               // console.log(res.data);
                this.props.onHide();
                //console.log('put',this.state.name)
                this.props.callback(this.state.name);
                this.props.onload();
                this.props.showFalse();
            })
            .catch(err=> {
                console.log(err);
            })
       
      }
    
    render(){
        return(
            <div>
                <Modal style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} show={this.props.show} onHide={this.props.onHide}>
                <Form onSubmit={this.onSubmit} >
                    <Modal.Header style={{ backgroundColor: '#FAFAFC' }} closeButton>
                        <Modal.Title>Actualizar Carrera</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                       
                            <FormGroup>
                                <ControlLabel>Nombre</ControlLabel>
                                <FormControl
                                    type="text" id="name" name="name"
                                    //placeholder="Introduce el nombre de una nueva carrera"
                                    //value={this.props.id}
                                    value={this.state.name}
                                    //onChange={this.onChangeName}
                                    onChange={(e) => this.onChangeName(e)}
                                ></FormControl>
                            </FormGroup>
                        
                        
                    </Modal.Body>
                    <Modal.Footer
                        style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                        }}>
                        <Button style={{ borderRadius: '3em', width: '130px', backgroundColor: '#F5F6FA', borderColor: 'transparent', fontWeight: 'bold', color: '#707070' }} onClick={this.props.onHide}>Cancelar</Button>
                        <Button style={{ borderRadius: '3em', width: '130px', backgroundColor: '#44B91A', color: 'white', fontWeight: 'bold' }} type="submit" >Actualizar</Button>
                    </Modal.Footer>
                    </Form>
                </Modal>
            </div>
        );
    }
}

/**
 * <Modal style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} show={this.state.show2} onHide={this.handleClose2}>
                <Form >
                <Modal.Header style={{ backgroundColor: '#FAFAFC' }} closeButton>
                <Modal.Title>Actualizar Carrera{this.state.item}</Modal.Title>
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
                <Button style={{ borderRadius: '3em', width: '130px', backgroundColor: '#F5F6FA', borderColor: 'transparent', fontWeight: 'bold', color: '#707070' }} onClick={this.handleClose2}>Cancelar</Button>
                <Button style={{ borderRadius: '3em', width: '130px', backgroundColor: '#44B91A', color: 'white', fontWeight: 'bold' }} type="submit" >Actualizar</Button>
            </Modal.Footer>
            </Form>
        </Modal>
 */