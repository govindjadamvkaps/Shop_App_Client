import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <header className="site-navbar" role="banner">
        <div className="site-navbar-top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
                <form action="" className="site-block-top-search">
                  <span className="icon icon-search2" />
                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder="Search"
                  />
                </form>
              </div>
              <div className="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
                <div className="site-logo">
                  <NavLink to="/" className="js-logo-clone">
                    Shoppers
                  </NavLink>
                </div>
              </div>
              <div className="col-6 col-md-4 order-3 order-md-3 text-right">
                <div className="site-top-icons">
                  <ul>
                    <li>
                      <NavLink to="#">
                        <span className="icon icon-person" />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <span className="icon icon-heart-o" />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/cart" className="site-cart">
                        <span className="icon icon-shopping_cart" />
                        <span className="count">2</span>
                      </NavLink>
                    </li>
                    <li className="d-inline-block d-md-none ml-md-0">
                      <NavLink to="#" className="site-menu-toggle js-menu-toggle">
                        <span className="icon-menu" />
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <NavBar />
      </header>
    </>
  );
};

export default Header;
