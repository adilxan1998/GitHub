import "./Mainlist.css";
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import overview from "../../../../assets/img/overview.png";
import repository from "../../../../assets/img/repository.png";
import project from "../../../../assets/img/project.png";
import kubic from "../../../../assets/img/kubic.png";
import star from "../../../../assets/img/star.png";

const Mainlist = () => {

  const [data] = useState("adilxan1998");
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${data}/repos`).then((response => response.json())).then((data) => setInfo(data))
  }, [])

  let activeStyle = {
    color: "black",
    borderBottom: "2px solid #FD8C73",
  };

  return (
    <>
      <div className="main-list-wrapper">
        <ul className="main-list">
          <NavLink className="text-decoration-none text-dark" to='/overview' aria-current="page" style={({ isActive }) => isActive ? activeStyle : undefined}>
            <li className="main-list-item">
              <div className="main-list-item-box">
                <img className="main-list-img" src={overview} alt="" />
                <p className='main-list-text'>Overview</p>
              </div>
            </li>
          </NavLink>
          <NavLink className="text-decoration-none text-dark" to='/repositories' aria-current="page" style={({ isActive }) => isActive ? activeStyle : undefined}>
            <li className="main-list-item">
              <div className="main-list-item-box">
                <img className="main-list-img" src={repository} alt="" />
                <p className='main-list-text'>Repositories <span className='span-span'>{info.length}</span> </p>
              </div>
            </li>
          </NavLink>
          <li className="main-list-item">
            <div className="main-list-item-box">
              <img className="main-list-img" src={project} alt="" />
              <p className='main-list-text'>Projects</p>
            </div>
          </li>
          <li className="main-list-item">
            <div className="main-list-item-box">
              <img className="main-list-img" src={kubic} alt="" />
              <p className='main-list-text'>Packages</p>
            </div>
          </li>
          <li className="main-list-item">
            <div className="main-list-item-box">
              <img className="main-list-img" src={star} alt="" />
              <p className='main-list-text'>Stars</p>
            </div>
          </li>
        </ul>
      </div>
      <hr className="main-list-line" />
    </>
  )
}

export default Mainlist