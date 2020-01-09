import React from "react";
import "../../App.css";
import { string } from "prop-types";
import { Row, Col } from "react-grid-system";
import Avatar from "../Avatar";

export default class DetalhePersonAvatar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Col align="center" className="container-detalhe-person">
        <Row xs="content">
          <Avatar src={this.props.image} />
        </Row>
        <Row>
          <div className="avatar-name">{this.props.name}</div>
        </Row>
      </Col>
    );
  }
}

DetalhePersonAvatar.propTypes = {
  image: string,
  name: string
};
