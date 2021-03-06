import React from "react";
import { func, bool, number } from "prop-types";
import ReactPaginate from "react-paginate";
import "../App.css";
import styled from "styled-components";

export default class Paginate extends React.Component {
  render() {
    return (
      <div className="container-paginate">
        <ReactPaginate
          pageCount={this.props.pageCount}
          pageRangeDisplayed={2}
          marginPagesDisplayed={window.innerWidth > 992 ? 1 : 0}
          previousLabel={<ArrowLeft opaque={this.props.isFirstPage} />}
          nextLabel={<ArrowRigth opaque={this.props.isLastPage} />}
          breakClassName="paginate-break"
          onPageChange={this.props.onPageChange}
          nextClassName="paginate-next"
          containerClassName="paginate-container"
          pageClassName="paginate-item"
          activeClassName="paginate-active"
        />
      </div>
    );
  }
}

export const ArrowLeft = styled("div")`
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  opacity: 0.32;
  cursor: pointer;
  border-right: 12px solid rgba(212, 32, 38, 1);
`;

export const ArrowRigth = styled("div")`
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  opacity: 0.32;
  cursor: pointer;
  border-left: 12px solid rgba(212, 32, 38, 1);
`;

Paginate.propTypes = {
  onPageChange: func,
  pageCount: number,
  isFirstPage: bool,
  isLastPage: bool
};
