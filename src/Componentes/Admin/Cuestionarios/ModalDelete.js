import React,{Component} from 'react';
import { Modal, Form, FormGroup, ControlLabel, Button } from 'react-bootstrap';

export default class ModalDelete extends Component {
    render(){ 
        return(
            <div>
                <Modal style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}               
                show={this.props.showDelete} onHide={this.props.onHideDelete}
                 >
                    <Form onSubmit={this.props.delete} 
                    >
                        <Modal.Header style={{ backgroundColor: '#FF6565',color:'white' }} closeButton>
                            <Modal.Title>Esta seguro de querer
                                         eliminar el siguiente
                                        registro:
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>


                            <FormGroup style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <ControlLabel>
                                    {this.props.name}
                                </ControlLabel>
                                
                            </FormGroup>


                        </Modal.Body>
                        <Modal.Footer
                            style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                            }}>
                            <Button style={{ borderRadius: '3em', width: '130px', backgroundColor: '#F5F6FA', borderColor: 'transparent', fontWeight: 'bold', color: '#707070' }} 
                            onClick={this.props.onHideDelete}
                            >Cancelar</Button>
                            <Button style={{ borderRadius: '3em', width: '130px', backgroundColor: '#44B91A', color: 'white', fontWeight: 'bold' }} type="submit" >Si</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </div>
        )
    }
}