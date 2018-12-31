import React, { Component } from 'react';
import { Col, Panel } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2'
const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};
export default class Dona extends Component {
    render() {
        return (
            <div style={{ margin: '0px' }}>
                <Col md={6} style={{/* backgroundColor: 'gray',*/ height: '100%' }}>
                <Panel>
                <Panel.Body>
                <Doughnut data={data} />
                </Panel.Body>
                </Panel>
                </Col>
            </div>
        );
    }
}