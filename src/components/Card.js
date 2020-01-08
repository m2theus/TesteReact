import React from "react";
import { array, bool } from "prop-types";
import { Container, Row, Col, Hidden } from "react-grid-system";
import "../App.css";
import ObjHeroesListItem from "./CardItem";

export default class Card extends React.Component {
  render() {
    console.log(this.props)
    return ( 
      <Container className="container-card">
        <Row gutterWidth={10}>
          <Col xs={12} md={6} xl={3}>
            <div className="column-card"><label>Personagem</label></div>
          </Col>
          <Col xs={0} md={6} xl={9}>
            <Hidden xs sm>
              <div className="column-card"><label>Descrição</label></div>
            </Hidden>
          </Col>
        </Row>
        {  !this.props.loading && this.props.item.length ? 
        this.props.item.map(item => (
          <ObjHeroesListItem
            item={item}
            key={item.id}
          />
        )) : ''}
      </Container>
    );
  }
}

Card.propTypes = {
  item: array,
  loading:bool
};
