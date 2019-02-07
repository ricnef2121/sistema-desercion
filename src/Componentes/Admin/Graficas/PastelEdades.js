import React, { Component } from 'react'; 
import { Col, Panel, Row, Table } from 'react-bootstrap';
import { Pie } from 'react-chartjs-2'

export default class PastelEdades extends Component {

    render() {

        const labels = this.props.groupEdades.map(group=>{
            return group._id.edad
        })
        //console.log('labels',labels)

        const data = this.props.groupEdades.map(group=>{
            return group.conteo
        })
        //console.log('data',data)
        const backgroundColor = [

            '#D855A3', '#F2C955',
            '#D6BFCD', '#84E661',
            '#FF6565', '#6D92CB',
            '#2699FB','#d9bb93',
            '#3e4e59','#c2e7f2',
            '#008c72','#02a676'

        ]
        const Resumen = this.props.groupEdades.map((group,k)=>{
            //group._id.edad
            return <tr >
            <th style={{ border: 0, color: '#43425D',display:'flex',alignItems:'center',paddingTop:0 }}>
                <div id="redonda"
                    style={{
                        width: '14px',
                        height: '14px',
                        borderRadius: '50%',
                        border: `solid 2.5px ${backgroundColor[k]}`,
                        overflow: 'hidden'
                    }}></div>
                <div style={{paddingLeft:'5px'}}>{group._id.edad}</div>
            </th>                                                                                        
        </tr>
        })

        const legendas = this.props.groupEdades.map((group,k)=>{
            return <Col key={k} xs={6} md={6} style={{display:'flex',alignItems:'center'}}//style={{backgroundColor:`${backgroundColor[k]}`}}
            ><div 
            style={{
                width: '14px',
                height: '14px', 
                borderRadius: '50%',
                border: `solid 2.5px ${backgroundColor[k]}`,
                overflow: 'hidden'
            }}></div>
            <div style={{paddingLeft:'7px'}}>{group._id.edad}</div>
            </Col>
        })


        const datosGrafica = {
            labels,
            //labels: ['Personal', 'Socia'],
            datasets: [
                {
                   // data: [292, 175],
                    data,
                    backgroundColor
                }
            ]
        };

        return (
            <Col md={5}>
                <Panel>

                    <Panel.Body>
                        <Row>
                            <Col md={12} style={{ fontSize: '15px', fontWeight: '500', paddingBottom: '10px' }}>
                                Distribucion de edades
                            </Col>
                            <Col md={7} style={{ marginTop: 0, marginRight: 0, paddingRight: 0, paddingLeft: 0, paddingBottom: 1 }}>
                                <Pie data={datosGrafica}
                                    width={200}
                                    options={{
                                        //height:'10000',

                                        legend: {
                                            display: false,

                                        }
                                    }}
                                />
                            </Col>
                            <Col md={5} >
                            <Row>
                                {legendas}
                            </Row>
                                {/*<Table style={{ border: 0 }}>
                                    
                                    <tbody style={{ fontSize: '12px', fontWeight: '300', border: 0,display:'felx',justifyContent:'space-between' }}>                                        
                                        {Resumen}                                       
                                    </tbody>
                                </Table>*/}
                            </Col>
                        </Row>

                    </Panel.Body>
                </Panel>
            </Col>
        )
    }
}

/**
 * <div id="redonda"
                        style={{
                            width: '14px',
                            height: '14px',
                            borderRadius: '50%',
                            border: `solid 2.5px red`,
                            overflow: 'hidden'
                        }}

                    ></div>
 */