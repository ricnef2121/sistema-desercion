import React, { Component } from 'react';
import {
    Col, Panel, Row, Table, DropdownButton
    , MenuItem
} from 'react-bootstrap';
import { Bar } from 'react-chartjs-2'
export default class BarraFactores extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {

        const labels = this.props.groupFactors.map(group => {
            return group.factor
        })
        const dataHombre = this.props.groupFactors.map(group => {
            return group.datos[1].conteo
        })
        const dataMujer = this.props.groupFactors.map(group => {
            return group.datos[0].conteo
        })


        const Resumen = this.props.groupFactors.map((group, k) => {
            return <tr key={k}>
                <th style={{ border: 0, color: '#43425D' }}>{group.factor}</th>
                <th style={{ border: 0, color: '#43425D' }}>{group.conteoTotal}</th>
            </tr>
        })



        const charData = {
            // labels: ['Personal2','Social','Economico','Academico'],
            labels,
            datasets: [
                {
                    label: 'Hombre',
                    //data: [67.8,11,18,29],
                    data: dataHombre,
                    backgroundColor: '#A3A1FB'
                },
                {
                    label: 'Mujer',
                    //data: [20.7,15,52,13],
                    data: dataMujer,
                    backgroundColor: '#FF6565'
                },
                /*{
                    label: 'High',
                    data: [11.4],
                    backgroundColor: '#EBCCD1' 
                }*/
            ]

        }
        return (
            <div style={{ margin: '0px' }}>
                <Col md={6} style={{ paddingTop: '10px', /*backgroundColor: 'green',*/ height: '100%' }}>
                    <Panel style={{
                        /* height: '200pt', boxShadow: '0.01px 0.01px 0.01px black'*//*boxShadow:'0 0 0 0.1rem #000000'*/
                    }}>
                        <Panel.Body>

                            <Row style={{
                                margin: '0px'
                                //backgroundColor:'red'
                            }}>
                                <Col md={12} style={{ marginBottom: '10px' }}>
                                    <Col md={12} style={{ marginBottom: '10px', fontSize: '25px', fontWeight: '500' }}>
                                        Factores
                                </Col>
                                    <Col md={12} style={{ marginTop: 0, marginRight: 0, paddingRight: 0, paddingLeft: 0, paddingBottom: 1 }}>
                                        <Bar
                                            // style={{display:'flex',alignItems:'left'}}
                                            data={charData}
                                            height={270}


                                            options={{
                                                title: {
                                                    display: false,
                                                    text: 'Factores',
                                                    fontSize: 20,


                                                },
                                                legend: {
                                                    display: true,
                                                    position: 'top',

                                                },
                                                scales: {
                                                    xAxes: [{ stacked: true, barPercentage: 0.6 }],
                                                    yAxes: [{ stacked: true }]
                                                },
                                                responsive: true,
                                                maintainAspectRatio: false,
                                                barPercentage: 0.9
                                            }}
                                        />
                                    </Col>

                                </Col>

                                <Col md={12}// style={{marginTop:'100px'}}
                                >
                                    <Row style={{ margin: '0px' }}>
                                        <Col md={12}>
                                            <Col md={4} style={{ margin: 0, padding: 0 }}>
                                                <div style={{ fontSize: '15px', fontWeight: '500' }}>
                                                    Filtrar por :
                            </div>
                                            </Col>
                                           {/**
                                        
                                         <Col md={8} style={{ margin: 0, padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <div>
                                                    <DropdownButton
                                                        id="dropdown" title="Fecha actual"
                                                        pullRight={true}

                                                        //onSelect={this.props.selectedResidente} 								
                                                        style={{ height: '20px', paddingTop: '0px', color: 'green' }}>
                                                        <MenuItem key="1" eventKey="Mes">Mes</MenuItem>
                                                        <MenuItem key="2" eventKey="Año">Año</MenuItem>
                                                    </DropdownButton>
                                                </div>
                                                <div>
                                                    <DropdownButton
                                                        id="dropdown" title="Todos" //title={this.props.stateResidente}
                                                        pullRight={true}
                                                        onSelect={this.props.selectedResidente}
                                                        style={{ height: '20px', paddingTop: '0px', color: 'green' }}>
                                                        <MenuItem key="1" eventKey="Social">Social</MenuItem>
                                                        <MenuItem key="2" eventKey="Academico">Academico</MenuItem>
                                                    </DropdownButton>
                                                </div></Col>

                                        1*/}


                                        </Col>

                                        <Col md={12}>
                                            <Table style={{ border: 0 }}>
                                                <thead style={{ border: 0 }}>
                                                    <tr style={{ border: 0 }}>
                                                        <th style={{ border: 0 }}>Resumen</th>

                                                    </tr>
                                                </thead>
                                                <tbody style={{ fontSize: '12px', fontWeight: '300', border: 0 }}>
                                                    {Resumen}

                                                </tbody>
                                            </Table>
                                        </Col>
                                    </Row>

                                </Col>
                            </Row>
                        </Panel.Body>
                    </Panel>
                </Col>
            </div>
        );
    }
}

/**
 *

                            <Row style={{margin:'0px'}}>
                            <Col md={12} style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                            <div>
                                Filtrar por :
                            </div>
                            <div>
                                Filtrar por :
                            </div>
                            <div>
                                Filtrar por :
                            </div>
                            </Col>

                            <Col md={12}>
                            <Table >
                                <thead style={{ color: '#A3A6B4', backgroundColor: '#F5F6FA' }}>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Configuraciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                        <th>Nombre</th>
                                        <th>Configuraciones</th>
                                    </tr>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Configuraciones</th>
                                    </tr>
                                </tbody>
                            </Table>
                            </Col>
                            </Row>
 */