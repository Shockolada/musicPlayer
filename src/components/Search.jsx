import React, { PureComponent } from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";


class Search extends PureComponent {
  constructor(props) {
    super(props);

    // this.state = {
    //   result: ""
    // };
  }

  handleInputChange = (value) => {
    this.props.getSearchValue(value)
  };

  render() {
    return (
      <form>
        <TextField
          label="Search"
          onChange={e => this.handleInputChange(e.target.value)}
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
      </form>
    );
  }
}

export default Search;
