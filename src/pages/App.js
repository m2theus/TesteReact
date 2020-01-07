import React from 'react';
import md5 from 'js-md5'

import Card from '../components/Card';
import Navbar from '../components/Navbar';
import Busca from '../components/Busca';
import '../App.css'
import {Container, Row, Column} from '../components/grid/grid'
export default class App extends React.Component{
    constructor() {
        super();
        this.state = {
            dados: null,
            paginaAtual:0
        };
    }

    componentDidMount() {
        this.getDados();
    }

    getDados() {
        const API_URL = 'https://kitsu.io/api/edge/characters?page%' + this.state.paginaAtual + 'Blimit%5D=10&page%5Boffset%5D=10';
       
        fetch(`${API_URL}`, {
            method: "GET"
        }).then(res => res.json())
        .then(json => {
            this.setState({
                dados: json.data
                
            });
            console.log(this.state);
          });
    }

    render() {
        if (!this.state.dados)
            return <div >Carregando...</div>;
        
        return(
            <div className="main">
                 <Container>  <Navbar />
                <Busca />
                <Card />
                </Container>
              
                    {/* {this.state.dados.results.map((item, index) => 
                        <Card key={Math.random()} item={item} />
                    )} */}
                
            </div>
        );
    }
}