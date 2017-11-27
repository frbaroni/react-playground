import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { Login } from "../components/Login";

describe("Login component", () => {
  it("renders pristine", () => {
    const props = {
      success: false,
      error: false,
      login: jest.fn()
    };
    const wrapper = shallow(<Login {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders with error", () => {
    const props = {
      success: false,
      error: true,
      login: jest.fn()
    };
    const wrapper = shallow(<Login {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders with success", () => {
    const props = {
      success: true,
      error: false,
      login: jest.fn()
    };
    const wrapper = shallow(<Login {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders with success and error", () => {
    const props = {
      success: true,
      error: true,
      login: jest.fn()
    };
    const wrapper = shallow(<Login {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
