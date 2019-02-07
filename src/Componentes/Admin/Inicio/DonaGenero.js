import React, { Component } from 'react';
import { Col,Panel } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';



export default class DonaGenero extends Component {
constructor(props){
    super(props);
    this.state={
        edades:[]
    }
}
    componentDidMount(){
        //trae la cantidad de alumnos que existen 
        //del tipo estudiante separados por cada sexo existente
        axios.get('https://api-rest-crudric.herokuapp.com/api/userByGroupSexo')
        .then(res => {
            const edades = (res.data);
          //  console.log(edades);
            this.setState({
                edades:edades
            })
        })   
    }
    render(){
        const labels = this.state.edades.map(edad=>{
			return edad._id +' '+ edad.conteo
        }) 
        const data = this.state.edades.map(edad=>{
            return edad.conteo
        })
        
        const datosGrafica = {
            /*labels: [
                'men',
                'women'
            ],*/
            labels,
            datasets:[
                {
                  //data:[292,175],
                  data,
                  backgroundColor:[
                      
                    '#EDECFE','#A3A0FB'
                      
                  ]
                }
            ]
		};
        return(
            <div>
               <Col md={4} style={{/*backgroundColor:'orange',*/height:'100%'}}>
               <Panel>
                   <Panel.Body>
                       <Doughnut data={datosGrafica}
                        width={236}
                        options={{
                            cutoutPercentage: 65,
                            title:{
                                display:true,
                                text:'Distribución por genero',
                                fontSize:20
                            },
                            legend:{
                                display:true,
                                position:'bottom'
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