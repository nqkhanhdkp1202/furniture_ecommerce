import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HeroSlide from "../components/hero-slide/HeroSlide";

const Home = () => {

  return (
    <>
      {/* content */}
      <div id="content">
        {/* banner */}
        {/* swiper */}
        <HeroSlide />
        <div className="clear" />
        <div className="empty-space h40-xs h100-md" />
        <div className="empty-space h20-xs" />
        {/* what-we-do */}
        <div className="container">
          <div className="row text-center">
            <div className="col-xs-12">
              <h2 className="h2">What we do</h2>
            </div>
            <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12 col-xs-offset-0">
              <div className="empty-space h20-xs" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit cras
                elementum id metus ac tempus something posuere
              </p>
            </div>
          </div>
          <div className="empty-space h30-xs h65-md" />
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="prod-item">
                <a href="#" className="prod-item-img">
                  <img src="./src/assets/img/icon-3.png" alt="" />
                </a>
                <div className="article small">
                  <a href="#" className="h4">
                    Curabitur fermentum
                  </a>
                  <ul>
                    <li>Quisque with placerat Porttitor nisi felis</li>
                    <li>Congue in &amp; Tempus anything the best efficitur</li>
                    <li>Aenean suscipit vestibulum blandit making</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="prod-item">
                <a href="#" className="prod-item-img">
                  <img src="./src/assets/img/icon-4.png" alt="" />
                </a>
                <div className="article small">
                  <a href="#" className="h4">
                    kitchen furniture
                  </a>
                  <ul>
                    <li>Aenean suscipit vestibulum blandit making</li>
                    <li>Quisque with placerat Porttitor nisi felis</li>
                    <li>Congue in &amp; Tempus anything the best efficitur</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="prod-item">
                <a href="#" className="prod-item-img">
                  <img src="./src/assets/img/icon-5.png" alt="" />
                </a>
                <div className="article small">
                  <a href="#" className="h4">
                    children room
                  </a>
                  <ul>
                    <li>Congue in &amp; Tempus anything the best efficitur</li>
                    <li>Aenean suscipit vestibulum blandit making</li>
                    <li>Nulla consectetur quam mollis scelerisque</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="prod-item">
                <a href="#" className="prod-item-img">
                  <img src="./src/assets/img/icon-6.png" alt="" />
                </a>
                <div className="article small">
                  <a href="#" className="h4">
                    room for guest
                  </a>
                  <ul>
                    <li>Congue in &amp; Tempus anything the best efficitur</li>
                    <li>Aenean suscipit vestibulum blandit making</li>
                    <li>Nulla consectetur mollis scelerisque</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="prod-item">
                <a href="#" className="prod-item-img">
                  <img src="./src/assets/img/icon-7.png" alt="" />
                </a>
                <div className="article small">
                  <a href="#" className="h4">
                    main room
                  </a>
                  <ul>
                    <li>Quisque with placerat Porttitor nisi felis</li>
                    <li>Congue in &amp; Tempus anything the best efficitur</li>
                    <li>Aenean suscipit vestibulum blandit making</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="prod-item">
                <a href="#" className="prod-item-img">
                  <img src="./src/assets/img/icon-8.png" alt="" />
                </a>
                <div className="article small">
                  <a href="#" className="h4">
                    bedrooms
                  </a>
                  <ul>
                    <li>Aenean suscipit vestibulum blandit making</li>
                    <li>Congue in &amp; Tempus anything the best efficitur</li>
                    <li>Nulla consectetur mollis scelerisque</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* what-we-do */}
        <div className="empty-space h15-xs h80-md" />
        {/* get-your-chance */}
        <div className="container-fluid nopadding block">
          <div className="clip">
            <div
              className="bg fix"
              style={{ backgroundImage: "url(img/img-3.jpg)" }}
            >
              <div className="bg-layer-6" />
            </div>
          </div>
          <div className="empty-space h35-xs h100-md" />
          <div className="empty-space h30-xs" />
          <div className="container">
            <div className="row flex-md">
              <div className="col-md-6 col-md-offset-0 col-sm-8 col-sm-offset-2 col-xs-12 col-xs-offset-0 flex-order-2">
                <img
                  className="img"
                  src="./src/assets/img/banner-3.jpeg"
                  alt=""
                />
              </div>
              <div className="col-md-6 col-md-offset-0 col-sm-8 col-sm-offset-2 col-xs-12 col-xs-offset-0 flex-order-1">
                <article className="text-center white-70 small-sm">
                  <div className="empty-space h40-xs h0-md" />
                  <h3 className="h3 white">Get your briliant chance</h3>
                  <div className="empty-space h20-xs" />
                  <p>
                    Integer rhoncus nibh id risus lobortis, in ullamcorper erat
                    tristique. Ut tempus leo sed volutpat congue. Fusce blandit
                    eros sed lobortis lacinia.ed nulla dolor, tincidunt
                  </p>
                </article>
                <div className="empty-space h40-xs fl" />
                <div className="row">
                  <div className="col-md-10 col-md-offset-1">
                    <article className="text-center white-70 small-sm">
                      <img src="./src/assets/img/icon-9.png" alt="" />
                      <div className="empty-space h5-xs" />
                      <a href="#">
                        <h5 className="h5 white hover-1">
                          administrative department
                        </h5>
                      </a>
                      <p>
                        Sed magna metus, placerat sit amet ullamcorper non,
                        sodales at neque. Sed vel purus sed ipsum auctor
                        vulputate
                      </p>
                    </article>
                  </div>
                </div>
                <div className="empty-space h40-xs fl" />
                <div className="row">
                  <div className="col-md-10 col-md-offset-1">
                    <article className="text-center white-70 small-sm">
                      <img src="./src/assets/img/icon-10.png" alt="" />
                      <div className="empty-space h5-xs" />
                      <a href="#">
                        <h5 className="h5 white hover-1">design department</h5>
                      </a>
                      <p>
                        Phasellus viverra, metus vel bibendum sodales, quam ex
                        hendrerit libero, non molestie justo orci eget sapien
                      </p>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="empty-space h35-xs h100-md" />
          <div className="empty-space h30-xs" />
        </div>
        {/* get-your-chance */}
        <div className="clear" />
        <div className="empty-space h40-xs h100-md" />
        <div className="empty-space h20-xs" />
        {/* swiper */}
        {/* our-preference */}
        {/* 3D excursion */}
        <div className="container">
          <div className="row text-center">
            <div className="col-xs-12">
              <h2 className="h2">Would you like to try 3D excursion</h2>
            </div>
            <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12 col-xs-offset-0">
              <div className="empty-space h20-xs" />
              <p>
                Lorem ipsum dolor amet, consectetur adipiscing elit elemen tum
                iesded metus ac tempus mauris something volutpat
              </p>
            </div>
          </div>
          <div className="empty-space h30-xs h60-md" />
          <div className="excursion">
            <div className="row">
              <div className="col-md-8">
                <div className="excursion-video">
                  <img src="./src/assets/img/banner-2.jpeg" alt="" />
                  <div
                    className="btn-play open-video"
                    data-src="./src/assets/https://www.youtube.com/embed/kQT2y3UiosQ?autoplay=1&loop=1&modestbranding=1&rel=0&showinfo=0&color=white&theme=light&wmode=transparent"
                  >
                    <i className="fa fa-play fa-2x" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="swiper-style-1">
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div
                          className="excursion-preview active"
                          data-img="img/img-8.jpg"
                          data-video-link="https://www.youtube.com/embed/kQT2y3UiosQ?autoplay=1&loop=1&modestbranding=1&rel=0&showinfo=0&color=white&theme=light&wmode=transparent"
                        >
                          <div className="row flex">
                            <div className="col-md-6 col-sm-6 col-xs-6">
                              <img
                                src="./src/assets/img/banner-1.jpeg"
                                alt=""
                              />
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6">
                              <h6 className="h6 hover-1 title">
                                STUDIO PHOTO WITH OPEN SPACE
                              </h6>
                              <div className="empty-space h15-xs" />
                              <p>hall room</p>
                            </div>
                          </div>
                        </div>
                        <div className="empty-space h30-xs" />
                        <div
                          className="excursion-preview"
                          data-img="img/img-9.jpg"
                          data-video-link="https://www.youtube.com/embed/vlDzYIIOYmM?autoplay=1&loop=1&modestbranding=1&rel=0&showinfo=0&color=white&theme=light&wmode=transparent"
                        >
                          <div className="row flex">
                            <div className="col-md-6 col-sm-6 col-xs-6">
                              <img
                                src="./src/assets/img/banner-1.jpeg"
                                alt=""
                              />
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6">
                              <h6 className="h6 hover-1 title">
                                NAM MAGNA FELIS IACULIS SIT
                              </h6>
                              <div className="empty-space h15-xs" />
                              <p>hall room</p>
                            </div>
                          </div>
                        </div>
                        <div className="empty-space h30-xs" />
                        <div
                          className="excursion-preview"
                          data-img="img/img-10.jpg"
                          data-video-link="https://www.youtube.com/embed/A3PDXmYoF5U?autoplay=1&loop=1&modestbranding=1&rel=0&showinfo=0&color=white&theme=light&wmode=transparent"
                        >
                          <div className="row flex">
                            <div className="col-md-6 col-sm-6 col-xs-6">
                              <img
                                src="./src/assets/img/banner-1.jpeg"
                                alt=""
                              />
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6">
                              <h6 className="h6 hover-1 title">
                                AENEAN VITAE SAPIEN AT RISUS LAOREET
                              </h6>
                              <div className="empty-space h15-xs" />
                              <p>hall room</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="empty-space h40-xs h100-md" />
        <div className="empty-space h20-xs" />Í
        {/* design-items */}
        <div className="container-fluid nopadding block">
          <div className="clip">
            <div
              className="bg fix"
              style={{ backgroundImage: "url(./src/assets/img/img-11.jpg)" }}
            >
              <div className="bg-layer-6" />
            </div>
          </div>
          <div className="empty-space h40-xs h100-md" />
          <div className="empty-space h20-xs" />
          <div className="container">
            <div className="row text-center">
              <div className="col-xs-12">
                <h2 className="h2 white">Design items</h2>
              </div>
              <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12 col-xs-offset-0 white-70">
                <div className="empty-space h20-xs" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit cras
                  elementum id metus acestyks velit volutpat posuere
                </p>
              </div>
            </div>
          </div>
          <div className="empty-space h35-xs h70-md" />
          <div className="container-fluid nopadding">
            <div className="swiper-style-2">
              <div
                className="swiper-container"
              >
                <div className="swiper-wrapper" style={{gap: "12px"}}>
                  <div className="swiper-slider ">
                    <div className="design-item text-center">
                      <article>
                        <a href="#">
                          <h6 className="h6 hover-1">CHAIR WITH OPEN SPACE</h6>
                        </a>
                        <div className="empty-space h5-xs" />
                        <p>cursus augue tempus consequat mollis</p>
                        <div className="empty-space h20-xs" />
                        <span className="price">
                          $286<sup>00</sup>
                        </span>
                        <div className="empty-space h30-xs" />
                        <a className="img-hover-2" href="#">
                          <img src="./src/assets/img/chair1.jpeg" alt="" />
                        </a>
                        <div className="empty-space h35-xs" />
                        <div className="btn-wrap">
                          <a href="#" className="btn-2">
                            <span>read more</span>
                          </a>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div className="swiper-slider">
                    <div className="design-item text-center">
                      <article>
                        <a href="#">
                          <h6 className="h6 hover-1">CHAIR WITH OPEN SPACE</h6>
                        </a>
                        <div className="empty-space h5-xs" />
                        <p>cursus augue tempus consequat mollis</p>
                        <div className="empty-space h20-xs" />
                        <span className="price">
                          $286<sup>00</sup>
                        </span>
                        <div className="empty-space h30-xs" />
                        <a className="img-hover-2" href="#">
                          <img src="./src/assets/img/chair2.jpeg" alt="" />
                        </a>
                        <div className="empty-space h35-xs" />
                        <div className="btn-wrap">
                          <a href="#" className="btn-2">
                            <span>read more</span>
                          </a>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div className="swiper-slider">
                    <div className="design-item text-center">
                      <article>
                        <a href="#">
                          <h6 className="h6 hover-1">CHAIR WITH OPEN SPACE</h6>
                        </a>
                        <div className="empty-space h5-xs" />
                        <p>cursus augue tempus consequat mollis</p>
                        <div className="empty-space h20-xs" />
                        <span className="price">
                          $286<sup>00</sup>
                        </span>
                        <div className="empty-space h30-xs" />
                        <a className="img-hover-2" href="#">
                          <img src="./src/assets/img/chair3.jpeg" alt="" />
                        </a>
                        <div className="empty-space h35-xs" />
                        <div className="btn-wrap">
                          <a href="#" className="btn-2">
                            <span>read more</span>
                          </a>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div className="swiper-slider">
                    <div className="design-item text-center">
                      <article>
                        <a href="#">
                          <h6 className="h6 hover-1">CHAIR WITH OPEN SPACE</h6>
                        </a>
                        <div className="empty-space h5-xs" />
                        <p>cursus augue tempus consequat mollis</p>
                        <div className="empty-space h20-xs" />
                        <span className="price">
                          $286<sup>00</sup>
                        </span>
                        <div className="empty-space h30-xs" />
                        <a className="img-hover-2" href="#">
                          <img src="./src/assets/img/clock1.jpeg" alt="" />
                        </a>
                        <div className="empty-space h35-xs" />
                        <div className="btn-wrap">
                          <a href="#" className="btn-2">
                            <span>read more</span>
                          </a>
                        </div>
                      </article>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="clear" />
          <div className="empty-space h30-xs h60-md" />
          <div className="container-fluid text-center">
            <div className="btn-wrap">
              <Link to="/shop" className="btn-1">
                <span>view all products</span>
              </Link>
            </div>
          </div>
          <div className="empty-space h40-xs h100-md" />
          <div className="empty-space h20-xs" />
        </div>
        {/* design-items */}
      </div>
      {/* content */}
    </>
  );
};

export default Home;
