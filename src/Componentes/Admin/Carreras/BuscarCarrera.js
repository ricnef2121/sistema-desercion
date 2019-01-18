import React , {Component} from 'react';
import { Col,Form,FormGroup,InputGroup,FormControl,Button,} from 'react-bootstrap';
import axios from 'axios';
 
export default class BuscarCarrera extends Component{
    constructor(props){
        super(props);
        this.buscarCarrera=this.buscarCarrera.bind(this);
        this.state={
            carreras:[]
        }
    }


    buscarCarrera = async(e) =>{//e.target.name.value;
        e.preventDefault();
        const peliculaPorBuscar = e.target.BuscarCarrera.value;
        //console.log(peliculaPorBuscar)
        e.target.BuscarCarrera.value = ""; 
        axios.get(`https://api-rest-crudric.herokuapp.com/api/carreraslike/${peliculaPorBuscar}`)
        .then(res => {
            const carreras = (res.data).carrera;
            //console.log(carreras);
            this.setState({
                carreras: carreras
            })
            console.log('state',this.state.carreras)
            this.props.callback(this.state.carreras)
            this.props.showTrue();
        })        
    }



    render(){ 
        
        return(
            <Col md={12} style={{ paddingTop: '10px', height: '100%' }}>
            <Form onSubmit={this.buscarCarrera}>
            <FormGroup>
                <InputGroup>
                <InputGroup.Button>
                <Button type="submit">Buscar</Button>                       
                </InputGroup.Button>
                <FormControl
                style={{backgroundColor:'#F5F6FA'}}
                type="text" 
              // value="Submit"
                name="BuscarCarrera"
                id="BuscarCarrera"
                placeholder='......'/>               
                 </InputGroup>                
            </FormGroup>{" "}
            </Form>
        </Col>
        );
    }
}