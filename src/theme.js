import { createMuiTheme } from "@material-ui/core/styles";
import { red, amber, blue } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: red,
    error: {
      main: red.A400
    },
    background: {
      default: amber[50]
    }
  }
});

export default theme;
