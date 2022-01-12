import React, { Component } from "react";

export default class Navigation extends Component {
  render() {
    return (
      <div className="row p-4 d-none-md">
        <div className="col-md-1">
          <button>
            Home
          </button>
        </div>
        <div className="col-md-1">
          <button>
            Mens
          </button>
        </div>
        <div className="col-md-1">
          <button>
            Womens
          </button>
        </div>
        <div className="col-md-1">
          <button>
            Kids
          </button>
        </div>
      </div>
    );
  }
}
