import React, { Component } from "react";

export default class Weather extends Component {
  render() {
    let { data } = this.props || {};

    if (Object.keys(data).length === 0) {
      return <h1>Loading.....</h1>;
    } else if (data) {
      return (
        <div>
          <h2>{data.name}</h2>
          <h2>Temperatures</h2>
          <h3>{data.main.temp_max}</h3>
          <h3>{data.main.temp_min}</h3>
          <br />
          <h2>Weather</h2>
          <h3>{data.weather[0].main}</h3>
          <h3>Visibility - {data.visibility}</h3>
          <br />
          <h2>Wind</h2>
          <h3>{data.wind.speed}</h3>
          <h3>{data.wind.deg}</h3>
        </div>
      );
    }
  }
}
