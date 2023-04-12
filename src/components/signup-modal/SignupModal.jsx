import React from "react";
import PropsType from "prop-types";

const SignupModal = ({ show, onClose}) => {
  return (
    <>
      {/* POPUPS */}
      <div className={`popup-wrapper ${show ? "active z-lower" : ""}`}>
        <div className="bg-layer" />
        <div class={`popup-content login-popup ${show ? "active" : ""}`} data-rel="3">
        <div class="layer-close"></div>
        <div class="popup-container size-3">
          <div class="popup-align">
            <div class="row">
              <div class="col-md-12 text-center">
                <h2 class="h1-2">Sign up</h2>
                <div class="empty-space h70-xs"></div>
              </div>
            </div>
            <div class="row separator">
              <div class="col-sm-6">
                <form>
                  <div class="input-wrapper">
                    <div class="input-style">
                      <input
                        id="inputName2"
                        name="name"
                        type="text"
                        class="input"
                        required
                      />
                      <label for="inputName2">Name</label>
                    </div>
                    <div class="input-style">
                      <input
                        id="inputEmail3"
                        name="email"
                        type="text"
                        class="input"
                        required
                      />
                      <label for="inputEmail3">E-mail</label>
                    </div>
                    <div class="input-style">
                      <input
                        id="inputPass2"
                        name="psw"
                        type="password"
                        class="input"
                        required
                      />
                      <label for="inputPass2">Password</label>
                    </div>
                    <div class="input-style">
                      <input
                        id="inputRePass"
                        name="psw"
                        type="password"
                        class="input"
                        required
                      />
                      <label for="inputRePass">Repeat password</label>
                    </div>
                  </div>
                  <div class="empty-space h10-xs"></div>
                  <div class="btn-wrap">
                    <a href="#" class="btn-2"><span>submit</span></a>
                  </div>
                </form>
              </div>
              <div class="col-sm-6">
                <article>
                  <h6 class="h6">REGISTER VIA SOCIAL NETWORKS</h6>
                  <div class="empty-space h10-xs"></div>
                  <p>
                    Ut enim ad minim veniam, quis nostrud laboris nisi ut
                    aliquip commodo quat duis aute irure dolor
                  </p>
                </article>
                <div class="empty-space h40-xs fl"></div>
                <a href="#" class="btn-2 twitter"><span>twitter</span></a>
                <a href="#" class="btn-2 facebook"><span>facebook</span></a>
              </div>
            </div>
          </div>
          <div class="button-close" onClick={onClose}></div>
        </div>
      </div>
      </div>
    </>
  );
};

SignupModal.propsType = {
  show: PropsType.bool,
  onClose: PropsType.func,
};

export default SignupModal;
