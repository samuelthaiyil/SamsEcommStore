import React, { Component } from "react";
import Product from "../shared/Product";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="m-2">
          <h3>Shoes</h3>
        </div>
        <div className="d-flex mx-2">
          <Product
            company="Yeezy"
            name="360 Boost V1"
            description="The Yeezy Boost 350 V1 set a unique tone for the world of athletic shoes when it was released."
          ></Product>
          <Product
            company="Nike"
            name="Air Force 1"
            description="Designed by Bruce Kilgore and introduced in 1982, the Air Force 1 was the first ever basketball shoe to feature Nike Air technology."
          ></Product>
        </div>
        <div className="m-2">
          <h3>Shirts</h3>
        </div>
        <div className="d-flex mx-2">
          <Product
            company="VLONE"
            name="Vlone Pop Smoke Tee"
            description="VLONE tribute shirt to Pop Smoke."
          ></Product>
        </div>
      </div>
    );
  }
}
