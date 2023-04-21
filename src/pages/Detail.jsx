import { element } from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { furnitureAPI } from "../api/furnitureAPI";
import QuantityInput from "../components/quantity-input/QuantityInput";
import { CartContext } from "../context/CartContext";

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [relatedItems, setRelatedItems] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    setIsLoading(true);
    const getDetail = async () => {
      const params = {};
      let response = null;
      response = await furnitureAPI.getDetail(id, params);
      setDetail(response.data[0]);
    };
    getDetail();
    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    setIsLoading(true);
    const getRelatedItems = async () => {
      const params = {};
      let response = null;
      response = await furnitureAPI.getRelated(id, params);
      setRelatedItems(response.data);
    };
    getRelatedItems();
    setIsLoading(false);
  }, [id]);

  console.log(relatedItems);

  return (
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </div>
          <div className="empty-space h30-xs h60-md" />
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="detail-item">
                {detail && (
                  <div className="row">
                    <div className="col-md-7">
                      <img className="img-main" src={detail.Image} alt="" />
                      <div className="img-preview"></div>
                      <div className="clear" />
                    </div>
                    <div className="col-md-5">
                      <article className="description">
                        <h3 className="h3">{detail.DisplayName}</h3>
                        <ul>
                          <li>
                            <span>price:</span>
                            <span className="price">{detail.Price} $</span>
                          </li>
                          <li>
                            <span>Reviews:</span>
                            <span className="large">26</span>
                            <span className="star">
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star-o" aria-hidden="true" />
                            </span>
                          </li>
                          <li>
                            <span>Available:</span>
                            <span className="large">
                              {detail.Quantity !== 0 ? "YES" : "SOLD OUT"}
                            </span>
                          </li>
                          <li>
                            <span>color:</span>
                            <span className="color">
                              <span
                                className="active"
                                style={{
                                  backgroundColor: "#28252c",
                                  outlineColor: "#28252c",
                                }}
                              />
                              <span
                                style={{
                                  backgroundColor: "#d2cbc6",
                                  outlineColor: "#d2cbc6",
                                }}
                              />
                              <span
                                style={{
                                  backgroundColor: "#4e77ab",
                                  outlineColor: "#4e77ab",
                                }}
                              />
                              <span
                                style={{
                                  backgroundColor: "#c48d8d",
                                  outlineColor: "#c48d8d",
                                }}
                              />
                            </span>
                          </li>
                        </ul>
                        <p>{detail.shortDesc}</p>
                      </article>
                      <div className="btn-wrap">
                        <a
                          href="#"
                          className="btn-2"
                          onClick={(e) => addToCart(detail, e)}
                        >
                          <span>add to cart</span>
                        </a>
                      </div>
                      <div className="btn-wrap">
                        <a href="#" className="btn-1 border">
                          <span>add to favourites</span>
                        </a>
                      </div>
                      <div className="follow-wrapper">
                        <span>share:</span>
                        <div className="follow">
                          <a
                            className="item"
                            href="https://www.instagram.com/"
                            target="_blank"
                          >
                            <i className="fa fa-instagram" />
                          </a>
                          <a
                            className="item"
                            href="https://www.facebook.com/"
                            target="_blank"
                          >
                            <i className="fa fa-facebook" />
                          </a>
                          <a
                            className="item"
                            href="https://www.pinterest.com/"
                            target="_blank"
                          >
                            <i className="fa fa-pinterest-p" />
                          </a>
                          <a
                            className="item"
                            href="https://twitter.com/"
                            target="_blank"
                          >
                            <i className="fa fa-twitter" />
                          </a>
                          <a
                            className="item"
                            href="https://plus.google.com/"
                            target="_blank"
                          >
                            <i className="fa fa-google-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="empty-space h60-xs" />
              <div className="row">
                <div className="col-xs-12">
                  <div className="tabs-block">
                    <div className="tab-menu active">description</div>
                    <div className="tab-menu">Testimonials</div>
                    <div className="tab-entry" style={{ display: "block" }}>
                      <div className="article">
                        <p>{detail && detail.longDesc}</p>
                        <ul className="disc">
                          <li>
                            aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat sit voluptatem
                            accusantium doloremque lauda ntium, totam rem
                            aperiam, eaque ipsa
                          </li>
                          <li>
                            non proident, sunt in culpa qui officia deserunt
                            mollit
                          </li>
                          <li>
                            anim id est laborum ut perspiciatis unde omnis iste
                            natus error
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="tab-entry">
                      <div className="testimonial">
                        <img src="img/shop/testimonial-1.jpg" alt="" />
                        <div className="article">
                          <div className="author">
                            <span className="h6">GIGI HADID</span>
                            <span>12/09/2016</span>
                            <span className="star">
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star-o" aria-hidden="true" />
                            </span>
                          </div>
                          <p>
                            Ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse
                          </p>
                        </div>
                      </div>
                      <div className="testimonial">
                        <img src="img/shop/testimonial-2.jpg" alt="" />
                        <div className="article">
                          <div className="author">
                            <span className="h6">JACK KUDROW</span>
                            <span>12/09/2016</span>
                            <span className="star">
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star-o" aria-hidden="true" />
                            </span>
                          </div>
                          <p>
                            Ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse
                          </p>
                        </div>
                      </div>
                      <div className="testimonial-form-wrapper">
                        <h4 className="h4 text-center">Add your review</h4>
                        <div className="empty-space h30-xs" />
                        <form>
                          <div className="input-wrapper">
                            <div className="input-style">
                              <input
                                id="inputName"
                                name="name"
                                type="text"
                                className="input"
                                required=""
                              />
                              <label htmlFor="inputName">Name</label>
                            </div>
                            <div className="input-style">
                              <input
                                id="inputEmail"
                                name="email"
                                type="text"
                                className="input"
                                required=""
                              />
                              <label htmlFor="inputEmail">E-mail</label>
                            </div>
                            <div className="input-style textarea">
                              <textarea
                                id="inputMessage"
                                name="message"
                                className="input"
                                required=""
                                defaultValue={""}
                              />
                              <label htmlFor="inputMessage">Review</label>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="clear" />
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="y-rating">
                            <span>YOUR RATING:</span>
                            <span className="star">
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star-o" aria-hidden="true" />
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-6 text-right">
                          <div className="btn-wrap">
                            <a href="#" className="btn-2">
                              <span>Add your review</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="empty-space h50-xs h100-md" />
              <div className="empty-space h0-xs h10-md" />
              <div className="row text-center">
                <div className="col-xs-12">
                  <h2 className="h2">You may also like</h2>
                  <div className="empty-space h30-xs" />
                </div>
                {relatedItems &&
                  relatedItems.map((element, i) => (
                    <div className="col-sm-3">
                      <Link
                        to={`/shop/${element.ID}`}
                        className="related img-hover-2"
                      >
                        <img src={element.Image} alt="" className="img" />
                      </Link>
                      <article>
                        <div className="empty-space h15-xs" />
                        <a href="#">
                          <h6 className="h6 hover-1">{element.DisplayName}</h6>
                        </a>
                        <div className="empty-space h10-xs" />
                        <span className="price price-sm">
                          {element.Price} $
                        </span>
                        <div className="empty-space h30-xs h0-sm" />
                      </article>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="empty-space h65-xs h100-md" />
      <div className="empty-space h0-xs h30-md" />
    </div>
  );
};

export default Detail;
