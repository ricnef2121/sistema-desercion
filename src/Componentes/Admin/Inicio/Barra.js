import React, { Component } from 'react';
import { Col, Panel } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2'
export default class Barra extends Component {
    constructor(props) {
        super(props);
        this.state = {
            charData: {
                labels: [
                    'Poza Rica', 'Coatzintla', 'Tuxpan',
                    'Cazones', 'Papantla', 'Escolin de Olarte'
                ],
                datasets: [
                    {
                        label: 'Population',
                        data: [
                            789456,
                            456123,
                            781231,
                            123456,
                            456123,
                            147258
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                        ]
                    }
                ]
            }
        }
    }
    render() {
        return (
            <div style={{ margin: '0px' }}>
                <Col md={12} style={{paddingTop:'10px', /*backgroundColor: 'green',*/ height: '100%' }}>
                    <Panel style={{height:'200pt',/* boxShadow: '0.01px 0.01px 0.01px black'*//*boxShadow:'0 0 0 0.1rem #000000'*/ }}>
                        <Panel.Body>
                            <Bar
                                data={this.state.charData}
                                //width={100}
                                //height={50}
                                height={250}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio:false
                                    }}
                            />
                        </Panel.Body>
                    </Panel>
                </Col>
            </div>
        );
    }
}