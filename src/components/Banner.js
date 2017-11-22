import React, { Component } from "react";
import { Carousel, CarouselItem } from "reactstrap";

import img0 from "../slider/a.jpg";
import img1 from "../slider/b.jpg";
import logo from "../slider/logo.jpg";
const items = [img0, img1];

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
  }

  onEntering = (node, isAppearing) => {
    // console.log("Enter", node);
  };

  onExited = node => {
    // console.log("Exit", node);
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
        {this.logo()}
      </div>
    );
  }
}

export default Banner;
