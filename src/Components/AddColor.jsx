import React, { Component } from "react";

class AddColor extends Component {
  render() {
    return (
      <div className="add-color-wrapper">
        <div className="add-color">
            <label htmlFor="color">Create a color</label>
            <input type="color" id="color" onChange={this.props.getColor} />
            <label htmlFor="colorName">Name your Color</label>
            <input type="text" id="colorName" onChange={this.props.getText} />
            <button onClick={this.props.handleSubmit}>Add Color</button>
        </div>
      </div>
    );
  }
}

export default AddColor;
