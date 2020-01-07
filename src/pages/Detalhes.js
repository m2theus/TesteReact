import React from 'react';
import md5 from 'js-md5'
import moment from 'moment'

import Navbar from '../components/Navbar';

export default class Detalhes extends React.Component{
    constructor() {
        super();
        this.state = {
            dados: null
        };
    }

    componentDidMount() {
        // this.getDados();
    }

    getDados() {
        const PUBLIC_KEY = 'ccca70f60e79cc9cfe739c029a6c3466';
        const PRIVATE_KEY = 'c4d7c99bf89f4b8e02470afda7d3aa9affa1f26c';
        const API_URL = 'https://gateway.marvel.com/v1/public/comics/';

        const hash = md5.create()
        const timestamp = Number(new Date());

        hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);

        fetch(`${API_URL}${this.props.match.params.id}?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`, {
            method: "GET"
        }).then(res => res.json())
        .then(json => {
            this.setState({
                dados: json.data
            });
          });
    }

    render(){
        if (!this.state.dados)
            return <div className={"loader"}>Carregando...</div>;
        return(
            <div className={"main"}>
                <Navbar />
                <div className={"page-detalhes"}>
                    <div className={"thumb"}>
                        <span className={"date"}>{moment(this.state.dados.results[0].dates[0].date).format('DD-MM-YYYY')}</span>
                        <div className={"image"}>
                            <img src={this.state.dados.results[0].thumbnail.path+'.'+this.state.dados.results[0].thumbnail.extension} className={"img-responsive"} />
                        </div>
                    </div>
                    <div className={"content"}>
                        <div className={"title"}>{this.state.dados.results[0].title}</div>
                        <div className={"description"}>{this.state.dados.results[0].description}</div>
                    </div>
                </div>
            </div>
        );
    }
}