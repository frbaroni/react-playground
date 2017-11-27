import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import { Login } from "../components/Login";

describe("Login component", () => {
  const defaultProps = {
    success: false,
    error: false,
    login: jest.fn()
  };
  it("renders pristine", () => {
    const props = {
      ...defaultProps
    };
    const wrapper = shallow(<Login {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders with error", () => {
    const props = {
      ...defaultProps,
      error: true
    };
    const wrapper = shallow(<Login {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders with success", () => {
    const props = {
      ...defaultProps,
      success: true
    };
    const wrapper = shallow(<Login {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders with success and error", () => {
    const props = {
      ...defaultProps,
      success: true,
      error: true
    };
    const wrapper = shallow(<Login {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("login is called", () => {
    const props = {
      ...defaultProps
    };
    const wrapper = shallow(<Login {...props} />);
    const { login } = props;

    expect(login).not.toHaveBeenCalled();
    wrapper.find("button").simulate("click");
    expect(login).toHaveBeenCalled();
  });
});
