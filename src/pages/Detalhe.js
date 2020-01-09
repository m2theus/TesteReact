import React from "react";
import "../App.css";
import { axiosInstance } from "../config/Axios";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
     
    };
    // const history = useHistory();
  }

  


  componentDidMount() {
    // this.getDados();
  }

  async getDados(page = 0) {
    this.setState({
      loading: true
    });
    console.log(this.state.currentPage);
    const response = await axiosInstance
      .get(
        `/characters?page[limit]=10&page[offset]=${page*
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

    return (
      <div className="main">
      
      </div>
    );
  }
}
