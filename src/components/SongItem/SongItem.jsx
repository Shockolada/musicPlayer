import React, { PureComponent } from "react";
import { songItemStyle } from "./songItemStyle";
import { withStyles } from "@material-ui/styles";
import {
  IconButton,
  Typography,
  Card,
  CardMedia,
  Slider
} from "@material-ui/core";
import PlayArrow from "@material-ui/icons/PlayArrow";
import Pause from "@material-ui/icons/Pause";

class SongItem extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      play: false
    };
  }

  handleSongPlay = () => {
    this.setState({
      play: !this.state.play
    });
  };

  render() {
    const { classes } = this.props;
    const { play } = this.state;
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
          <Slider defaultValue={20} />
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
