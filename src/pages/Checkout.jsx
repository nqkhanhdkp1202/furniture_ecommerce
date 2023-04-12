import React from 'react'

const Checkout = () => {
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
              Curabitur ultricies semper eleifend. Pellentesque molestie purus
              non something else not tempus bibendum mattis making something
            </p>
          </div>
        </div>
      </div>
      <div className="empty-space h25-xs h55-md" />
      <div className="row">
        <div className="col-xs-12">
          <div className="tabs-block">
            <div className="tab-menu active">01 Delivery</div>
            <div className="tab-menu">02 Payment</div>
            <div className="empty-space 15-xs h35-md" />
            <div className="tab-entry" style={{ display: "block" }}>
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
                <div className="radio-item">
                  <label className="radio">
                    <input type="radio" name={1} defaultChecked="" />
                    <span className="text">
                      Standart<span>( Free )</span>
                    </span>
                  </label>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tem por incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="radio-item right">
                  <label className="radio">
                    <input type="radio" name={1} />
                    <span className="text">
                      Product Dolor<span>( 20$ )</span>
                    </span>
                  </label>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tem por incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="empty-space h5-xs h35-md fl" />
                <div className="text-center btn-inline">
                  <div className="btn-wrap">
                    <a href="#" className="btn-1 border">
                      <span>back to cart</span>
                    </a>
                  </div>
                  <div className="btn-wrap">
                    <a href="#" className="btn-2">
                      <span>
                        pay{" "}
                        <span className="price">
                          $690<sup>00</sup>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </form>
            </div>
            <div className="tab-entry">
              <form>
                <h4 className="h4">Payment Method</h4>
                <div className="empty-space h15-xs h15-md" />
                <div className="radio-item">
                  <label className="radio">
                    <input type="radio" name={2} defaultChecked="" />
                    <span className="text">credit card</span>
                  </label>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tem por incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="radio-item right">
                  <label className="radio">
                    <input type="radio" name={2} />
                    <span className="text">PayPal</span>
                  </label>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tem por incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="radio-item">
                  <label className="radio">
                    <input type="radio" name={2} />
                    <span className="text">Amazon payment</span>
                  </label>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tem por incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="radio-item right">
                  <label className="radio">
                    <input type="radio" name={2} />
                    <span className="text">
                      Cash on delivery<span>( +10% from total )</span>
                    </span>
                  </label>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tem por incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="empty-space h15-xs h45-md fl" />
                <h4 className="h4">Shipping info</h4>
                <div className="empty-space h25-xs h30-md" />
                <div className="input-wrapper">
                  <div className="input-style half">
                    <input
                      id="inputFirstName2"
                      name="name"
                      type="text"
                      className="input"
                      required=""
                    />
                    <label htmlFor="inputFirstName2">Cardholder Name</label>
                  </div>
                  <div className="input-style half half-right">
                    <input
                      id="inputLastName2"
                      name="name"
                      type="text"
                      className="input"
                      required=""
                    />
                    <label htmlFor="inputLastName2">Card Number</label>
                  </div>
                  <div className="select-date">
                    <span>Expiradion date</span>
                    <select name="month" className="select-box">
                      <option disabled="" selected="">
                        Month
                      </option>
                      <option value="month1">Month1</option>
                      <option value="month2">Month2</option>
                      <option value="month3">Month3</option>
                      <option value="month4">Month4</option>
                    </select>
                    <select name="year" className="select-box">
                      <option disabled="" selected="">
                        Year
                      </option>
                      <option value="year1">Year1</option>
                      <option value="year2">Year2</option>
                      <option value="year3">Year3</option>
                      <option value="year4">Year4</option>
                    </select>
                  </div>
                  <div className="input-style third third-right">
                    <input
                      id="inputCvv"
                      name="cvv"
                      type="password"
                      className="input"
                      required=""
                    />
                    <label htmlFor="inputCvv">CVV</label>
                  </div>
                  <div className="input-style">
                    <input
                      id="inputAddress2"
                      name="address"
                      type="text"
                      className="input"
                      required=""
                    />
                    <label htmlFor="inputAddress2">Address</label>
                  </div>
                </div>
                <div className="empty-space h15-xs h30-md" />
                <div className="text-center btn-inline">
                  <div className="btn-wrap">
                    <a href="#" className="btn-1 border">
                      <span>back to delivery</span>
                    </a>
                  </div>
                  <div className="btn-wrap">
                    <a href="#" className="btn-2">
                      <span>
                        pay{" "}
                        <span className="price">
                          $690<sup>00</sup>
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
  )
}

export default Checkout