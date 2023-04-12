import React from 'react'
import Button from '../components/button/Button'
import SearchModal from '../components/search-modal/SearchModal'
import Sidebar from '../components/sidebar/Sidebar'

const Shop = () => {
  return (
    <>
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
        <div className="empty-space h30-xs h65-md" />
        <form className="shop-form">
          <div className="row">
            <SearchModal/>
            <div className="col-sm-12 col-md-7 col-lg-7">
            </div>
          </div> 
        </form>
        <div className="empty-space h30-xs" />
        <div className="row">
          <div className="col-md-9 col-sm-9 pull-right nopadding">
            <div className="prod-item-wrapper">
              <div className="shop-prod-item">
                <a href="shopdetail.html" className="img-hover-1">
                  <img src="./src/assets/img/shop/item-1.jpg" alt="" />
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
                      <h6 className="h6 hover-1">chair with open space</h6>
                    </a>
                    <div className="empty-space h5-xs" />
                    <p>Lorem ipsum dolor sit amet, cons adipisicing elit</p>
                  </article>
                </div>
                <span className="price">
                  $286<sup>00</sup>
                </span>
              </div>
              <div className="shop-prod-item">
                <a href="shopdetail.html" className="img-hover-1">
                  <img src="./src/assets/img/shop/item-2.jpg" alt="" />
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
                      <h6 className="h6 hover-1">chair with open space</h6>
                    </a>
                    <div className="empty-space h5-xs" />
                    <p>Lorem ipsum dolor sit amet, cons adipisicing elit</p>
                  </article>
                </div>
                <span className="price">
                  $567<sup>00</sup>
                </span>
              </div>
              <div className="shop-prod-item">
                <a href="shopdetail.html" className="img-hover-1">
                  <img src="./src/assets/img/shop/item-3.jpg" alt="" />
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
                      <h6 className="h6 hover-1">wooden commode</h6>
                    </a>
                    <div className="empty-space h5-xs" />
                    <p>Lorem ipsum dolor sit amet, cons adipisicing elit</p>
                  </article>
                </div>
                <span className="price">
                  $690<sup>00</sup>
                </span>
              </div>
              <div className="shop-prod-item">
                <a href="shopdetail.html" className="img-hover-1">
                  <img src="./src/assets/img/shop/item-4.jpg" alt="" />
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
                      <h6 className="h6 hover-1">chair with open space</h6>
                    </a>
                    <div className="empty-space h5-xs" />
                    <p>Lorem ipsum dolor sit amet, cons adipisicing elit</p>
                  </article>
                </div>
                <span className="price">
                  $286<sup>00</sup>
                </span>
              </div>
              <div className="shop-prod-item">
                <a href="shopdetail.html" className="img-hover-1">
                  <img src="./src/assets/img/shop/item-5.jpg" alt="" />
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
                      <h6 className="h6 hover-1">comfortable kitchen chair</h6>
                    </a>
                    <div className="empty-space h5-xs" />
                    <p>Lorem ipsum dolor sit amet, cons adipisicing elit</p>
                  </article>
                </div>
                <span className="price">
                  $567<sup>00</sup>
                </span>
              </div>
              <div className="shop-prod-item">
                <a href="shopdetail.html" className="img-hover-1">
                  <img src="./src/assets/img/shop/item-6.jpg" alt="" />
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
                      <h6 className="h6 hover-1">great red sofa</h6>
                    </a>
                    <div className="empty-space h5-xs" />
                    <p>Lorem ipsum dolor sit amet, cons adipisicing elit</p>
                  </article>
                </div>
                <span className="price">
                  $690<sup>00</sup>
                </span>
              </div>
              <div className="shop-prod-item">
                <a href="shopdetail.html" className="img-hover-1">
                  <img src="./src/assets/img/shop/item-7.jpg" alt="" />
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
                      <h6 className="h6 hover-1">geometric chandelier</h6>
                    </a>
                    <div className="empty-space h5-xs" />
                    <p>Lorem ipsum dolor sit amet, cons adipisicing elit</p>
                  </article>
                </div>
                <span className="price">
                  $96<sup>00</sup>
                </span>
              </div>
              <div className="shop-prod-item">
                <a href="shopdetail.html" className="img-hover-1">
                  <img src="./src/assets/img/shop/item-8.jpg" alt="" />
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
                      <h6 className="h6 hover-1">stone journal table</h6>
                    </a>
                    <div className="empty-space h5-xs" />
                    <p>Lorem ipsum dolor sit amet, cons adipisicing elit</p>
                  </article>
                </div>
                <span className="price">
                  $337<sup>00</sup>
                </span>
              </div>
              <div className="shop-prod-item">
                <a href="shopdetail.html" className="img-hover-1">
                  <img src="./src/assets/img/shop/item-9.jpg" alt="" />
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
                      <h6 className="h6 hover-1">
                        vase with geometric ornament
                      </h6>
                    </a>
                    <div className="empty-space h5-xs" />
                    <p>Lorem ipsum dolor sit amet, cons adipisicing elit</p>
                  </article>
                </div>
                <span className="price">
                  $120<sup>00</sup>
                </span>
              </div>
            </div>
            <div className="page-pagination">
              <a href="#">
                <img src="./src/assets/img/shop/prev.png" alt="" />
              </a>
              <a className="active" href="#">
                1
              </a>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#">4</a>
              <a href="#">5</a>
              <a href="#">
                <img src="./src/assets/img/shop/next.png" alt="" />
              </a>
            </div>
          </div>
          <Sidebar/>
        </div>
      </div>
    </div>
    <div className="empty-space h55-xs h100-md" />
    <div className="empty-space h0-xs h30-md" />

  </div>
  {/* content */}
</>

    </>
  )
}

export default Shop