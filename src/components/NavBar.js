import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    // const [show ,setShow] =useState(false)
  return (
    <>
        <nav className="site-navigation text-right text-md-center" role="navigation">
    <div className="container">
      <ul className="site-menu js-clone-nav d-none d-md-block">
        <li className="has-children active">
          <NavLink to="/">Home</NavLink>
          <ul className="dropdown">
            <li>
              <NavLink to="#">Menu One</NavLink>
            </li>
            <li>
              <NavLink to="#">Menu Two</NavLink>
            </li>
            <li>
              <NavLink to="#">Menu Three</NavLink>
            </li>
            <li className="has-children">
              <NavLink to="#">Sub Menu</NavLink>
              <ul className="dropdown">
                <li>
                  <NavLink to="#">Menu One</NavLink>
                </li>
                <li>
                  <NavLink to="#">Menu Two</NavLink>
                </li>
                <li>
                  <NavLink to="#">Menu Three</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="has-children">
          <NavLink to="/about">About</NavLink>
          <ul className="dropdown">
            <li>
              <NavLink to="#">Menu One</NavLink>
            </li>
            <li>
              <NavLink to="#">Menu Two</NavLink>
            </li>
            <li>
              <NavLink to="#">Menu Three</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="#">Catalogue</NavLink>
        </li>
        <li>
          <NavLink to="#">New Arrivals</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </nav>
    </>
  )
}

export default NavBar