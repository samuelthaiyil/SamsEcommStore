import React, { Component } from "react";
import { IProduct } from "../../models/IProduct";
import Product from "./Product";

export default class Categories extends Component<
  {
    products: IProduct[];
    categoryName: string;
  },
  {}
> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const productList = this.props.products.map((product) => {
      return (
        <div className="col-md-2">
          <Product
            name={product.name}
            company={product.company}
            description={product.description}
          />
        </div>
      );
    });
    return (
      <div className="mx-3">
        <h3
          style={{
            marginBottom: "15px",
            marginTop: "30px",
          }}
        >
          {this.props.categoryName}
        </h3>
        <div className="row">{productList}</div>
      </div>
    );
  }
}
