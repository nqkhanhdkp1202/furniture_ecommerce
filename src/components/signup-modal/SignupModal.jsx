import React, { useState } from "react";
import PropsType from "prop-types";
import authAPI from "../../api/authAPI";

const SignupModal = ({ show, onClose }) => {
  const [data, setData] = useState({
    userName: '',
    email: '',
    password: '',
    phone: '',
    displayName: '',
    moreInfo: '',
  })

  const handleRegister = async () => {
    try {
      const params = {};
      const response = await authAPI.register(data,params);
      if (response.data) {
        setPayment(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {/* POPUPS */}
      <div className={`popup-wrapper ${show ? "active z-lower" : ""}`}>
        <div className="bg-layer" />
        <div
          className={`popup-content login-popup ${show ? "active" : ""}`}
          data-rel="3"
        >
          <div className="layer-close"></div>
          <div className="popup-container size-3">
            <div className="popup-align">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h2 className="h1-2">Sign up</h2>
                  <div className="empty-space h70-xs"></div>
                </div>
              </div>
              <div className="row separator">
                <div className="col-sm-6">
                  <form>
                    <div className="input-wrapper">
                      <div className="input-style">
                        <input
                          id="inputName2"
                          name="username"
                          type="text"
                          className="input"
                          required
                          placeholder="User name"
                        />
                      </div>
                      <div className="input-style">
                        <input
                          id="inputEmail3"
                          name="email"
                          type="text"
                          className="input"
                          required
                          placeholder="Email"
                        />
                      </div>
                      <div className="input-style">
                        <input
                          id="inputPass2"
                          name="psw"
                          type="password"
                          className="input"
                          required
                          placeholder="Password"
                        />
                      </div>
                      <div className="input-style">
                        <input
                          id="inputRePass"
                          name="psw"
                          type="password"
                          className="input"
                          required
                          placeholder="Repeat Password"
                        />
                      </div>
                    </div>
                    <div className="empty-space h10-xs"></div>
                  </form>
                </div>
                <div className="col-sm-6">
                  <div className="input-wrapper">
                    <div className="input-style">
                      <input
                        id="inputPhone2"
                        name="name"
                        type="text"
                        className="input"
                        required
                        placeholder="Phone"
                      />
                    </div>
                    <div className="input-style">
                      <input
                        id="inputDisplayName"
                        name="displayName"
                        type="text"
                        className="input"
                        required
                        placeholder="Display Name"
                      />
                    </div>
                    <div className="input-style">
                      <input
                        id="inputAddress"
                        name="address"
                        type="text"
                        className="input"
                        required
                        placeholder="Address"
                      />
                    </div>
                    <div className="input-style">
                      <input
                        id="inputMoreInfo"
                        name="moreInfo"
                        type="text"
                        className="input"
                        required
                        placeholder="More Info"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn-wrap signup-btn">
                <a onClick={handleRegister} className="btn-2">
                  <span>submit</span>
                </a>
              </div>
            </div>
            <div className="button-close" onClick={onClose}></div>
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
