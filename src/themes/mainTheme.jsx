import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

// const getOverrides = theme => ({
//   MuiIconButton: {
//     color: theme.palette.icon
//   }
// });

const mainTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#ec625f"
    },
    secondary: {
      main: "#fff"
    },
    background: {
      default: "#252525",
      paper: "#414141"
    },
    text: {
      primary: "#fff",
      secondary: "#bdbdbd"
    },
    icon: "#fff"
  },
  overrides: {
    MuiInput: {
      underline: {
        "&::before": {
          borderColor: "#fff"
        }
      }
    }
  },
  props: {
    MuiIconButton: {
      color: "secondary"
    }
  }
});


export const theme = responsiveFontSizes(mainTheme);
