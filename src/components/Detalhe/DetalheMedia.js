import React from "react";
import "../../App.css";
import { string } from "prop-types";
import { Container, Row, Col } from "react-grid-system";
import { axiosInstance } from "../../config/Axios";
import StarRatingComponent from "react-star-rating-component";
export default class DetalheMediaAvatar extends React.Component {
  constructor() {
    super();
    this.state = {
      medias: [],
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

    const fetchMedias = async medias => {
      const allMedias = medias.map(async item => {
        const media = await axiosInstance.get(
          item.relationships.media.links.related
        );
        return media.data.data;
      });
      const result = (await Promise.all(allMedias)).flat();
      this.setState({
        loading: false,
        medias: result
      });
    };

    await axiosInstance.get(this.props.link).then(async retorno => {
      await fetchMedias(retorno.data.data);
    });
  }

  render() {
    return this.state.loading ? (
      <div></div>
    ) : (
      <div className="container-media">
        <div className="title-media">Mídias:</div>
        <Container xs="content" className="colum-media">
          {this.state.medias ? (
            this.state.medias.map(({ id, attributes }) => (
              <div className="item-media">
                <Row gutterWidth={20}>
                  <Col xs="content" className="column-avatar">
                    <img src={attributes.posterImage.tiny}></img>
                    <StarRatingComponent
                      className="rating"
                      name="rate1"
                      starCount={5}
                      value={(attributes.averageRating / 100) * 5}
                    />
                  </Col>
                  <Col>
                    <div className="title-atribute">
                      {attributes.canonicalTitle}{" "}
                    </div>
                    <div className="synopsis"> {attributes.synopsis} </div>
                  </Col>
                </Row>
              </div>
            ))
          ) : (
            <div />
          )}
        </Container>
      </div>
    );
  }
}

DetalheMediaAvatar.propTypes = {
  link: string
};
