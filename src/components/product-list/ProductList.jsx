import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { furnitureAPI } from "../../api/furnitureAPI";
import ProductItem from "../product-item/ProductItem";
import Pagination from "../pagination/Pagination";
import Loader from "../loader/Loader";
import SearchModal from "../search-modal/SearchModal";

const ProductList = ({items}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage  = 6;
  const totalPages = Math.ceil(items.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = items.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [currentPage]);


  const handleSearch = event => {
    setSearchTerm(event.target.value);

  };
  console.log();

  return (
    <>
    <div className="empty-space h30-xs" />
      <div className="col-md-9 col-sm-9 pd-x-2">
        <div className="prod-item-wrapper">
          {items &&
            currentProducts.map((e, i) => (
              <ProductItem
                product={e}
                key={i}
              />
            ))}
        </div>
        {items && <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />}
      </div>
    </>
  );
};

ProductList.propTypes = {};

export default ProductList;
