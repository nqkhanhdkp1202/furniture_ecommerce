import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { furnitureAPI } from "../../api/furnitureAPI";
import ProductItem from "../product-item/ProductItem";
import Pagination from "../pagination/Pagination";
import Loader from "../loader/Loader";
import SearchModal from "../search-modal/SearchModal";

const ProductList = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const originalProducts = [...items];

  useEffect(() => {
    setIsLoading(true);
    const getProductList = async () => {
      const params = {};
      let response = null;
      response = await furnitureAPI.getProductsList(params);
      setItems(response.data);
    };
    getProductList();
    setIsLoading(false);
  }, []);

  const productsPerPage  = 6;
  const totalPages = Math.ceil(items.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = items.slice(indexOfFirstProduct, indexOfLastProduct);

  useEffect(() => {
    if (searchTerm === '') {
      setItems(originalProducts);
    } else {
      const filteredProducts = originalProducts.filter(product =>
        product.DisplayName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setItems(filteredProducts);
    }
  }, [searchTerm])
  

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
    {
      isLoading && <Loader />
    }
    {/* <SearchModal onSubmit={handleSearch} searchTerm={searchTerm}/> */}
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
