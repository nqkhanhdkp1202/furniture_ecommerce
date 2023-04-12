import React from "react";
import PropTypes from "prop-types";

const Item = (props) => {

    const {image, name, desc, price} = props;

  return (
    <div className="shop-prod-item">
      <a href="shopdetail.html" className="img-hover-1">
        <img src={image} alt="" />
        <span className="shop-prod-item-hover">
          <span className="btn-2 open-popup" data-rel={4}>
            <span>Quick view</span>
          </span>
          <span className="btn-2">
            <span>add to cart</span>
          </span>
          <i className="fa fa-heart-o fa-lg" aria-hidden="true" />
        </span>
      </a>
      <div className="description">
        <article>
          <a href="shopdetail.html">
            <h6 className="h6 hover-1">{name}</h6>
          </a>
          <div className="empty-space h5-xs" />
          <p>{desc}</p>
        </article>
      </div>
      <span className="price">
        {price}<sup>$$</sup>
      </span>
    </div>
  );
};

Item.propTypes = {
    image : PropTypes.string,
    name : PropTypes.string.isRequired,
    desc: PropTypes.string,
    price: PropTypes.string,
    onclick: PropTypes.func,
};

export default Item;
