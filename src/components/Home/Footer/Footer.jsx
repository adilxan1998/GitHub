import React from 'react';
import './Footer.css'
import footerLogo from '../../../assets/img/github-logo.png'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-fluid">
          <div className="footer-inner">
            <div className="footer-icon-box d-flex align-items-center">
              <a href="">
                <img className='footer-icon' src={footerLogo} alt="footericon" width={24} height={24} />
              </a>
              <p className='footer-icon-text'>© 2022 GitHub, Inc.</p>
            </div>
            <ul className='footer-list'>
              <li className='footer-item'>Terms</li>
              <li className='footer-item'>Privacy</li>
              <li className='footer-item'>Security</li>
              <li className='footer-item'>Status</li>
              <li className='footer-item'>Docs</li>
              <li className='footer-item'>Contact GitHub</li>
              <li className='footer-item'>Pricing</li>
              <li className='footer-item'>API</li>
              <li className='footer-item'>Training</li>
              <li className='footer-item'>Blog</li>
              <li className='footer-item'>About</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;