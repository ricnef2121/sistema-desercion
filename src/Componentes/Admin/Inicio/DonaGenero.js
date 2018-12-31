import React, { Component } from 'react';
import { Col,Panel } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';

export default class DonaGenero extends Component {
    constructor(props){
        super(props);
        this.state = {
            charData : {
                labels: [
                    'men',
                    'women'
                ],
                datasets:[
                    {
                      data:[292,175],
                      backgroundColor:[
                          
                          '#A3A0FB',
                          '#EDECFE'
                      ]
                    }
                ]
            }
        }
    }

    render(){
        return(
            <div>
               <Col md={6} style={{/*backgroundColor:'orange',*/height:'100%'}}>
               <Panel>
                   <Panel.Body>
                       <Doughnut data={this.state.charData}
                        options={{
                            cutoutPercentage: 75,
                            title:{
                                display:true,
                                text:'Monitoreo',
                                fontSize:25
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