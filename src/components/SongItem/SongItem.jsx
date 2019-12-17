import React, { PureComponent } from "react";
import { songItemStyle } from "./songItemStyle";
import { withStyles } from "@material-ui/styles";
import {
  IconButton,
  Typography,
  Card,
  CardMedia,
  Slider,
  Box
} from "@material-ui/core";
import PlayArrow from "@material-ui/icons/PlayArrow";
import Pause from "@material-ui/icons/Pause";

function getTime(time) {
  if (!isNaN(time)) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }
}

class SongItem extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      play: false,
      currentTime: 0,
      duration: 0
    };
  }

  handleSongPlay = () => {
    this.state.play ? this.player.pause() : this.player.play();
    this.setState({
      play: !this.state.play
    });
  };

  componentDidMount() {
    this.player.addEventListener("timeupdate", e => {
      this.setState({
        currentTime: e.target.currentTime,
        duration: e.target.duration
      });
    });
    this.player.addEventListener("canplay", e => {
      this.setState({
        currentTime: e.target.currentTime,
        duration: e.target.duration
      });
    });
  }

  componentDidUpdate() {
    this.player.addEventListener("timeupdate", e => {
      this.setState({
        currentTime: e.target.currentTime,
        duration: e.target.duration
      });
    });
  }

  componentWillUnmount() {
    this.player.removeEventListener("timeupdate", () => {});
  }

  render() {
    const { classes } = this.props;
    const { play } = this.state;
    const song =
      "https://cdns-preview-e.dzcdn.net/stream/c-e362b2ff8d549bc01ffe5c5b28f8fa55-4.mp3";
    const currentTime = getTime(this.state.currentTime);
    const duration = getTime(this.state.duration);

    return (
      <Card className={classes.root}>
        <div className={classes.icon}>
          <IconButton onClick={this.handleSongPlay}>
            {play ? <Pause /> : <PlayArrow />}
          </IconButton>
        </div>
        <div className={classes.content}>
          <div>
            <Typography variant="body1" component="span">
              Author -{" "}
            </Typography>
            <Typography variant="body1" component="span" color="textSecondary">
              Track name
            </Typography>
          </div>
          <Box display="flex" flexGrow="1">
            <Typography variant="caption" component="span">
              {currentTime}
            </Typography>
            <Slider
              defaultValue={this.state.currentTime}
              value={this.state.currentTime}
              max={this.state.duration}
              step={0.1}
            />
            <Typography variant="caption" component="span">
              {duration}
            </Typography>
          </Box>
          <audio
            src={song}
            controls
            ref={ref => (this.player = ref)}
            autoplay
            hidden
          />
        </div>
        <CardMedia
          className={classes.cover}
          image="https://i1.sndcdn.com/avatars-ezHRy0UjTQihiywm-tLtCZQ-t200x200.jpg"
          title="Live from space album cover"
        />
      </Card>
    );
  }
}

export default withStyles(songItemStyle)(SongItem);
