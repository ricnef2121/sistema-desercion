import React, { Component } from 'react';
import { Col, Panel, DropdownButton, MenuItem, Button,Row } from 'react-bootstrap';
import { Line } from 'react-chartjs-2'
export default class Barra extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            labels: []
        }
    }


    render() {


        //  console.log('datathis',this.state.data)
        const data = this.props.fechas.map(fecha => {
            return fecha.conteo
        })

        const labels = this.props.fechas.map(fecha => {
            return fecha._id.dia
        })

        let months = ["Enero", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        const charData = {
            //labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AG"]
            labels
            ,
            datasets: [{
                label: months[this.props.mes],
                borderColor: "#80b6f4",
                pointBorderColor: "#80b6f4",
                pointBackgroundColor: "#80b6f4",
                pointHoverBackgroundColor: "#80b6f4",
                pointHoverBorderColor: "#80b6f4",
                pointBorderWidth: 5,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 1,
                pointRadius: 3,
                fill: false,
                borderWidth: 3,
                data
                /*data: [789456,
                    456123,
                    781231,
                    123456,
                    456123,
                    147258, 0, 162100,]*/
            }]

        }
        return (
            <div style={{ margin: '0px' }}>
                <Col md={12} style={{ paddingTop: '10px', /*backgroundColor: 'green',*/ height: '100%' }}>
                    <Panel style={{ /* boxShadow: '0.01px 0.01px 0.01px black'*//*boxShadow:'0 0 0 0.1rem #000000'*/ }}>
                        <Panel.Heading style={{ backgroundColor: '#ffffff' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '20px' }}>


                                <div style={{ fontSize: '15px', fontWeight: '500' }}>
                                    Distribución de alumnos - {this.props.stateGrafica}
                                </div>


                                <div style={{display:'flex'}}>
                                <Row>
                                    <div>
                                        <DropdownButton
                                            id="dropdown" title={this.props.stateGrafica}
                                            pullRight={true}
                                            onSelect={this.props.selectedGraficaFechas}
                                            style={{ height: '20px', paddingTop: '0px', color: 'green' }}>
                                            <MenuItem key="1" eventKey="Ultimos 30 dias">Ultimos 30 dias</MenuItem>
                                            <MenuItem key="2" eventKey="Mes actual">Mes actual</MenuItem>
                                        </DropdownButton>
                                    </div>

                                    <div>
                                        <Button
                                        onClick={this.props.unduhPdf.bind(this)}
                                         style={{ height: '20px', paddingTop: '0px', color: 'green' }}
                                        >Generar reporte</Button>
                                    </div>
                                    </Row>
                                </div>
                                
                            </div>
                        </Panel.Heading>
                        <Panel.Body>
                            <Line
                                data={charData}
                                height={250}
                                options={{
                                    legend: {
                                        position: "bottom"
                                    },
                                    scales: {
                                        yAxes: [{
                                            ticks: {
                                                fontColor: "rgba(0,0,0,0.5)",
                                                fontStyle: "bold",
                                                beginAtZero: true,
                                                maxTicksLimit: 5,
                                                padding: 20
                                            },
                                            gridLines: {
                                                drawTicks: false,
                                                display: false
                                            }
                                        }],
                                        xAxes: [{
                                            gridLines: {
                                                zeroLineColor: "transparent"
                                            },
                                            ticks: {
                                                padding: 20,
                                                fontColor: "rgba(0,0,0,0.5)",
                                                fontStyle: "bold"
                                            }
                                        }]
                                    },
                                    responsive: true,
                                    maintainAspectRatio: false
                                }}

                            />
                        </Panel.Body>
                    </Panel>
                </Col>
            </div>
        );
    }
}