import React, { Component } from "react";

export default class Form extends Component {
  state = {
    input: "",
  };

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.input) {
      this.props.startLoadingData(this.state.input.toLocaleLowerCase());
      this.setState({ input: "" });
    }
  };
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.input}
          />
          <button onClick={this.handleSubmit}>SUBMIT</button>
        </form>
      </div>
    );
  }
}
