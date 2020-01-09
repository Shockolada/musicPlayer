export const songItemStyle = theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    height: 80,
    overflow: "unset"
  },
  cardContent: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1
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
  sliderRoot: {
    // padding: `${theme.spacing(0)}` `${theme.spacing(1)}`,
    // marginRight: theme.spacing(2),
    marginLeft: theme.spacing(1.5),
    marginRight: theme.spacing(1.5)
  }
});
