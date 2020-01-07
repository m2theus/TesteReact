import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Container, Row, Column} from './grid/grid'
import  '../App.css'

export default class Card extends React.Component {
    render(){
        return(
            <Container>
                <Row>
                    <Column className="column-card" mobile='3' ><label>Personagem</label> </Column>
                    <Column className="column-card" mobile='3'> <label>Séries</label></Column>
                    <Column className="column-card" mobile='6'> <label>Eventos</label></Column>
                </Row>
                <Row className="linha-card">
                    <Column  className="item-card" mobile='3'><label>TOny stark</label> </Column>
                    <Column className="item-card" mobile='3'> <label>Batman</label></Column>
                    <Column  className="item-card" mobile='6'> <label>lelele</label></Column>
                </Row>
            </Container>
        );
    }
}

Card.propTypes = {
    item: PropTypes.object
}