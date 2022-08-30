import React, { useEffect, useState } from 'react';
import "./Overview.css"


const Overview = () => {
  const [data, setData] = useState("adilxan1998");
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${data}/repos`).then((response => response.json())).then((data) => setInfo(data))
  }, [])

  info.splice(6);
  console.log(info);
  return (
    <>
      <div className="overview-wrapper">
        <div className="overview-wrapper-box">
          <p className='overview-wrapper-popular'>Popular repositories</p>
          <p className='overview-wrapper-customize'>Customize your pins</p>
        </div>

        <ul className='overview-list'>

          {
            info.map((data) => {
              return (
                <li className='overview-item' key={data.name}>
                  <div className="overview-item-inner">
                    <a className='overview-item-link' href={data.html_url}>
                      <p className='overview-item-project-name'>{data.name}</p>
                    </a>
                    <p className='overview-item-public'>Public</p>
                  </div>
                  <div className='overview-item-box'>
                    <p className='overview-item-box-text'>HTML</p>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </>
  );
}

export default Overview