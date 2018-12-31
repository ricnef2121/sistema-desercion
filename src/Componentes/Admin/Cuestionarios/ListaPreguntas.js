import React, { Component } from 'react';
import { Col, Panel, Table, Image } from 'react-bootstrap';

export default class ListaPreguntas extends Component {
    render() {
        return (
            <div>
                <Col md={12} style={{ paddingTop: '10px', height: '100%' }}>
                    <Panel >
                        <Panel.Heading style={{ 
                            display:'flex',alignItems:'center',justifyContent:'space-between',
                            backgroundColor: 'white', borderColor: '#DDDDDD' }}>
                            <a style={{
                                font: 'Gill Sans MT', fontSize: '25px',
                                fontWeight: 'bold', color: 'black'
                            }}>
                                Cuestionarios
                            </a>
                            <button
                                style={{
                                   
                                    backgroundColor: 'transparent', margin: '0px',
                                    borderColor: 'transparent', padding: '0px'
                                }}
                            >
                                <a style={{color:'#44B91A',fontWeight: 'bold'}}>
                                Agregar Pregunta</a>
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
                                    <tr>
                                        <td>Ingenierias en sistemas</td>
                                        <td style={{ padding: '0px' }}>
                                            <button
                                                style={{
                                                    backgroundColor: 'transparent', margin: '0px',
                                                    borderColor: 'transparent', padding: '0px'
                                                }}
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
                                            >
                                                <Image
                                                    style={{ width: '18px', margin: '0px', padding: '0px' }}
                                                    src={require('../../reutilizables/img/delete.png')}
                                                    responsive />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Maestria</td>
                                        <td>editar borrar</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Panel.Body>
                    </Panel>
                </Col>
            </div>
        );
    }
}