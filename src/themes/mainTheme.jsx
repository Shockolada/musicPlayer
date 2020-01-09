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
    // MuiIconButton: {
    //   root: {
    //     color: "#fff",
    //     "&:hover": {
    //       backgroundColor: "rgba(255, 255, 255, 0.08)"
    //     }
    //   }
    // }
  },
  props: {
    MuiIconButton: {
      color: "secondary"
    }
  }
});


export const theme = responsiveFontSizes(mainTheme);
