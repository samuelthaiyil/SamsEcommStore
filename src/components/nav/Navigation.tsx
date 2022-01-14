import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    const navLinkStyle = {
      border: 'none',
      backgroundColor: 'white',
      
    };

    return (
      <div className="d-flex justify-content-between">
        <div className="row p-4">
          <div className="col-md-3">
              <NavLink to="/">
                <button style={navLinkStyle}>Home</button>
              </NavLink>
          </div>
          <div className="col-md-3">
            <NavLink to="mens">
              <button style={navLinkStyle}>Mens</button>
            </NavLink>
          </div>
          <div className="col-md-3">
            <NavLink to="womens">
              <button style={navLinkStyle}>Womens</button>
            </NavLink>
          </div>
          <div className="col-md-3">
            <NavLink to="kids">
              <button style={navLinkStyle}>Kids</button>
            </NavLink>
          </div>
        </div>
        <div className="row p-4">
          <NavLink to="cart">
            <button style={navLinkStyle}>My Cart</button>
          </NavLink>
        </div>
      </div>
    );
  }
}
