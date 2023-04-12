import React from "react";

const Footer = () => {
  return (
    <>
      {/* footer */}
      <footer className="footer-black">
        <div className="container small-sm">
          <div className="row">
            <div className="col-md-3">
              <a href="index.html">
                <img src="img/logo-white.png" alt="" />
              </a>
              <div className="empty-space h10-xs" />
              <p>
                Lorem ipsum dolor sit amet, cset tur adipiscingerat rutrum to
                the next side
              </p>
            </div>
            <div className="empty-space h20-xs h0-md" />
            <div className="col-md-2">
              <h6 className="h7">Address</h6>
              <div className="empty-space h10-xs" />
              <ul>
                <li>
                  <a href="https://www.google.com.ua/maps/@40.7573849,-73.9721243,19z">
                    319 Clematis St.Suite, 100 WPB, FL 33401
                  </a>
                </li>
              </ul>
            </div>
            <div className="empty-space h20-xs h0-md" />
            <div className="col-md-2 col-md-offset-1">
              <h6 className="h7">Contact us</h6>
              <div className="empty-space h10-xs" />
              <ul>
                <li>
                  <a href="tel:+380982367536">tel. +38 098 236 75 36</a>
                </li>
                <li>
                  <a href="mailto:info@bristol.com">e-mail info@bristol.com</a>
                </li>
              </ul>
            </div>
            <div className="empty-space h20-xs h0-md" />
            <div className="col-md-3 col-md-offset-1">
              <h6 className="h7">Follow us</h6>
              <div className="empty-space h15-xs h25-md" />
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
                <a className="item" href="https://twitter.com/" target="_blank">
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
          <div className="empty-space h25-xs" />
          <div className="row">
            <div className="col-md-12">
              <div className="copyright">
                © 2017 All rights reserved. Development with{" "}
                <span className="fa fa-heart" /> by{" "}
                <a
                  href="https://themeforest.net/user/unionagency"
                  target="blank"
                >
                  UnionAgency.
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer */}
    </>
  );
};

export default Footer;