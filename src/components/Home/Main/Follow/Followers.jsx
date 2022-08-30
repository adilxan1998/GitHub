import React, { useState } from 'react';
import "./Followers.css";


const Followers = () => {
  const [data, setData] = useState([]);

  fetch("https://api.github.com/users/adilxan1998/followers")
    .then((response) => response.json())
    .then((data) => setData(data));
  return (
    <>
      <ul>
        {data.map((item) => {
          return <li className="follow-item">
            <div className="follow-box">
              <img className="follow-img" src={item.avatar_url} alt="" />
              <a className="follow-link" href={item.html_url}>
                {item.login}
              </a>
            </div>

            <button className="btn folow-btn">Unfollow</button>
          </li>
        })}
      </ul>
    </>
  );
};

export default Followers;