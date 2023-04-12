import React from "react";
const HeroSlide = () => {
  return (
    <div className="swiper-style-banner">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide" style={{backgroundImage: "url(./src/assets/img/banner-1.jpeg)", backgroundPosition: 'center center', objectFit: 'cover'}}>
            <div className="banner container">
              <div className="row flex-js">
                <div className="col-md-7 flex-order-2">
                  <div className="banner-img-wrapper">
                    <div className="banner-img-1"></div>
                  </div>
                </div>
                <div className="col-md-5 col-md-offset-0 col-sm-8 col-sm-offset-2 col-xs-12 col-xs-offset-0 flex-order-1">
                  <article className="text-right swiper-text">
                    <h1 className="h1" data-swiper-parallax={-800}>
                      Design Interior
                    </h1>
                    <p data-swiper-parallax={-600}>
                      Curabitur ultricies semper eleifend. Pellentesque molestie
                      purus non something else not tempus bibendum mattis making
                      something
                    </p>
                    <div className="btn-wrap" data-swiper-parallax={-400}>
                      <a href="#" className="btn-2">
                        <span>view more</span>
                      </a>
                    </div>
                  </article>
                  <div className="clear" />
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide" style={{backgroundImage: "url(./src/assets/img/banner-2.jpeg)",  backgroundPosition: 'center center', objectFit: 'cover'}}>
            <div className="banner container">
              <div className="row flex-js">
                <div className="col-md-7 flex-order-2">
                  <div className="banner-img-wrapper">
                    <div className="banner-img-1"></div>
                  </div>
                </div>
                <div className="col-md-5 col-md-offset-0 col-sm-8 col-sm-offset-2 col-xs-12 col-xs-offset-0 flex-order-1">
                  <article className="text-righ swiper-text">
                    <h1 className="h1" data-swiper-parallax={-800}>
                      Design Interior
                    </h1>
                    <p style={{color: 'white!important'}}>
                      Curabitur ultricies semper eleifend. Pellentesque molestie
                      purus non something else not tempus bibendum mattis making
                      something
                    </p>
                    <div className="btn-wrap" data-swiper-parallax={-400}>
                      <a href="#" className="btn-2">
                        <span>view more</span>
                      </a>
                    </div>
                  </article>
                  <div className="clear" />
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide" style={{backgroundImage: "url(./src/assets/img/banner-3.jpeg)",  backgroundPosition: 'center center', objectFit: 'cover'}}>
            <div className="banner container">
              <div className="row flex-js">
                <div className="col-md-7 flex-order-2">
                  <div className="banner-img-wrapper">
                    <div className="banner-img-1"></div>
                  </div>
                </div>
                <div className="col-md-5 col-md-offset-0 col-sm-8 col-sm-offset-2 col-xs-12 col-xs-offset-0 flex-order-1">
                  <article className="text-righ swiper-text">
                    <h1 className="h1" data-swiper-parallax={-800}>
                      Design Interior
                    </h1>
                    <p style={{color: 'white!important'}}>
                      Curabitur ultricies semper eleifend. Pellentesque molestie
                      purus non something else not tempus bibendum mattis making
                      something
                    </p>
                    <div className="btn-wrap" data-swiper-parallax={-400}>
                      <a href="#" className="btn-2">
                        <span>view more</span>
                      </a>
                    </div>
                  </article>
                  <div className="clear" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
