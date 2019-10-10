import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Layout from "../layouts/Basic";

const styles = theme => ({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes, example } = this.props;

    return (
      <Layout>
        <div className={classes.container}>
          <h1 style={{ color: "white" }}>EXAMPLE</h1>
          <h1 style={{ color: "white" }}>{example}</h1>
        </div>
      </Layout>
    );
  }
}

const temp = withStyles(styles)(Page);

function mapStateToProps(state, ownProps) {
  return { example: state.example };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {};
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(temp);
