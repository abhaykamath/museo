import React from "react";
import "./CreateAccount.css";
import Pic from "./Images/Pic1.svg";
import Google from "./Images/Google.svg";
import Facebook from "./Images/Mail Send.svg";
import Apple from "./Images/Apple.svg";
import Phone from "./Images/Phone Mobile Phone.svg";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";
function CreateAcccount() {
  const navigate = useNavigate();
  return (
    <>
      <div id="account-container">
        <div id="account">
          <div className="image-div">
            <img src={Pic} alt="pic"></img>
          </div>
          <div className="text">
            <div className="fs-32">Create an Account</div>
            <p>Your one step into the World of Art</p>
          </div>
          <div className="login-btn">
            <button>
              <img src={Google} alt="google"></img>
              <span>Continue with Google</span>
            </button>
            <button>
              <img src={Facebook} alt="google"></img>
              <span>Continue with Facebook</span>
            </button>
            <button>
              <img src={Apple} alt="google"></img>
              <span>Continue with Apple</span>
            </button>
            <button
              className="btn-div"
              onClick={() => {
                navigate("/login/mobileLogin");
              }}
            >
              <img src={Phone} alt="google"></img>
              <span>Enter your mobile number</span>
            </button>
          </div>
        </div>
        <div className="footer">
          <p>Already have an account? </p>
          <a> Log In</a>
        </div>
      </div>
    </>
  );
}

export default CreateAcccount;
