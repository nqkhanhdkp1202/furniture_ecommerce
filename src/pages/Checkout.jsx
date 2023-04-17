import React, { useContext, useEffect, useState } from "react";
import { Link, redirect } from "react-router-dom";
import { furnitureAPI } from "../api/furnitureAPI";
import CartModal from "../components/cart-modal/CartModal";
import QuantityInput from "../components/quantity-input/QuantityInput";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Checkout = () => {
  const [tabEntry, setTabEntry] = useState(false);
  const {
    cartItems,
    addToCart,
    removeFromCart,
    calculateTotal,
    handleQuantityChange,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const [shipment, setShipment] = useState([]);
  const [payment, setPayment] = useState([]);


  const handleSwitchPayment = () => {
    setTabEntry(true);
  };

  const handleSwitchDeli = () => {
    setTabEntry(false);
  };

  useEffect(() => {
    const getShipmentList = async () => {
      try {
        const params = {};
        const response = await furnitureAPI.getShipmentList(params);
        if (response.data) {
          setShipment(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getShipmentList();
  }, []);

  useEffect(() => {
    const getPaymentList = async () => {
      try {
        const params = {};
        const response = await furnitureAPI.getPaymentList(params);
        if (response.data) {
          setPayment(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getPaymentList();
  }, []);

  console.log(payment);

  return (
    <>
      <div id="content">
        <div className="shop">
          <div className="container">
            <div className="row">
              <div className="empty-space h90-xs h100-md" />
              <div className="empty-space h0-xs h80-md" />
              <div className="row text-center">
                <div className="col-xs-12">
                  <h1 className="h1-2">Checkout</h1>
                </div>
                <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12 col-xs-offset-0">
                  <div className="empty-space h20-xs" />
                  <p>
                    Curabitur ultricies semper eleifend. Pellentesque molestie
                    purus non something else not tempus bibendum mattis making
                    something
                  </p>
                </div>
              </div>
            </div>
            <div className="empty-space h25-xs h55-md" />
            <div className="row">
              <div className="col-xs-12">
                <div className="tabs-block">
                  <div
                    className={`tab-menu ${!tabEntry && "active"}`}
                    onClick={handleSwitchDeli}
                  >
                    01 Delivery
                  </div>
                  <div
                    className={`tab-menu ${tabEntry && "active"}`}
                    onClick={handleSwitchPayment}
                  >
                    02 Payment
                  </div>
                  <div className="empty-space 15-xs h35-md" />
                  <div
                    className="tab-entry"
                    style={{ display: `${!tabEntry ? "block" : "none"} ` }}
                  >
                    <form>
                      <h4 className="h4">Shipping info</h4>
                      <div className="empty-space h25-xs h30-md" />
                      <div className="input-wrapper">
                        <div className="input-style half">
                          <input
                            id="inputFirstName"
                            name="name"
                            type="text"
                            className="input"
                            required=""
                          />
                          <label htmlFor="inputFirstName">First Name</label>
                        </div>
                        <div className="input-style half half-right">
                          <input
                            id="inputLastName"
                            name="name"
                            type="text"
                            className="input"
                            required=""
                          />
                          <label htmlFor="inputLastName">Last Name</label>
                        </div>
                        <div className="input-style half">
                          <input
                            id="inputEmail"
                            name="email"
                            type="text"
                            className="input"
                            required=""
                          />
                          <label htmlFor="inputEmail">E-mail</label>
                        </div>
                        <div className="input-style half half-right">
                          <input
                            id="inputPhoneNumber"
                            name="phonenumber"
                            type="text"
                            className="input"
                            required=""
                          />
                          <label htmlFor="inputPhoneNumber">Phone Number</label>
                        </div>
                        <div className="input-style third">
                          <input
                            id="inputZipCode"
                            name="zipcode"
                            type="text"
                            className="input"
                            required=""
                          />
                          <label htmlFor="inputZipCode">ZIP Code</label>
                        </div>
                        <select
                          name="country"
                          className="select-box third third-right"
                        >
                          <option disabled="" selected="">
                            Country
                          </option>
                          <option value="country1">Country1</option>
                          <option value="country2">Country2</option>
                          <option value="country3">Country3</option>
                          <option value="country4">Country4</option>
                        </select>
                        <select name="city" className="select-box">
                          <option disabled="" selected="">
                            City
                          </option>
                          <option value="city1">City1</option>
                          <option value="city2">City2</option>
                          <option value="city3">City3</option>
                          <option value="city4">City4</option>
                        </select>
                        <div className="input-style">
                          <input
                            id="inputAddress"
                            name="address"
                            type="text"
                            className="input"
                            required=""
                          />
                          <label htmlFor="inputAddress">Address</label>
                        </div>
                      </div>
                      <div className="empty-space h15-xs h30-md" />
                      <h4 className="h4">Shipping Method</h4>
                      <div className="empty-space h15-xs h15-md" />
                      <div className="radio-list" style={{display: 'flex'}}>
                      {shipment.map((e, i) => (
                        <div key={i} className="radio-item">
                          <label className="radio">
                            <input type="radio" name={1} defaultChecked="" />
                            <span className="text">
                              {e.DisplayName}
                              <span>{e.Fee}$</span>
                            </span>
                          </label>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tem por incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </div>
                      ))}
                      </div>
                      <div className="empty-space h5-xs h35-md fl" />
                      <div className="text-center btn-inline">
                        <div className="btn-wrap">
                          <a
                            onClick={handleSwitchPayment}
                            className="btn-1 border"
                          >
                            <span>CONFIRM (GO TO PAYMENT)</span>
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div
                    className="tab-entry"
                    style={{ display: `${tabEntry ? "block" : "none"} ` }}
                  >
                    {cartItems.map((e, i) => (
                      <div className="basket-item" key={i}>
                        <a className="img-hover-2">
                          <img src={e.Image} alt="" />
                        </a>
                        <div className="description">
                          <article>
                            <a>
                              <h6 className="h6 hover-1">{e.DisplayName}</h6>
                            </a>
                            <p>{e.MoreInfo}</p>
                          </article>
                        </div>
                        <div className="quantity-wrapper">
                          <div className="quantity">
                            <p>{e.quantity}</p>
                          </div>
                        </div>
                        <div className="price">
                          <span>{e.Price}</span>
                        </div>
                      </div>
                    ))}

                    <div className="empty-space 15-xs h35-md" />
                    <form>
                      <h4 className="h4">Payment Method</h4>
                      <div className="empty-space h15-xs h15-md" />
                      <div className="radio-list" style={{display: "flex"}}>
                        {
                          payment.map((e,i) => (
                            <div className="radio-item">
                            <label className="radio">
                              <input type="radio" name={2} defaultChecked="" />
                              <span className="text">{e.DisplayName}</span>
                            </label>
                          </div>
                          ))
                        }
                      </div>
                      <div className="empty-space h15-xs h45-md fl" />
                      <div className="empty-space h15-xs h30-md" />
                      <div className="text-center btn-inline">
                        <div className="btn-wrap">
                          <a
                            onClick={handleSwitchDeli}
                            className="btn-1 border"
                          >
                            <span>back to delivery</span>
                          </a>
                        </div>
                        <div className="btn-wrap">
                          <a href="#" className="btn-2">
                            <span>
                              pay{" "}
                              <span className="price">
                                {calculateTotal(cartItems)} $
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* shop */}
        <div className="empty-space h65-xs h100-md" />
        <div className="empty-space h0-xs h30-md" />
      </div>
    </>
  );
};

export default Checkout;
