import React from "react";
import ProductList from "../components/product-list/ProductList";
import SearchModal from "../components/search-modal/SearchModal";
import Sidebar from "../components/sidebar/Sidebar";

const Shop = () => {

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
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
            </div>
            <div className="empty-space h0-xs" />
            <div className="row">
              <ProductList />
              <Sidebar />
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
