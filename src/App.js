import React, { Component } from "react";
import Form from "./Form";
import Weather from "./Weather";

export default class App extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    this.props.startLoadingData("delhi").then(() => {
      this.setState({ loading: false });
      this.props.setLoadingState(true);
    });
  }

  render() {
    return (
      <div>
        <h2>
          <i>Weather App</i>
        </h2>
        <Form {...this.props} />
        <Weather {...this.props} />
      </div>
    );
  }
}
