import React from 'react'

const Contact = () => {
  return (
    <>
    <div id="content">
  <div className="full-height-banner">
    <div className="clip">
      <div
        className="bg fix"
        style={{ backgroundImage: "url(./src/assets/img/team.jpeg)" }}
      >
        <div className="bg-layer-5" />
      </div>
    </div>
    <div className="vertical-align full">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="row text-center">
              <div className="col-xs-12">
                <h2 className="h1 white sm-sepp">Contact us</h2>
              </div>
              <div className="col-md-12">
                <div className="empty-space h20-xs" />
                <div className="white-70">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit cras
                    elementum id metus ac tempus something posuere
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="section">
    <div className="container">
      <div className="empty-space h40-xs h100-md" />
      <div className="empty-space h20-xs" />
      <div className="row text-center">
        <div className="col-xs-12">
          <h2 className="h2">GET IN TOUCH</h2>
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
        <div className="col-md-3 col-sm-3 col-xs-12">
          <div className="project-info">
            <h4 className="h6">Address</h4>
            <div className="empty-space h20-xs" />
            <span>New York, 345</span>
            <span>Park Ave NY 10154, USA</span>
            <div className="empty-space h60-md h30-xs" />
          </div>
        </div>
        <div className="col-md-3 col-sm-3 col-xs-12">
          <div className="project-info">
            <h4 className="h6">Phone</h4>
            <div className="empty-space h20-xs" />
            <a href="tel:+380 00 876 35 44">+380 00 876 35 44</a>
            <a href="tel:+380 00 876 66 55">+380 00 876 66 55</a>
            <div className="empty-space h60-md h30-xs" />
          </div>
        </div>
        <div className="col-md-3 col-sm-3 col-xs-12">
          <div className="project-info">
            <h4 className="h6">Email</h4>
            <div className="empty-space h20-xs" />
            <a href="mailto:myfrilanceremail@email.com">
              myfrilanceremail@email.com
            </a>
            <a href="mailto:mysecondemail@email.com">mysecondemail@email.com</a>
            <div className="empty-space h60-md h30-xs" />
          </div>
        </div>
        <div className="col-md-3 col-sm-3 col-xs-12">
          <div className="project-info">
            <h4 className="h6">Follow us</h4>
            <div className="empty-space h20-xs" />
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
      </div>
      <div className="testimonial-form-wrapper shop">
        <h4 className="h4 text-center">Have a question?</h4>
        <div className="empty-space h30-xs" />
        <form action="#">
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1 col-xs-12 col-xs-offset-0">
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
                    type="email"
                    className="input"
                    required=""
                  />
                  <label htmlFor="inputEmail">E-mail</label>
                </div>
                <div className="input-style full-w">
                  <input
                    id="inputSubject"
                    name="subject"
                    type="text"
                    className="input"
                    required=""
                  />
                  <label htmlFor="inputSubject">Subject</label>
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
            </div>
          </div>
          <div className="text-center">
            <div className="btn-wrap">
              <a href="#" className="btn-2">
                <input type="submit" defaultValue="" />
                <span>Add your review</span>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div className="empty-space h40-xs h100-md" />
    <div className="empty-space h20-xs" />
  </section>
  <div className="map">
    <div
      id="map-canvas"
      className="map-item"
    />
    <div className="addresses-block">
      <img src='./src/assets/img/map.png' style={{objectFit: "cover",width: "100%", height: "100%"}}/>
    </div>
  </div>
</div>
    </>
  )
}

export default Contact