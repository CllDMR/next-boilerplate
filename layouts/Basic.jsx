import Head from "next/head";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center"
  }
});

export default withStyles(styles)(
  ({ classes, children, title = "This is the default title" }) => (
    <div className={classes.container}>
      <Head>
        <title>{title}</title>
      </Head>

      {children}
    </div>
  )
);
