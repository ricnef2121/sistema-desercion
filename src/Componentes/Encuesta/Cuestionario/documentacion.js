import React, { Component } from 'react';

import axios from 'axios'
export default class Documen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            preguntas: []
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
        axios.get(`https://api-rest-crudric.herokuapp.com/api/preguntas`)
            .then(res => {
                const preguntas = (res.data).preguntas
                console.log(preguntas)
                this.setState({
                    preguntas: preguntas
                })
            })
    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    onSubmit = e => {
        e.preventDefault();
        //const arre = [];
        const preguntas = this.state.preguntas;
        
        for(let i=0;i <= preguntas.length; i++){
             console.log(preguntas[i].name)
        }
       

    }


    render() {
       /* const pregunta = this.state.preguntas.map((pregunta,k)=>{
            return  <label key={k}>
                        {pregunta.name}
                             <input
                            name={pregunta.name}
                            type="text"
                            value={pregunta.name}
                            onChange={this.handleInputChange}
                        />
                    </label>
        }) */
       /* const items = [];
        console.log(this.state.preguntas[0])
        for (let i = 0; i <= this.state.preguntas.length; i++) {
            items.push(
                <label key={i}>
                       {this.state.preguntas}
                    </label>
            );
        }*/
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                   {
                       /**
                        * <label>
                        Number of guests:
                             <input
                            name="numberOfGuests"
                            type="number"
                            value={this.state.numberOfGuests}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <label>
                        nuevo
                             <input
                            name="nuevo"
                            type="text"
                            value={this.state.nuevo}
                            onChange={this.handleInputChange}
                        />
                    </label>
                        */
                   } <br />
                    {
                        
                        }
                        
                    <button>submit</button>
                </form>
            </div>
        )
    }
}