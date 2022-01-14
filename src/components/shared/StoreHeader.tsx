import React, { Component } from "react";

export default class StoreHeader extends Component<
{ header: string },
{}
> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="text-center">
            <div className="my-5">
              <h2>{this.props.header}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

