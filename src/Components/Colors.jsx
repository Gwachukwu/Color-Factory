import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import ColorsHome from "./ColorsHome";
import DisplayColor from "./DisplayColor";
import AddColor from "./AddColor";

class Colors extends Component {
  state = {
    colors: [
      { name: "red", value: "#FF0000" },
      { name: "green", value: "#00FF00" },
      { name: "blue", value: "#0000FF" },
    ],
    color: "",
    colorHex: "",
  };
  getText = (e) => {
    this.setState({ color: e.target.value });
  };
  getColor = (e) => {
    this.setState({ colorHex: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const entries = [{ name: this.state.color, value: this.state.colorHex }];
    const userRecords = entries.concat(this.state.colors);
    this.setState({
      colors: userRecords,
    });
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/colors/add-color"
            render={() => (
              <AddColor
                colors={this.state.colors}
                getText={this.getText}
                getColor={this.getColor}
                handleSubmit={this.handleSubmit}
              />
            )}
          />
          <Route
            exact
            path="/colors"
            component={() => <ColorsHome colors={this.state.colors} />}
          />
          <Route
            path="/colors/:name/:value"
            component={() => <DisplayColor color={this.state.colors} />}
          />
          <Redirect to="/colors" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Colors);
