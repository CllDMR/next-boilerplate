import React from "react";
import clsx from "clsx";
import Layout from "../layouts/Basic";
import { Backend_Server_Url } from "../redux/config/constants";
// Redux
import { connect } from "react-redux";
import {
  counterUp,
  counterDown,
  counterReset,
  counterSet
} from "../redux/actions/counter";
// Material UI
import { withStyles } from "@material-ui/styles";
import { blueGrey } from "@material-ui/core/colors";
import { Button } from "@material-ui/core";
// Next js Router
import Router from "next/router";

const styles = theme => ({
  counterButtonContainer: {
    display: "flex",
    borderRadius: 15,
    backgroundColor: blueGrey[400]
  },
  padding: { padding: theme.spacing(4, 5) }
});

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes, counter } = this.props;

    return (
      <Layout title="Index Page">
        <h1>Index Page</h1>
        <h1>Backend_Server_Url: {Backend_Server_Url}</h1>
        <h1>Counter redux variable: {counter}</h1>
        <div
          className={clsx([classes.counterButtonContainer, classes.padding])}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={this.props.counterUp}
          >
            Counter Up
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={this.props.counterDown}
          >
            Counter Down
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={this.props.counterReset}
          >
            Counter Reset
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.props.counterSet({ value: 5 })}
          >
            Counter Set 5
          </Button>
        </div>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            Router.push({ pathname: "/login" });
          }}
        >
          Go To Login Page
        </Button>
      </Layout>
    );
  }
}

const temp = withStyles(styles)(Page);

const mapStateToProps = (state, ownProps) => ({ counter: state.counter });

const mapDispatchToProps = (dispatch, ownProps) => ({
  counterUp: () => dispatch(counterUp()),
  counterDown: () => dispatch(counterDown()),
  counterReset: () => dispatch(counterReset()),
  counterSet: payload => dispatch(counterSet(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(temp);
