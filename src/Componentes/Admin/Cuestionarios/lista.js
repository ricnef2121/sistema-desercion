import React  from 'react';
import {Image} from 'react-bootstrap'
const Lista = (props) =>(
    <div>
        {
            props.preguntas.map(pregunta => {
                return <tr key={pregunta._id}><td >{pregunta.factor}</td><td >{pregunta.name}</td>
                    <td style={{ padding: '0px' }}>
                        <button
                            style={{
                                backgroundColor: 'transparent', margin: '0px',
                                borderColor: 'transparent', padding: '0px'
                            }}
                            //onClick={()=> this.handleShow2(pregunta.factor,pregunta.name,pregunta._id)}                        
                        >
                            <Image                            
                                style={{ width: '22px', margin: '0px', padding: '0px' }}
                                src={require('../../reutilizables/img/update.png')}
                                responsive 
                                />
                        </button>
                        <button
                            style={{
                                backgroundColor: 'transparent', margin: '0px',
                                borderColor: 'transparent', padding: '0px', marginLeft: '20px'
                            }}
                            //onClick={()=> this.handleShow3(carrer.name,carrer._id)}
                        >
                            <Image
                                style={{ width: '18px', margin: '0px', padding: '0px' }}
                                src={require('../../reutilizables/img/delete.png')}
                                responsive />
                        </button>
                    </td>
                </tr>
            })
    
        }
    </div>
)

export default Lista;