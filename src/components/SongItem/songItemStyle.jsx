export const songItemStyle = theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    height: 80,
    overflow: "unset"
  },
  cover: {
    height: "100%",
    width: "80px",
  },
  progress: {
    // marginLeft: theme.spacing(2),
    // marginRight: theme.spacing(2),
    flexGrow: 1,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  icon: {
    minWidth: 50,
  },
  // track: {
  //   transition: "0.5s linear"
  // },
  // thumb: {
  //   transition: "0.5s linear"
  // },
});
