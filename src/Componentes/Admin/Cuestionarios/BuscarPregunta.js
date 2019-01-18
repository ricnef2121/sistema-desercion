import React , {Component} from 'react';
import { Col,Form,FormGroup,InputGroup,FormControl,Button,} from 'react-bootstrap';


export default class BuscarPregunta extends Component{
    render(){
        return(
            <Col md={12} style={{ paddingTop: '10px', height: '100%' }}>
            <Form onSubmit={this.props.buscarPregunta}
            >
            <FormGroup>
                <InputGroup> 
                <InputGroup.Button>
                <Button type="submit">Buscar</Button>                       
                </InputGroup.Button>
                <FormControl
                style={{backgroundColor:'#F5F6FA'}}
                type="text" 
              // value="Submit"
                name="BuscarPregunta"
                id="BuscarPregunta"
                placeholder='......'/>               
                 </InputGroup>                
            </FormGroup>{" "}
            </Form>
        </Col>
        );
    }
}