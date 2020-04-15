import React, { Component } from "react";
import { Link } from "react-router-dom";

class ColorsHome extends Component {
  render() {
    const colors = this.props.colors.map((color,index) => {
      return (
        <div key = {index}>
          <Link to={`/colors/${color.name}/${color.value.substring(1)}`}>{color.name}</Link>
        </div>
      );
    });
    return (
      <div>
        <div className="header">
          <h1>Welcome to the color factory.</h1>
          <h3 className="links">
            <Link to="./colors/add-color">Add a color</Link>
          </h3>
        </div>
        <div>
          <p>Please select a color</p>
          {colors}
        </div>
      </div>
    );
  }
}
export default ColorsHome;
