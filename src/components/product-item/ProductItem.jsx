import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ProductItem = ({product}) => {

  const { addToCart } = useContext(CartContext);

  return (
    <>
      <div className="shop-prod-item">
        <Link to={`/shop/${product.ID}`} className="img-hover-1">
          <img src={product && product.Image} alt=""/>
          <span className="shop-prod-item-hover">
            <span className="btn-2 open-popup" data-rel={4}>
              <span>Quick view</span>
            </span>
            <span className="btn-2" onClick={(e) => addToCart(product,e)}>
              <span>add to cart</span>
            </span>
            <i className="fa fa-heart-o fa-lg" aria-hidden="true" />
          </span>
        </Link>
        <div className="description">
          <article>
            <Link to="/shop/:id">
              <h6 className="h6 hover-1">{product && product.DisplayName}</h6>
            </Link>
            <div className="empty-space h5-xs" />
            {product && product.shortDesc}
          </article>
        </div>
        <span className="price">
          {product && product.Price} $
        </span>
      </div>
    </>
  );
};


ProductItem.propTypes = {
    product: PropTypes.object.isRequired
};


export default ProductItem;
