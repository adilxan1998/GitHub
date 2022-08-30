import React, { useState, useEffect } from 'react';
import strelka from "../../assets/img/strelka.png";
import star from "../../assets/img/star.png";
import repository from "../../assets/img/repository.png";
import "./Repositories.css"


const Repositories = () => {
  const [data, setData] = useState("adilxan1998");
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${data}/repos`).then((response => response.json())).then((data) => setInfo(data))
  }, [])


  console.log(info.length);


  return (
    <>
      <div className='repository-wrapper'>
        <div className="repository-form">
          <input className='repository-form-input' type="text" placeholder='Find a repository...' />
          <div className="repository-wrapper-inner">
            <div className="repository-wrapper-box">
              Type
              <img className='repository-img-strelka' src={strelka} alt="" />
            </div>
            <div className="repository-wrapper-box">
              Lenguage
              <img className='repository-img-strelka' src={strelka} alt="" />
            </div>
            <div className="repository-wrapper-box">
              Sort
              <img className='repository-img-strelka' src={strelka} alt="" />
            </div>
          </div>
          <div className='repository-wrapper-box-new'>
            <img className='repository-img' src={repository} alt="" />
            New
          </div>
        </div>

        <ul className='repository-list'>

          {
            info.map((item) => {
              return (
                <li className='repository-item' key={item.name}>
                  <div className="repository-item-inner">
                    <div className="repository-inner-box">
                      <a className='repository-item-link' href={item.html_url}>
                        <p className="repository-item-text">{item.name}</p>
                      </a>
                      <p className='repository-item-public'>Public</p>
                    </div>
                    <div className="repository-star-box">
                      <img className='repository-star-img' src={star} alt="" />
                      <p className="star-text">Star</p>
                      <div className="icon-wrapper-box">
                        <img className='repository-box-strelka' src={strelka} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="repository-item-box-2 d-flex align-items-end w-100 justify-content-between mb-4">
                    <div className='repository-item-box-2-text-box d-flex gap-4 mt-3'>
                      <p className='repository-item-box-2-text-box-text'>
                        <span className='repository-item-box-2-text-box-span'></span>
                        JavaScript
                      </p>
                      <p className='repository-item-box-2-text-box-update'>Updated {item.updated_at}</p>
                    </div>
                    <div className='repository-star-line'></div>
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

export default Repositories