import { connect } from "react-redux";
import { login } from "../actions/authActions";
import { Login } from "./Login";

function mapStateToProps(state) {
  return {
    error: state.auth.error
  };
}

const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
