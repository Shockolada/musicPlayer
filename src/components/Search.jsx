import React, { PureComponent } from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";


class Search extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      result: ""
    };
  }

  handleInputChange = () => {
    this.setState({
      result: this.search.value
    });
  };

  render() {
    return (
      <form>
        <TextField
          label="Search"
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <p>{this.state.result}</p>
        {this.state.result === "" ? "Пусто" : "Не пусто"}
        {this.props.visible && (
          <p style={{ color: "red" }}>{this.props.text}</p>
        )}
      </form>
    );
  }
}

export default Search;
