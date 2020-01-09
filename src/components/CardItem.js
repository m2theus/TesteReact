import React from "react";
import { object, func } from "prop-types";
import styled from "styled-components";
import { Row, Col, Hidden } from "react-grid-system";
import Avatar from "../components/Avatar";
import HTMLEllipsis from "react-lines-ellipsis/lib/html";

const Item = styled(Row)`
  padding-top: 24px;
  padding-bottom: 24px;
  cursor: pointer;
  color: rgba(78,	78,	78, 1);
  border-bottom: 2px solid rgba(212, 32, 38, .1);
  margin: 0 !important;
  &:hover {
    background: rgba(212, 32, 38, .1);
  }
  height: 112px !important;
`;

const ItemColuna = styled(Col)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 112px !important;
`;

const ListItem = ({ item, onItemClick }) => {
  return (
    <Item onClick={() => onItemClick(item)}>
      <ItemColuna xs={12} md={6} xl={3}>
        <Row align="center">
          <Col xs="content">
            { <Avatar
              src={item.attributes.image && item.attributes.image.original}
            /> }
          </Col>
          <Col>{item.attributes.name}</Col>
        </Row>
      </ItemColuna>
      <ItemColuna xs={0} md={6} xl={9}>
        <Hidden xs sm>
          {item.attributes.description && item.attributes.description.length ? (
             <HTMLEllipsis
             maxLine="3"
             unsafeHTML={item.attributes.description}
           />
          ) : (
            "Este personagem não possui descrição."
          )}
        </Hidden>
      </ItemColuna>
    </Item>
  );
};

ListItem.propTypes = {
  item: object,
  onItemClick: func
};

export default ListItem;