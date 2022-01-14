import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <div className="row p-4">
        <div className="col-md-1">
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>

        <div className="col-md-1">
          <Link to="mens">
            <button>Mens</button>
          </Link>
        </div>

        <div className="col-md-1">
          <Link to="womens">
            <button>Womens</button>
          </Link>
        </div>
        <div className="col-md-1">
          <Link to="kids">
            <button>Kids</button>
          </Link>
        </div>
      </div>
    );
  }
}
