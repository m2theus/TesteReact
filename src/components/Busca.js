import React from 'react';
import { Link } from 'react-router-dom';
import  '../App.css'

export default class Busca extends React.Component{
    constructor() {
        super();
        this.state = {
            dsBusca: ''
        }; 
    }
    handleFNameChange(event){
        this.setState({dsBusca: event.target.value});
    }
    render(
    ){
        return(
            <div className="container-busca">
                <label className="label-busca">Nome do personagem: </label>
                <input className="input-busca" type="text"  value = {this.state.dsBusca} onChange={this.handleFNameChange.bind(this)}/>
            </div>
        );
    }
}