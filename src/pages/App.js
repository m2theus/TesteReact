import React from "react";
import Card from "../components/Card/Card";
import Navbar from "../components/Navbar";
import Busca from "../components/Busca";
import Paginate from "../components/Paginate";
import "../App.css";
import { axiosInstance } from "../config/Axios";
import { withRouter } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dados: [],
      paginaAtual: 0,
      loading: false,
      totalCount: 0,
      currentPage: 0,
      dsPesquisa: null,
      hero: []
    };
  }
  onItemClick = hero => {
    this.setState({
      hero: hero
    });

    this.props.history.push(`/detalhe/${hero.id}`);
  };

  componentDidMount() {
    this.getDados();
  }

  async getDados(page = 0) {
    this.setState({
      loading: true
    });
    await axiosInstance
      .get(
        `/characters?page[limit]=10&page[offset]=${page * 10}${this.state
          .dsPesquisa && `&filter[name]=${this.state.dsPesquisa}`}`
      )
      .then(retorno => {
        this.setState({
          dados: retorno.data.data,
          loading: false,
          totalCount: retorno.data.meta.count / 10
        });
      });
  }

  onPageChange = selected => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    this.getDados(selected.selected);
  };

  onFilterNameChange = event => {
    const value = event.target.value;

    this.setState({
      dsPesquisa: value,
      currentPage: 0
    });

    this.getDados();
  };

  render() {
    if (!this.state.dados.length) return <div>Carregando...</div>;

    return (
      <div className="main">
        <Navbar />
        <Busca onChange={this.onFilterNameChange} />
        <Card
          onItemClick={this.onItemClick}
          item={this.state.dados}
          loading={this.state.loading}
        />
        <Paginate
          onPageChange={this.onPageChange}
          pageCount={this.state.totalCount}
          isFirstPage={this.state.currentPage === 0}
          isLastPage={this.state.currentPage + 1 >= this.state.totalCount}
        />
        <div className="footer"></div>
      </div>
    );
  }
}

export default withRouter(App);
