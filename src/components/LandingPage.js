import React from "react";

import Banner from "./Banner";
import Login from "./LoginContainer";

class LandingPage extends React.Component {
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
