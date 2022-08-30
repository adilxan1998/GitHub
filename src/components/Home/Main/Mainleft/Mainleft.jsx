import "./Mainleft.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import followers from "../../../../assets/img/followers.png";


const Mainleft = () => {

  const [data, setData] = useState([]);

  fetch(" https://api.github.com/users/adilxan1998")
    .then((response) => response.json())
    .then((data) => setData(data));

  return (
    <>
      <div className="main-left-wrapper">
        <img className="main-left-img" src={data.avatar_url} alt={data.login} />
        <p className="main-left-text-1">{data.name}</p>
        <p className="main-left-text-2">{data.login}</p>
        <button className="main-left-btn">Edit profile</button>

        <div className="fans">
          <NavLink className="followers-link d-flex text-decoration-none text-secondary " to="/followers">
            <img className="fans-img" src={followers} alt="" />
            <p className="fans-followers"><span className="fans-followers-span">{data.followers}</span>followers</p>
          </NavLink>

          <NavLink className="followers-link text-decoration-none text-secondary mx-2 " to="/following">
            <p className="fans-following"><sapn className="fans-following-span">{data.following}</sapn>following</p>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Mainleft