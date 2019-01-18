import React, { Component } from 'react';
import { Col, Panel, Table, Image, Button } from 'react-bootstrap';
import ModalUpdate from './ModalUpdate';
import ModalDelete from './ModalDelete';

export default class ResultadoBusqueda extends Component {
    render() {
        const preguntas = this.props.resultBusqueda.map((pregunta,k) => {
            return <tr key={k}><td >{pregunta.factor}</td><td >{pregunta.name}</td>
                <td style={{ padding: '0px' }}>
                    <button
                        style={{
                            backgroundColor: 'transparent', margin: '0px',
                            borderColor: 'transparent', padding: '0px'
                        }}
                        //onClick={()=> this.handleShow2(pregunta.factor,pregunta.name,pregunta._id)}  
                        onClick={()=>  this.props.showU(pregunta._id,pregunta.factor,pregunta.name)}                      
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
                        onClick={()=> this.props.showD(pregunta._id,pregunta.name)}
                    >
                        <Image
                            style={{ width: '18px', margin: '0px', padding: '0px' }}
                            src={require('../../reutilizables/img/delete.png')}
                            responsive />
                    </button>
                </td>
            </tr>
        });
        return (
            <Col md={12} hidden={this.props.hidden} style={{ paddingTop: '10px', height: '100%' }}>
                <Panel >
                    <Panel.Heading style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        backgroundColor: 'white', borderColor: '#DDDDDD'
                    }}>
                        <div style={{
                            font: 'Gill Sans MT', fontSize: '25px',
                            fontWeight: 'bold', color: 'black'
                        }}>
                            Coincidencias Encontradas
                            </div>
                            <Button                            
                                style={{
                                    backgroundColor: 'transparent', margin: '0px',
                                    borderColor: 'transparent', padding: '0px',
                                    color: '#44B91A', fontWeight: 'bold'
                                }}
                                onClick={this.props.closeBusqueda}
                            >
                                Cerrar
                            </Button>
                       
                    </Panel.Heading>
                    <Panel.Body style={{ padding: '0px' }}>
                        <Table responsive>
                            <thead style={{ color: '#A3A6B4', backgroundColor: '#F5F6FA' }}>
                                <tr>
                                    <th>Factor</th>
                                    <th>Pregunta</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {preguntas}
                            </tbody>
                        </Table>
                    </Panel.Body>
                </Panel>

                <ModalUpdate factores={this.props.factores} showU={this.props.showU}
                 showUpdate={this.props.showUpdate} onHideUpdate={this.props.handleCloseUpdate}
                ></ModalUpdate>

                <ModalDelete></ModalDelete>                
            </Col>

        )
    };
}
/**
 * <ModalUpdate
            itemName={this.state.itemName}
            itemId={this.state.itemId}
            onChangeName={this.onChangeName}
            onHide={this.handleClose2}
            show={this.state.show2}
            callback={this.getRepsonse}
            onload={this.onload}
            showFalse={this.props.showFalse}
            ></ModalUpdate>

            <ModalDelete
            itemName={this.state.itemName}
            itemId={this.state.itemId}
            show3={this.state.show3}
            onHide3={this.handleClose3}
            onload={this.onload}
            showFalse={this.props.showFalse}
            ></ModalDelete>
 */