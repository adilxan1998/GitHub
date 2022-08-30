import "./Header.css";
import { Link } from "react-router-dom"
import siteLogo from "../../../assets/img/site-logo.jpg";
import bell from "../../../assets/img/bell.png";
import plus from "../../../assets/img/plus.jpg";
import I from "../../../assets/img/I.jpg";
import smile from "../../../assets/img/smile.jpg";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container-fluid">
          <div className="header-inner">
            <nav className="header-inner-box d-flex">
              <img className="header-logo rounded-pill" src={siteLogo} alt="" />
              <input className="header-input" type="text" placeholder="Search or jump to..." />
              <ul className="header-inner-list">
                <li className="header-inner-item">Pull requests</li>
                <li className="header-inner-item">Issues</li>
                <li className="header-inner-item">Marketplace</li>
                <li className="header-inner-item">Explore</li>
              </ul>
            </nav>
            <div className="d-flex gap-3 align-items-center">
              <img className="bell" src={bell} alt="" />
              <img className="img-plus" src={plus} alt="" width={19} height={19} />
              <div className="d-flex align-items-center">
                <nav>
                  <div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" >
                      <span className="navbar-toggler-icon">
                        <img className="rounded-pill" src={I} alt="" width={23} height={23} />
                      </span>
                      <span className="dropdown-caret ms-1"></span>
                    </button>
                    <div className="rounded h-75 mt-5 me-4 offcanvas offcanvas-end" style={{ width: "200px" }} tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

                      <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                          <ul className="m-0 list-unstyled">
                            <li className="nav-item  text-dark">Signed in as</li>
                            <li className="nav-item  text-dark ">ADILXAN_9627</li>
                            <hr className="navbar-line" />
                            <div className="navbar-form">
                              <img className="navbar-form-img" src={smile} alt="" width={16} />
                              <input className="navbar-from-input" type="text" placeholder="Set status" />
                            </div>
                            <hr className="navbar-line" />
                            <li className="nav-item  text-dark">Your Profile</li>
                            <li className="nav-item  text-dark">Your Repositories</li>
                            <li className="nav-item  text-dark">Your Codespaces</li>
                            <li className="nav-item  text-dark">Your Project</li>
                            <li className="nav-item  text-dark">Your Starts</li>
                            <li className="nav-item  text-dark">Your Gists</li>
                            <hr className="navbar-line" />
                            <li className="nav-item  text-dark">Upgrade</li>
                            <li className="nav-item  text-dark">Feature preview</li>
                            <li className="nav-item  text-dark">Help</li>
                            <li className="nav-item  text-dark">Settings</li>
                            <hr className="navbar-line" />

                          </ul>
                          <Link className="text-decoration-none text-dark" to="/">
                            Sign Out
                          </Link>
                        </ul>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header