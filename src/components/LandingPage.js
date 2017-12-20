import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Input, Label } from "reactstrap";

import Banner from "./Banner";
import Login from "./LoginContainer";

function Names(props) {
  const CHECK_GRID_WIDTH = 2;
  const CHECK_ROW_WIDTH = 6;
  const { names, onCheck } = props;

  const checks = _.map(_.keys(names), (name, index) => (
    <Col lg={CHECK_GRID_WIDTH}>
      <Label>
        <Input
          type="checkbox"
          onChange={({ target: { checked } }) => onCheck(name, checked)}
          disabled={index % 7 === 0}
        />{" "}
        {name}
      </Label>
    </Col>
  ));

  const inRows = _.chain(checks)
    .chunk(CHECK_ROW_WIDTH)
    .map(row => <Row>{row}</Row>)
    .value();

  const summary = "Hello";
  return (
    <Container>
      {summary}
      {inRows}
    </Container>
  );
}

Names.propTypes = {
  names: PropTypes.array.isRequired,
  onCheck: PropTypes.func.isRequired
};

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    const names = _.reduce(
      ["A", "B", "C", ..._.map(Array.from(Array(100).keys()))],
      (map, item) => {
        map["Item " + item] = false;
        return map;
      },
      {}
    );

    this.state = {
      names
    };
  }

  onCheck = (mix, checked) => {
    this.setState({
      names: { ...this.state.names, [mix]: checked }
    });
  };

  render() {
    const selection = _.map(
      _.keys(this.state.names),
      name => (this.state.names[name] ? <span key={name}>{name}</span> : null)
    );
    return (
      <div className="row wrapper">
        <Banner />
        <Login />
        {selection}
        <Names names={this.state.names} onCheck={this.onCheck} />
      </div>
    );
  }
}

export default LandingPage;
