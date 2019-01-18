import React, { Component } from 'react';
import { Col, Panel, Table, Button } from 'react-bootstrap';
import ModalAdd from './ModalAdd';
import ModalUpdate from './ModalUpdate';
import ModalDelete from './ModalDelete';

export default class ListaPreguntas extends Component {
    render() {
        return (
            <div>
                <Col md={12} style={{ paddingTop: '10px', height: '100%' }}>
                    <Panel >
                        <Panel.Heading style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            backgroundColor: 'white', borderColor: '#DDDDDD'
                        }}>
                            <div style={{
                                font: 'Gill Sans MT', fontSize: '25px',
                                fontWeight: 'bold', color: 'black'
                            }}>
                                Cuestionarios
                            </div>
                            <Button                            
                                style={{
                                    backgroundColor: 'transparent', margin: '0px',
                                    borderColor: 'transparent', padding: '0px',
                                    color: '#44B91A', fontWeight: 'bold'
                                }}
                                onClick={this.props.show}
                            >
                                Agregar Pregunta
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
                                {this.props.preguntas}                                   
                                </tbody>
                            </Table>
                        </Panel.Body>
                    </Panel>
                </Col>

                <ModalAdd stateshow={this.props.stateshow} factores={this.props.factores} 
                onHide={this.props.onHide}  addPregunta={this.props.addPregunta} 
                sourceSelected={this.props.sourceSelected} source={this.props.source}></ModalAdd>

                <ModalUpdate showUpdate={this.props.showUpdate} onHideUpdate={this.props.onHideUpdate}
                source={this.props.source} sourceSelected={this.props.sourceSelected} factores={this.props.factores}
                id={this.props.id} factor={this.props.factor} name={this.props.name} onChangeFactor={this.props.onChangeFactor}
                onChangeName={this.props.onChangeName} update={this.props.update}
                ></ModalUpdate>

                <ModalDelete showDelete={this.props.showDelete} onHideDelete={this.props.onHideDelete}
                id={this.props.id} name={this.props.name} delete={this.props.delete}
                ></ModalDelete>
            </div>
        );
    }
}