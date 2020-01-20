import React, { PureComponent } from "react";
import { TextField, InputAdornment, IconButton, Card } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { searchStyle } from "./searchStyle";
import { withStyles } from "@material-ui/styles";
import SearchList from "../SearchList/SearchList";

class Search extends PureComponent {
  constructor(props) {
    super(props);

    // this.state = {
    //   result: ""
    // };
  }

  handleInputChange = value => {
    this.props.getSearchValue(value);
  };

  render() {
    const { classes, searchData, searchResult } = this.props;
    return (
      <div className={classes.root}>
        <TextField
          value={searchResult}
          fullWidth
          label="Search"
          onChange={e => this.handleInputChange(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        {searchData != null &&
          searchData.total != null &&
          searchData.total > 0 &&
          searchResult != null &&
          searchResult !== "" && (
            <div className={classes.listRoot}>
              <Card>
                <SearchList
                  searchItemClick={this.props.searchItemClick}
                  searchData={searchData}
                />
              </Card>
            </div>
          )}
      </div>
    );
  }
}

export default withStyles(searchStyle)(Search);
