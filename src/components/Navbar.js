import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Row, Col, Hidden } from "react-grid-system";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
  }

  componentDidMount() {
    const handler = e => this.setState({ matches: e.matches });
    window.matchMedia("(min-width: 360px)").addListener(handler);
  }
  render() {
    return (
      <div className="container-navbar">
        <Row justify="between">
          <Col className="container-titles-header">
            <div
              className={
                this.state.matches ? "big-title-header" : "min-title-header"
              }
            >
              BUSCA KITSU
            </div>
            <div
              className={
                this.state.matches
                  ? "big-subtitle-header"
                  : "min-subtitle-header"
              }
            >
              TESTE FRONT-END
            </div>
          </Col>
          <Col lg="content">
            <Hidden xs sm md lg>
              <div className="participante-header">MATHEUS</div>
            </Hidden>
          </Col>
        </Row>
        <div className="bar"></div>
      </div>
    );
  }
}
