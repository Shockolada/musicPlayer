import React, { PureComponent } from "react";
import { songItemStyle } from "./songItemStyle";
import { withStyles } from "@material-ui/styles";
import {
  IconButton,
  Typography,
  Card,
  CardMedia,
  Slider,
  Box,
  CardContent
} from "@material-ui/core";
import VolumeButton from "../VolumeButton/VolumeButton";
import { PlayArrow, Pause } from "@material-ui/icons";

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
      duration: 0,
      volume: 70,
      mute: false
    };
    this.handleVolumeListener = this.handleVolumeListener.bind(this);
    this.handlePlayBtn = this.handlePlayBtn.bind(this);
    this.handleMuteListener = this.handleMuteListener.bind(this);
    this.handleSliderListener = this.handleSliderListener.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("UserSettings") != null) {
      const userSettings = JSON.parse(localStorage.getItem("UserSettings"));
      if (userSettings.volume != null) {
        this.setState({
          volume: parseInt(userSettings.volume)
        });
      }
      if (userSettings.mute !== undefined) {
        this.setState({
          mute: userSettings.mute
        });
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.data != prevProps.data) {
      this.player.addEventListener("timeupdate", e => {
        this.setState({
          currentTime: e.target.currentTime
        });
      });

      this.player.addEventListener("canplay", e => {
        this.setState({
          currentTime: e.target.currentTime,
          duration: e.target.duration
        });
      });
    }

    if (this.state.play !== prevState.play) {
      this.state.play ? this.player.play() : this.player.pause();
    }
    if (this.state.volume !== prevState.volume) {
      if (localStorage.getItem("UserSettings") != null) {
        let userSettings = JSON.parse(localStorage.getItem("UserSettings"));
        userSettings.volume = this.state.volume;
        localStorage.setItem("UserSettings", JSON.stringify(userSettings));
      } else {
        localStorage.setItem(
          "UserSettings",
          JSON.stringify({ volume: this.state.volume })
        );
      }
      if (this.state.volume === 0) {
        this.setState({
          mute: true
        });
      } else if (this.state.mute) {
        this.setState({
          mute: false
        });
      }
    }

    if (this.state.mute !== prevState.mute) {
      if (this.state.mute) {
        this.player.volume = 0;
      } else {
        if (this.state.volume === 0) {
          this.handleVolumeListener(10);
        } else {
          this.player.volume = this.state.volume / 100;
        }
      }
      this.state.volume === 0 &&
        !this.state.mute &&
        this.setState({ mute: true });

      if (localStorage.getItem("UserSettings") != null) {
        let userSettings = JSON.parse(localStorage.getItem("UserSettings"));
        userSettings.mute = this.state.mute;
        localStorage.setItem("UserSettings", JSON.stringify(userSettings));
      } else {
        localStorage.setItem(
          "UserSettings",
          JSON.stringify({ mute: this.state.mute })
        );
      }
    }
  }

  componentWillUnmount() {
    this.player.removeEventListener("timeupdate", () => {});
  }

  handlePlayBtn = () => {
    this.setState({
      play: !this.state.play
    });
  };

  handleVolumeListener = value => {
    this.setState({ volume: value });
    this.player.volume = value / 100;
  };

  handleMuteListener = () => {
    this.setState({
      mute: !this.state.mute
    });
  };

  handleSliderListener = (event, newValue) => {
    this.setState({
      currentTime: newValue
    });
    this.player.currentTime = newValue;
    // localStorage.setItem('UserSettings', JSON.stringify({volume: newValue}))
  };

  render() {
    const { classes, data } = this.props;
    const { play } = this.state;

    if (data === null) {
      return (
        <>
          <p>Loading</p>
          <audio controls ref={ref => (this.player = ref)} hidden />
        </>
      );
    }
    const song = data.preview;
    const currentTime = getTime(this.state.currentTime);
    const duration = getTime(this.state.duration);

    return (
      <Card className={classes.root}>
        <CardContent className={classes.cardContent}>
          <div className={classes.icon}>
            <IconButton onClick={this.handlePlayBtn}>
              {play ? <Pause /> : <PlayArrow />}
            </IconButton>
          </div>
          
          <div className={classes.content}>
            <div>
              <Typography variant="body1" component="span">
                {data.artist.name} -{" "}
              </Typography>
              <Typography
                variant="body1"
                component="span"
                color="textSecondary"
              >
                {data.title}
              </Typography>
            </div>
            <Box display="flex" flexGrow="1" alignItems="center">
              <Typography variant="caption" component="span">
                {currentTime}
              </Typography>
              <Slider
                onChange={this.handleSliderListener}
                classes={{
                  root: classes.sliderRoot,
                }}
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
              hidden
            />
          </div>
          <VolumeButton
            onChange={this.handleVolumeListener} // Просто название
            volume={this.state.volume}
            mute={this.state.mute}
            handlerMute={this.handleMuteListener}
          />
        </CardContent>
        <CardMedia
          className={classes.cover}
          image={data.album.cover_medium}
          title={data.title}
        />
      </Card>
    );
  }
}

export default withStyles(songItemStyle)(SongItem);
