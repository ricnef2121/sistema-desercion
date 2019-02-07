import React, { Component } from 'react';
import { Col, Panel, Table } from 'react-bootstrap';

export default class TablaDesertores extends Component {

    render() {

        //let semes = [];
        const items = this.props.groupSemestres2.map(group => {
            let result = {
                semestre: parseInt(group.semestre),
                desercion: group.desercion
            }
            return result

        })
        //ya que tenemos los semestres los ordenamos del 1 a 12
        //para ello usamos la funcion sort y le pasamos una funcion que compara
        //cada elemento con el anterior para ever cual es menor
        items.sort((a, b) => {
            return a.semestre - b.semestre;
        })
        //insertamos el reusltado dentro de otro arreglo
       // semes.push(items)
        console.log('jeje', items)

       const tablaItems = items.map((item, k) => {

        const factor = item.desercion.map((desercion,j)=>{
            return <div key={j} style={{display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{desercion.factor}</div>
        })

        const cantidad = item.desercion.map((desercion,l)=>{
            return <div key={l} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{desercion.conteo_de_estudiantes}</div>
        })
        
            

            return <tr key={k}>
                <th style={{  color: '#707070' }}>{item.semestre}º semestre</th>

                <th style={{  color: '#707070' }}>
                    {factor}
                </th>
                <th style={{  color: '#707070' }}>
                   {cantidad}
                </th>
            </tr>
        })


        return (
            <Col md={6} style={{marginTop:'10px'}}>
                <Panel>

                    <Panel.Body>
                        <Table responsive>
                            <thead style={{ color: '#A3A6B4', backgroundColor: '#F5F6FA' }}>
                                <tr style={{ border: 0 }}>
                                    <th style={{ border: 0 }}>Semestres</th>
                                    <th style={{ border: 0 }}>Factor Clave</th>
                                    <th style={{ border: 0 }}>Cantidad de alumnos desertores</th>
                                </tr>
                            </thead>
                            <tbody style={{ fontSize: '12px', fontWeight: '300', border: 0 }}>
                                
                                {tablaItems}
                            </tbody>
                        </Table>


                    </Panel.Body>
                </Panel>
            </Col >
        )
    }
}