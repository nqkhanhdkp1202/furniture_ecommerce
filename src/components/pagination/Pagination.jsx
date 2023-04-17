import React, { useState } from "react";
import PropTypes from "prop-types";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="page-pagination">
      <a disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
        <img src="./src/assets/img/shop/prev.png" alt="" />
      </a>
      {pageNumbers.map((page, i) => (
        <a
          key={i}
          className={`${currentPage === page ? "active" : ""}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </a>
      ))}
      <a disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
        <img src="./src/assets/img/shop/next.png" alt="" />
      </a>
    </div>
  );
};

Pagination.propTypes = {};

export default Pagination;
