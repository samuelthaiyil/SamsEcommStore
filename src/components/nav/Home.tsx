import React, { Component } from "react";
import Category from "../shared/Category";
import Product from "../shared/Product";
import StoreHeader from "../shared/StoreHeader";

export default class Home extends Component {
  render() {
    return (
      <div>
        <StoreHeader header="Browse Millions of Products." />
        <Category
          products={[
            {
              name: "Air Force 1",
              description: "One of Nike's most iconic shoes.",
              company: "Nike",
            },
            {
              name: "NMD",
              description: "Adidas made a comeback with this shoe.",
              company: "Adidas",
            },
          ]}
          categoryName="Shoes"
        />
        <Category
          products={[
            {
              name: "Air Force 1",
              description: "One of Nike's most iconic shoes.",
              company: "Nike",
            },
            {
              name: "NMD",
              description: "Adidas made a comeback with this shoe.",
              company: "Adidas",
            },
          ]}
          categoryName="Tees"
        />
      </div>
    );
  }
}
