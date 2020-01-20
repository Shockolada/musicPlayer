export const mainStyle = theme => ({
  root: {
    paddingBottom: 80 + theme.spacing(2),
    paddingTop: 60 + theme.spacing(2),
  },
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: "100%",
    height: 60
  },
  footerSong: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%"
  }
});
