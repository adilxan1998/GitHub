import "./Login.css";
import { Link } from "react-router-dom";
import githubLogo from "../../assets/img/github-logo.png";
import React, { useState } from "react";

const Login = ({ login }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const params = {
    userName: userName,
    password: password,
  };

  return (
    <>
      <div className="login-wrapper">
        <div className="login-inner">
          <Link to="/">
            <img className="login-img" src={githubLogo} alt="" />
          </Link>
          <p className="login-title">Sign in to GitHub</p>
        </div>

        <div className="form">
          <div class="mb-3">
            <label for="exampleInputEmail1" className="form-label">Username or email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={userName}
              onChange={(e) => setUserName(e.target.value)} />
          </div>
          <div className="mb-3">
            <div className="label-inner d-flex justify-content-between">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <label for="exampleInputPassword1" className="blue">Forgot password?</label>
            </div>
            <input type="password" className="form-control" id="exampleInputPassword1" value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>

          <button type="submit"
            onClick={() => login(params)} className="btn btn-success w-100">Submit</button>
        </div>

        <div className="text-inner">
          <p className="login-text">New to GitHub? <span className="blue">Create an account .</span></p>
        </div>

        <ul className="login-list d-flex justify-content-between">
          <li className="login-item">
            <a href="#" className="login-link blue">Terms</a>
          </li>
          <li className="login-item">
            <a href="#" className="login-link blue">Privacy</a>
          </li>
          <li className="login-item">
            <a href="#" className="login-link blue">Security</a>
          </li>
          <li className="login-item">
            <a href="#" className="login-link">Contact GitHub</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Login