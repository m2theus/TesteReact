import styled from 'styled-components';


export const Container = styled.div`
    max-width: 1280px;
    padding-right: 15px;
    padding-left: 15px;
    box-sizing: border-box;
    &:before,
    &:after {
        content: " ";
        display:table;
    }
    &:after {
        clear:both;
    }

    `;

export const Row = styled.div `
    width: 100%;
    height: auto;
    float: left;
    box-sizing: border-box;
    &:before,
    &:after {
        content: " ";
        display:table;
    }
    &:after {
        clear:both;
    }


    `;


export const Column = styled.div `
    float:left;
    padding: .25rem;
    min-height: 1px;
    box-sizing: border-box;
    @media only screen and (min-width: 360px) {
        width: ${props => (props.mobile ? (props.mobile / 12) * 100 : '8:33')}%;
    }
    @media only screen and (min-width: 720px) {
        width: ${props => (props.desktop ? (props.desktop / 12) * 100 : '8:33')}%;
    }
    `;
