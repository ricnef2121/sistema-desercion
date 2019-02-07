import React, { Component } from 'react';
import { Col, Table, Panel } from 'react-bootstrap';

export default class Tabla extends Component {


    render() {

        //creamos un arreglo vacio para guardar los factores y usarlos como
        //cabezeras de la tabla y se ordenan por sort dentro de la const
        let head = [];
        const i = this.props.groupFactors2.map(group => {
            const is = group.factor;
            return head.push(is);
        })
        const headnew = head.sort();
        //console.error('headnew',headnew)



        //creamos las cabeceras de la tabla por cada factor existente
        const headers = headnew.map((group, k) => {
            return <th key={k} style={{ border: 0 }}>{group}</th>
        })

        //guardandolos es un arreglo llamado semes
        let semes = [];
        const items = this.props.groupSemestres.map(group => {
            //creamos un arreglo para gurdar cada elemto del item datos
            let factores = [];
            //mapeamos cada elemento de item en un nuevo arreglo el cual sera mas facil de manipular
            const dataa = group.datos.map(d => {
                const f = [d.factor, d.conteo];
                //insertamos en el arreglo
                factores.push(f)
            })
            //creamos un objeto el cual contendra toda la informacion la cual sera envia al arreglos semes
            const obj = {
                semestre: parseInt(group.semestre),//convertimos el valor del item a un entero para poder ordenarlo 
                datos: factores.sort()//ordenamos los elemntos de los factores
            }
            // const item = parseInt(group.semestre)
            return semes.push(obj);
        })


        //creamos una nueva constante la cual aplica un sort sobre nuestro arreglo semes,
        //este sort recibe una funcion que ordena los elemntos por orden descendente
        const semesSort = semes.sort((a, b) => {
            return a.semestre - b.semestre;
        })
        //creamos la const tablaitems para mapear cada elemento de la tabla de semestres
        const tablaitems = semesSort.map((se, k) => {
            //por cada elemento de los datos mapeamos un campo de la tabla en el factor que le toca
            const th = se.datos.map((t) => {
                return <th key={t} style={{ border: 0, color: '#707070' }}>{t[1]}</th>
            })
            //devolvemos una fila por cada elemento de semestres es deir por cada semestre
            return <tr key={k} >
                <th style={{ border: 0, color: '#707070' }}>{`${se.semestre}º Semestre`}</th>
                {th}
            </tr>
        })


        return (
            <Col md={7}>
                <Panel>
                    <Panel.Body style={{ paddingLeft: '0px', paddingRight: '0px', paddingTop: '0px', paddingBottom: '0px' }}>
                        <Table responsive>
                            <thead style={{ color: '#A3A6B4', backgroundColor: '#F5F6FA' }}>
                                <tr style={{ border: 0 }}>
                                    <th style={{ border: 0 }}>Semestres</th>
                                    {headers}

                                </tr>
                            </thead>
                            <tbody style={{ fontSize: '12px', fontWeight: '300', border: 0 }}>
                                {tablaitems}
                            </tbody>
                        </Table>
                    </Panel.Body>
                </Panel>
            </Col>
        )
    }
}