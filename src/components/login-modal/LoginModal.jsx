import React, { useState } from "react";
import PropsType from "prop-types";
import SignupModal from "../signup-modal/SignupModal";

const LoginModal = ({ show, onClose, onOpenSignUp }) => {

    const [showSignup, setShowSignup] = useState(false)

    const handleShowSignup = () => {
        setShowSignup(true)
      }
    
      const handleCloseSignup = () => {
        setShowSignup(false);
        onClose();
      }

    
  return (
    <>
      {/* POPUPS */}
      <div className={`popup-wrapper ${show ? "active z-lower" : ""}`}>
        <div className="bg-layer" />
        <div class={`popup-content login-popup ${show ? "active" : ""}`} data-rel="2">
          <div class="layer-close"></div>
          <div class="popup-container size-3">
            <div class="popup-align">
              <div class="row">
                <div class="col-md-12 text-center">
                  <h2 class="h1-2">Log in</h2>
                  <div class="empty-space h70-xs"></div>
                </div>
              </div>
              <div class="row separator">
                <div class="col-sm-6">
                  <form>
                    <div class="input-wrapper">
                      <div class="input-style">
                        <input
                          id="inputEmail2"
                          name="email"
                          type="text"
                          class="input"
                          required
                        />
                        <label for="inputEmail2">E-mail</label>
                      </div>
                      <div class="input-style">
                        <input
                          id="inputPass"
                          name="psw"
                          type="password"
                          class="input"
                          required
                        />
                        <label for="inputPass">Password</label>
                      </div>
                    </div>
                    <p>
                      <a href="#">Forgot your password&#63;</a>
                    </p>
                    <div class="empty-space h20-xs"></div>
                    <div class="btn-wrap">
                      <a href="#" class="btn-2">
                        <span>submit</span>
                      </a>
                    </div>
                  </form>
                </div>
                <div class="col-sm-6">
                  <article>
                    <h6 class="h6">LOG IN VIA SOCIAL NETWORKS</h6>
                    <div class="empty-space h10-xs"></div>
                    <p>
                      Ut enim ad minim veniam, quis nostrud laboris nisi ut
                      aliquip commodo quat duis aute irure dolor
                    </p>
                  </article>
                  <div class="empty-space h40-xs fl"></div>
                  <a href="#" class="btn-2 twitter">
                    <span>twitter</span>
                  </a>
                  <a href="#" class="btn-2 facebook">
                    <span>facebook</span>
                  </a>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 text-center">
                  <div class="empty-space h30-xs"></div>
                  <div style={{display: 'inline-block', cursor: "pointer"}} class="btn-sing-up open-popup" data-rel="3" onClick={handleShowSignup}>
                    Sign up now
                  </div>
                </div>
              </div>
            </div>
            <div class="button-close" onClick={onClose}></div>
          </div>
        </div>
      </div>
      <SignupModal show={showSignup} onClose={handleCloseSignup}></SignupModal>
    </>
  );
};

LoginModal.propsType = {
  show: PropsType.bool,
  onClose: PropsType.func,
};

export default LoginModal;
