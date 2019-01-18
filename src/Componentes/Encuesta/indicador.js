import React, { Component } from 'react';
import {
    Col, Form, FormGroup, ControlLabel, FormControl, Button, Panel, Row,
    InputGroup, DropdownButton, MenuItem, Radio,Pagination
} from 'react-bootstrap';
export default class Indicador extends Component {
    constructor(props){
        super(props);
        this.state={
            edad:40
        }
    }
    render() {
        //let active = 7;
       /* const items = [];
        for (let number = 1; number <= 3; number++) {
          items.push(
            <Pagination.Item 
            //active={number === active}
            >{number}</Pagination.Item>
          );
        }
        const paginationBasic = (
            <div  style={{ margin: '0px', padding: '0px', display: 'flex', alignContent: 'center', justifyContent: 'center' }}>          
              <Pagination bsSize="medium">{items}</Pagination>
            </div>
          );
*/
        return (
            <div style={{}}>
                <Col md={12} style={{ margin: '0px', padding: '0px', display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
                    <Col md={6} style={{ paddingTop: '10px', margin: '0px' }}>
                    <Row>
                        
                    </Row>
                        </Col>
                </Col>
            </div>
        )
    }
}