import React, { useContext, useEffect, useState } from "react";
import PropsType from "prop-types";
import SignupModal from "../signup-modal/SignupModal";
import authAPI from "../../api/authAPI";
import userAPI from "../../api/userAPI";
import { UserContext } from "../../context/UserContext";

const LoginModal = ({ show, onClose, onOpenSignUp }) => {
  const [showSignup, setShowSignup] = useState(false);
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const {setUser} = useContext(UserContext)

  const handleShowSignup = () => {
    setShowSignup(true);
  };

  const handleCloseSignup = () => {
    setShowSignup(false);
    onClose();
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const params = {};
      const response = await authAPI.login({ userName, password }, params);
      if (response.data) {
        localStorage.setItem("accessToken", response.data.accessToken);
        const user = await userAPI.getInfoUser(response.data.accessToken,{params});
        console.log(user);
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
          setUser(user)
          onClose();
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* POPUPS */}
      <div className={`popup-wrapper ${show ? "active z-lower" : ""}`}>
        <div className="bg-layer" />
        <div
          className={`popup-content login-popup ${show ? "active" : ""}`}
          data-rel="2"
        >
          <div className="layer-close"></div>
          <div className="popup-container size-2">
            <div className="popup-align">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h2 className="h1-2">Log in</h2>
                  <div className="empty-space h70-xs"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <form>
                    <div className="input-wrapper">
                      <div className="input-style">
                        <input
                          id="inputUsername2"
                          name="username"
                          type="text"
                          className="input"
                          required
                          placeholder="Username"
                          onChange={(e) => handleUsernameChange(e)}
                        />
                      </div>
                      <div className="input-style">
                        <input
                          id="inputPass"
                          name="psw"
                          type="password"
                          className="input"
                          required
                          placeholder="Password"
                          onChange={(e) => handlePasswordChange(e)}
                        />
                      </div>
                    </div>
                    <p>
                      <a href="#">Forgot your password&#63;</a>
                    </p>
                    <div className="empty-space h20-xs"></div>
                    <div className="btn-wrap">
                      <button onClick={(e) => handleLogin(e)} disabled={isLoading}  className="btn-2">
                        <span>submit</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <div className="empty-space h30-xs"></div>
                  <div
                    style={{ display: "inline-block", cursor: "pointer" }}
                    className="btn-sing-up open-popup"
                    data-rel="3"
                    onClick={handleShowSignup}
                  >
                    Sign up now
                  </div>
                </div>
              </div>
            </div>
            <div className="button-close" onClick={onClose}></div>
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
