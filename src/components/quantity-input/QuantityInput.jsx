import React from "react";
import PropTypes from "prop-types";

const QuantityInput = ({
  product,
  quantity,
  onQuantityChange,
  decreaseQuantity,
  increaseQuantity,
}) => {
  return (
    <div className="quantity-wrapper">
      <div className="quantity">
        <input
          type="number"
          value={quantity}
          min="0"
          onChange={(event) => onQuantityChange(product, event)}
        />
        <i
          className="fa fa-caret-left"
          aria-hidden="true"
          onClick={() => decreaseQuantity(product.ID)}
        />
        <i
          className="fa fa-caret-right"
          aria-hidden="true"
          onClick={() => increaseQuantity(product)}
        />
      </div>
    </div>
  );
};

QuantityInput.propTypes = {};

export default QuantityInput;
