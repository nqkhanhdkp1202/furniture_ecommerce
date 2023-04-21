
import { array } from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import { furnitureAPI } from "../api/furnitureAPI";
import React, { useEffect, useState } from "react";
import { furnitureAPI } from "../api/furnitureAPI";
import Loader from "../components/loader/Loader";
import ProductList from "../components/product-list/ProductList";
import SearchModal from "../components/search-modal/SearchModal";
import Sidebar from "../components/sidebar/Sidebar";

const Shop = () => {
    const [items, setItems] = useState([]);
    const store = useRef([])

    useEffect(() => {
        const getProductList = async () => {
            const params = {};
            let response = null;
            response = await furnitureAPI.getProductsList(params);
            store.current = response.data
            setItems(response.data);
        };
        getProductList();
    }, []);

    const handleChangeDataWithFilter = (products, filterValue) => {
        if (filterValue.length === 0) {
            setItems(store.current)
            return
        }
        // setItems(store.current);

        const filteredProducts =
            products && products.length ?
                products.filter(product => filterValue.includes(`${product.IDCategory}`)) :
                []
        // console.log(products, filterValue, filteredProducts)
        setItems(filteredProducts);
    }

    return (
        <>
            {/* content */}
            <div id="content">
                <div className="shop">
                    {/* products */}
                    <div className="container">
                        <div className="empty-space h90-xs h100-md" />
                        <div className="empty-space h0-xs h80-md" />
                        <div className="row text-center">
                            <div className="col-xs-12">
                                <h1 className="h1-2">Products</h1>
                            </div>
                            <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12 col-xs-offset-0">
                                <div className="empty-space h20-xs" />
                            </div>
                        </div>
                        <div className="empty-space h0-xs" />
                        <div className="row">
                            <ProductList
                                list={items}
                            />
                            <Sidebar
                                list={store.current} handleChangeDataWithFilter={handleChangeDataWithFilter}
                            />
                        </div>
                    </div>
                </div>
                <div className="empty-space h55-xs h100-md" />
                <div className="empty-space h0-xs h30-md" />
            </div>
            {/* content */}
        </>
    );
};

export default Shop;
