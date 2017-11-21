import React, { Component } from "react";
import Banner from "./Banner";
import Login from "./Login";

class LandingPage extends Component {
  render() {
    return (
      <div className="row wrapper">
        <Banner />
        <Login />
      </div>
    );
  }
}

export default LandingPage;
