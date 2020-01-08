import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Busca from "../components/Busca";
import Paginate from "../components/Paginate";
import "../App.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dados: [],
      paginaAtual: 0,
      loading: false
    };
  }

  componentDidMount() {
    this.getDados();
  }

  getDados() {
    this.setState({
      loading: true
    });
    const API_URL =
      "https://kitsu.io/api/edge/characters?page%" +
      this.state.paginaAtual +
      "Blimit%5D=10&page%5Boffset%5D=10";

    fetch(`${API_URL}`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(json => {
        this.setState({
          dados: json.data
        });
        console.log(this.state);
        this.setState({
          loading: false
        });
      });
  }

 onPageChange({ selected: currentPage })  {
    
  };

  render() {
    if (!this.state.dados.length) return <div>Carregando...</div>;

    return (
      <div className="main">
        <Navbar />
        <Busca />
        <Card item={this.state.dados} loading={this.state.loading} />
        <Paginate onPageChange={this.onPageChange}
          pageCount={30}
          isFirstPage={true}
          isLastPage={false}/>
        {/* {this.state.dados.results.map((item, index) => 
                        <Card key={Math.random()} item={item} />
                    )} */}
      </div>
    );
  }
}
