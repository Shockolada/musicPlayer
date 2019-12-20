import React, { PureComponent } from "react";
import {
  VolumeUp,
  VolumeDown,
  VolumeMute,
  VolumeOff
} from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";
import { volumeButtonStyle } from "./volumeButtonStyle";
import Slider from "@material-ui/core/Slider";

class VolumeButton extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
    this.hoverVolumeButton = this.hoverVolumeButton.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
  }

  hoverVolumeButton = value => {
    console.log(value);
    this.setState({
      show: value
    });
  };

  handleSliderChange = (e, value) => {
    this.props.onChange(value);
  };

  render() {
    const { classes } = this.props;
    const volume = this.props.volume != null ? this.props.volume : 100;
    let volumeIcon = <VolumeUp />;
    switch (true) {
      case (volume === 0):
        volumeIcon = <VolumeOff />;
        break;
      case (volume < 30):
        volumeIcon = <VolumeMute />;
        break;
      case (volume < 70):
        volumeIcon = <VolumeDown />;
        break;
      default: 
        volumeIcon = <VolumeUp />;
    }
    
    return (
      <div
        className={classes.root}
        onMouseEnter={() => this.hoverVolumeButton(true)}
        onMouseLeave={() => this.hoverVolumeButton(false)}
      >
        {volumeIcon}
        {this.state.show && (
          <div className={classes.sliderContainer}>
            <Slider
              name="volume"
              orientation="vertical"
              value={volume}
              onChange={this.handleSliderChange}
              classes={{
                root: classes.sliderRoot
              }}
            />
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(volumeButtonStyle)(VolumeButton);
