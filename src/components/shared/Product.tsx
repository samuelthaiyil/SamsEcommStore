import { Component } from "react";

class Product extends Component<
  { name: string; company: string; description?: string },
  {}
> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div className="card" style={{ width: "100%", height: "100%" }}>
        <img src="" alt="" />
        <div className="card-body">
          <h3 className="card-title">{this.props.name}</h3>
          <h5>{this.props.company}</h5>
          <p className="text-muted">{this.props.description}</p>
        </div>
        <button
          style={{
            color: "white",
            backgroundColor: "#ff6247",
            border: "none",
            margin: "15px",
            borderRadius: "5px",
            padding: "10px"
          }}
        >
          Buy
        </button>
      </div>
    );
  }
}

export default Product;
