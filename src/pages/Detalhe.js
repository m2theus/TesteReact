import React from "react";
import "../App.css";
import { withRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import DetalhePersonAvatar from "../components/Detalhe/DetalhePersonAvatar";
import DetalheMediaAvatar from "../components/Detalhe/DetalheMedia";
import { FaArrowLeft } from "react-icons/fa";
import { axiosInstance } from "../config/Axios";
class Detalhe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: [],
      loading: true
    };
  }

  componentDidMount() {
    this.getDados();
  }

  async getDados(page = 0) {
    this.setState({
      loading: true
    });

    await axiosInstance
      .get(`/characters/${this.props.match.params.id}`)
      .then(retorno => {
        this.setState({
          loading: false,
          hero: retorno.data.data
        });
      });
  }
  render() {
    return (
      <div className="main">
        {this.state.loading ? (
          <div></div>
        ) : (
          <>
            <Navbar />
            <div className="voltar">
              <FaArrowLeft
                className="arrow-back"
                size="20px"
                onClick={() => this.props.history.push("/")}
              />
            </div>
        
            <DetalhePersonAvatar
              image={
                this.state.hero.attributes.image &&
                this.state.hero.attributes.image.original
              }
              name={this.state.hero.attributes.name}
            />
            
            <div className="descricao-heroe" dangerouslySetInnerHTML={{ __html: this.state.hero.attributes.description }}></div>
            <DetalheMediaAvatar
              link={this.state.hero.relationships.mediaCharacters.links.related}
            />
          </>
        )}
      </div>
    );
  }
}

export default withRouter(Detalhe);
