export const songItemStyle = theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    height: 80,
    overflow: "hidden"
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
  }
});
