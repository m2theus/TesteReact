import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Busca from "../components/Busca";
import Paginate from "../components/Paginate";
import "../App.css";
import { axiosInstance } from "../config/Axios";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dados: [],
      paginaAtual: 0,
      loading: false,
      totalCount: 0,
      currentPage: 0,
      dsPesquisa: null
    };
  }

  componentDidMount() {
    this.getDados();
  }

  async getDados() {
    this.setState({
      loading: true
    });
    const response = await axiosInstance
      .get(
        `/characters?page[limit]=10&page[offset]=${this.state.currentPage *
          10}${this.state.dsPesquisa &&
          `&filter[name]=${this.state.dsPesquisa}`}`
      )
      .then(retorno => {
        this.setState({
          dados: retorno.data.data,
          loading: false,
          totalCount: retorno.data.meta.count / 10
        });
      });
  }

  render() {
    const onPageChange = selected => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      this.setState({
        currentPage: selected.selected
      });
      this.getDados();
    };

    const onFilterNameChange = event => {
      const value = event.target.value;

      this.setState({
        dsPesquisa: value,
        currentPage: 0
      });

      this.getDados();
    };

    if (!this.state.dados.length) return <div>Carregando...</div>;

    return (
      <div className="main">
        <Navbar />
        <Busca onChange={onFilterNameChange} />
        <Card item={this.state.dados} loading={this.state.loading} />
        <Paginate
          onPageChange={onPageChange}
          pageCount={this.state.totalCount}
          isFirstPage={this.state.currentPage === 0}
          isLastPage={this.state.currentPage + 1 >= this.state.totalCount}
        />
      </div>
    );
  }
}
