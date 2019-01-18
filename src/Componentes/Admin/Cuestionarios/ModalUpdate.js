import React,{Component} from 'react';
import {Modal,Form,FormGroup, ControlLabel,FormControl,Button,InputGroup,DropdownButton,MenuItem} from 'react-bootstrap'

export default class ModalUpdate extends Component {
    render(){
        const factores = this.props.factores.map((factor,i) => {
            return  <MenuItem key={i} eventKey={factor.name}
            //onSelectedValue={this.props.sourceSelected(factor._id)}
             >
            {factor.name}</MenuItem>})
        return(
            <div>
                <Modal style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} 
                show={this.props.showUpdate}
                onHide={this.props.onHideUpdate}>
                <Form 
                onSubmit={this.props.update} 
                >
                    <Modal.Header style={{ backgroundColor: '#FAFAFC' }} closeButton>
                        <Modal.Title>Editar Pregunta</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                            <FormGroup>
                                <InputGroup>
                                    <FormControl type="text" id="factor" name="factor"
                                     value={this.props.factor} //defaultValue={this.props.source} 
                                     onChange={(e)=> this.props.onChangeFactor(e)}
                                    />
                                    <DropdownButton
                                        componentClass={InputGroup.Button}
                                        id="dropdown"
                                        title="Factor"
                                        ///placeholder="select"
                                        
                                        onSelect={this.props.sourceSelected}
                                        //value="select"                                                                            
                                    >                                        
                                     {factores}
                                    </DropdownButton>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Nombre</ControlLabel>
                                <FormControl
                                    type="text" id="name" name="name"
                                    value={this.props.name}
                                    //onChange={(e)=> this.props.onChangeName(e)}
                                    onChange={(e) => this.props.onChangeName(e)}
                                ></FormControl>
                            </FormGroup>
                        </Modal.Body>
                    <Modal.Footer
                        style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                        }}>
                        <Button style={{ borderRadius: '3em', width: '130px', backgroundColor: '#F5F6FA', borderColor: 'transparent', fontWeight: 'bold', color: '#707070' }}onClick={this.props.onHideUpdate}>Cancelar</Button>
                        <Button style={{ borderRadius: '3em', width: '130px', backgroundColor: '#44B91A', color: 'white', fontWeight: 'bold' }} type="submit" >Actualizar</Button>
                    </Modal.Footer>
                    </Form>
                </Modal>
            </div>
        )
    }
}