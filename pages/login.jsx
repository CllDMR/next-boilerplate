import React from "react";
import Layout from "../layouts/Basic";
// Redux
import { connect } from "react-redux";
import { signIn, signUp } from "../redux/actions/auth";
// Material UI
import { withStyles } from "@material-ui/styles";
import { Button, TextField } from "@material-ui/core";
// Next js Router
import Router from "next/router";

const styles = theme => ({
  padding: { padding: theme.spacing(4, 5) }
});

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  handleTextChange = name => event => {
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  render() {
    const { classes, signIn } = this.props;
    const { email, password } = this.state;
    const { handleTextChange } = this;

    return (
      <Layout title="Login Page">
        <h1>Login Page</h1>
        <TextField
          type="email"
          autoComplete="email"
          label="Email"
          variant="filled"
          value={email}
          onChange={handleTextChange("email")}
        />
        <TextField
          type="password"
          autoComplete="current-password"
          label="Password"
          variant="filled"
          value={password}
          onChange={handleTextChange("password")}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => signIn({ email, password })}
        >
          Sign In
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            Router.push({ pathname: "/" });
          }}
        >
          Go To Index Page
        </Button>
      </Layout>
    );
  }
}

const temp = withStyles(styles)(Page);

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  signIn: payload => dispatch(signIn(payload)),
  signUp: payload => dispatch(signUp(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(temp);
