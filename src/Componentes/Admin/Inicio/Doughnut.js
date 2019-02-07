import React, { Component } from 'react';
import { Col, Panel, DropdownButton, MenuItem } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2'

/**
 *  <DropdownButton id="dropdown-basic-button" title="Local" button style={{ height: '20px', paddingTop: '0px', color: 'green' }}>
									
									</DropdownButton>
 */

export default class Dona extends Component {
	constructor(props) {
		super(props);

		this.state = {
			labels: []
		}
	}

	
	render() {
		//console.log(direccionesUser[0]._id[0]);
		const labels = this.props.direccionesUser.map(direccion => {
			return `${direccion._id} ${direccion.conteo} Alumnos`
		})
		//console.log(direccionesUser[0].conteo);
		const data = this.props.direccionesUser.map(direccion => {
			return direccion.conteo
		})

		const dataGrafica = {
			labels,
			datasets: [{
				//data: [300, 50, 100,100],
				data,
				backgroundColor: [
					'#FF6384',
					'#36A2EB',
					'#FFCE56',
					'#cc65fe'
				],
				hoverBackgroundColor: [
					'#FF6384',
					'#36A2EB',
					'#FFCE56',
					'#cc65fe'
				]
			}]
		};
		return (
			<div style={{ margin: '0px' }}>
				<Col md={4} style={{/* backgroundColor: 'gray',*/ height: '100%' }}>
				
					<Panel>
						<Panel.Body>
							<div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '20px' }}>
								<div style={{fontSize: '15px',fontWeight:'500'}}> 
									Distribución de alumnos {this.props.stateResidente}
								</div>
								<div>
								<DropdownButton 
								id="dropdown" title={this.props.stateResidente}
								onSelect={this.props.selectedResidente} 								
								  style={{ height: '20px', paddingTop: '0px', color: 'green' }}>
								<MenuItem  key="1" eventKey="Local">Local</MenuItem>
								<MenuItem  key="2" eventKey="Foraneo">Foraneo</MenuItem>
								</DropdownButton>
								
								</div>
							</div>
							<Doughnut data={dataGrafica}
								options={{
									cutoutPercentage: 60,
									title: {

										display: false,
										text: 'Distribución de alumnos',
										fontSize: 20,



									},
									legend: {
										display: true,
										position: 'right',
										labels: {

											boxWidth: 15,


										}
										//border-radius:80px;
										//borderRadius:'15px'
									}

								}}
							/>
							
						</Panel.Body>
					</Panel>
				</Col>
			</div>
		);
	}
}