import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { furnitureAPI } from "../../api/furnitureAPI";
import ProductItem from "../product-item/ProductItem";
import Pagination from "../pagination/Pagination";
import Loader from "../loader/Loader";
import SearchModal from "../search-modal/SearchModal";

const ProductList = ({ list }) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const storeProduct = useRef([])
    const searchRef = useRef("")
    const idTimeOut = useRef(0)

    useEffect(() => {
        setIsLoading(true);
        storeProduct.current = list
        setItems(storeProduct.current)
        clearTimeout(idTimeOut.current)
        idTimeOut.current = setTimeout(() => { setIsLoading(false); }, 1000)
    }, [list]);


    const productsPerPage = 6;
    const totalPages = Math.ceil(items?.length / productsPerPage);//không kiểm items trước, nó mà null là crash luôn cả hệ thống
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = items?.slice(indexOfFirstProduct, indexOfLastProduct);//

    useEffect(() => {
        if (searchTerm === '') {
            setItems(storeProduct.current);
            clearTimeout(searchRef.current)
        } else {
            clearTimeout(searchRef.current)
            searchRef.current = setTimeout(() => {
                const filteredProducts = storeProduct.current.filter(product =>
                    product.DisplayName.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setItems(filteredProducts);
            }, 1000)
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

    return (
        <>
            {
                isLoading && <Loader />
            }
            <SearchModal onSubmit={handleSearch} searchTerm={searchTerm} />
            <div className="empty-space h30-xs" />
            <div className="col-md-9 col-sm-9 pd-x-2">
                <div className="prod-item-wrapper">
                    {items &&
                        currentProducts?.map((item, idx) => (
                            <ProductItem
                                product={item}
                                key={idx}
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
