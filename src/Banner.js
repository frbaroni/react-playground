import React, { Component } from "react";
import { Carousel, CarouselItem } from "reactstrap";

import img0 from "./slider/a.jpg";
import img1 from "./slider/b.jpg";
import logo from "./slider/logo.jpg";
const items = [img0, img1];

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
  }

  onEntering = (node, isAppearing) => {
    console.log("Enter", node);
  };

  onExited = node => {
    console.log("Exit", node);
  };

  next = () => {
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    this.next();
  };

  form = () => {
    return (
      <div className="form col-md-6 offset-md-3 col-sm-12 push-sm-12">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox" className="form-check-input" />
              Remember me?
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  };

  slides = () => {
    return items.map(item => (
      <CarouselItem
        onEntering={this.onEntering}
        onEnter={this.onEntering}
        onEntered={this.onEntering}
        onExited={this.onExited}
        key={item}
        src={item}
        altText={item}
      />
    ));
  };

  carousel = () => {
    return (
      <div className="col-sm-12 pull-sm-12">
        <Carousel
          activeIndex={this.state.activeIndex}
          next={this.next}
          previous={this.previous}
          pause={false}
          slide={false}
          interval={2000}
          keyboard={false}
          ride={"carousel"}
        >
          {this.slides()}
        </Carousel>
      </div>
    );
  };

  logo = () => {
    return (
      <div className="logo">
        <a href="#logo">
          <img src={logo} alt="Hello World" />
        </a>
      </div>
    );
  };

  render() {
    return (
      <div className="row wrapper">
        {this.carousel()}
        {this.logo()}
        {this.form()}
      </div>
    );
  }
}

export default Banner;
