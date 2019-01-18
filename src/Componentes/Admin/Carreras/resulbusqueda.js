import React, {Component} from 'react';
import {Col,Panel,Table,Image} from 'react-bootstrap';
import ModalUpdate from './ModalUpdate';
import ModalDelete from './ModalDelete';
import axios from 'axios';

export default class ResultadoBusqueda extends Component{
    constructor(props){
        super(props);
        //this.setcarreras=this.setcarreras.bind(this);
        this.handleShow2 = this.handleShow2.bind(this);       
        this.handleClose2 = this.handleClose2.bind(this);        
        this.handleShow3 = this.handleShow3.bind(this);
        this.handleClose3 = this.handleClose3.bind(this);        
        this.onChangeName = this.onChangeName.bind(this);
        this.onload = this.onload.bind(this);
        this.getRepsonse=this.getRepsonse.bind(this);
        
        this.state={
           carreras2:[],
           show2:false,
           show3:false,
           itemName:'',
           itemId:'',
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            carreras2:nextProps.newcarreras

        });
    }

    handleClose2() {
        this.setState({ show2: false });
    }

    handleShow2(item1,item2) {
        this.setState({ 
            show2: true,
            itemName:item1,
            itemId:item2
            
         });
       
    }

    handleShow3(item1,item2) {
        this.setState({ 
            show3: true,
            itemName:item1,
            itemId:item2
         });
    }
    handleClose3() {
        this.setState({ show3: false });
    }

    onChangeName = (e)=> {
        this.setState({
          name: e.target.name.value
        });
      }

      getRepsonse(result){
        this.setState({result:result})
    }

    onload = e => {
        axios.get(`https://api-rest-crudric.herokuapp.com/api/carreras`)
            .then(res => {
                const carreras = (res.data).carreras;
                // console.log(carreras);
                this.setState({
                    carreras: carreras
                })
            })
      }

    render(){
        const carreras = this.state.carreras2.map((carrer,k) => {
            return <tr key={k}><td >{carrer.name}</td>
                <td style={{ padding: '0px' }}>
                    <button
                        style={{
                            backgroundColor: 'transparent', margin: '0px',
                            borderColor: 'transparent', padding: '0px'
                        }}
                        onClick={()=> this.handleShow2(carrer.name,carrer._id)}
                        
                    >
                        <Image
                            
                            style={{ width: '22px', margin: '0px', padding: '0px' }}
                            src={require('../../reutilizables/img/update.png')}
                            responsive />
                    </button>
                    <button
                        style={{
                            backgroundColor: 'transparent', margin: '0px',
                            borderColor: 'transparent', padding: '0px', marginLeft: '20px'
                        }}
                        onClick={()=> this.handleShow3(carrer.name,carrer._id)}
                    >
                        <Image
                            style={{ width: '18px', margin: '0px', padding: '0px' }}
                            src={require('../../reutilizables/img/delete.png')}
                            responsive />
                    </button>
                </td>
            </tr>//<li key={k}>{carrer.name}</li>

        });
        return(
            
            <Col md={12} hidden={this.props.hidden} style={{ paddingTop: '10px', height: '100%' }}>
            <Panel >
                <Panel.Heading
                
                style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    backgroundColor: 'white', borderColor: '#DDDDDD', font: 'Gill Sans MT', fontSize: '25px',
                    fontWeight: 'bold', color: 'black'
                }}
                >Coincidencias Encontradas</Panel.Heading>
                <Panel.Body
                style={{ padding: '0px' }}
                >
                 <Table responsive>
                                <thead style={{ color: '#A3A6B4', backgroundColor: '#F5F6FA' }}>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Configuraciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   {carreras}
                                </tbody>
                            </Table>
                </Panel.Body>
            </Panel>
            <ModalUpdate 
            itemName={this.state.itemName} 
            itemId={this.state.itemId} 
            onChangeName={this.onChangeName} 
            onHide={this.handleClose2} 
            show={this.state.show2} 
            callback={this.getRepsonse} 
            onload={this.onload}
            showFalse={this.props.showFalse}
            ></ModalUpdate>

            <ModalDelete 
            itemName={this.state.itemName} 
            itemId={this.state.itemId} 
            show3={this.state.show3} 
            onHide3={this.handleClose3}
            onload={this.onload}
            showFalse={this.props.showFalse}
            ></ModalDelete> 
            </Col>
        );
    }
}