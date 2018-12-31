import React , {Component} from 'react';
import { Col,Form,FormGroup,FormControl} from 'react-bootstrap';


export default class BuscarCarrera extends Component{
    render(){
        return(
            <Col md={12} style={{ paddingTop: '10px', height: '100%' }}>
            <Form >
            <FormGroup>
                <FormControl
                style={{backgroundColor:'#F5F6FA'}}
                type="text" 
                name="BuscarCarrera"
                placeholder='Buscar'/>
            </FormGroup>{" "}
            
        </Form>
        </Col>
        );
    }
}