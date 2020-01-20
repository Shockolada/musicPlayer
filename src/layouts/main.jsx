import React, { PureComponent } from "react";
import Search from "../components/Search/Search";
import SongItem from "../components/SongItem/SongItem";
import { withStyles } from "@material-ui/styles";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@material-ui/core";
import { mainStyle } from "./mainStyle";

class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      song: null,
      searchResult: "",
      searchData: null
    };
  }

  async componentDidMount() {}

  async getSearch(value) {
    const result = await fetch(
      "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + value,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          "x-rapidapi-key": "21d6314bc0msh477205b9eee74bep15c810jsn86099ee4b1d7"
        }
      }
    )
      .then(response => response.json())
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);
        return null;
      });
    console.log(result);
    this.setState({ searchData: result });
  }

  getSearchValue = value => {
    value != null && value !== "" && this.getSearch(value);
    this.setState({ searchResult: value });
  };

  searchItemClick = id => {
    // alert(id)
    // console.log(this.state.searchResult)
    const song = Object.values(this.state.searchData.data).find(
      item => item["id"] === id
    );
    this.setState({ 
      song,
      searchResult: ""
     });
  };

  render() {
    const { classes } = this.props;
    const { searchData, searchResult, song } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <Search
            searchItemClick={this.searchItemClick}
            searchData={searchData}
            searchResult={searchResult}
            getSearchValue={this.getSearchValue}
            visible
            text="Я видимый!"
          />
          

          {song != null && (
            <div className={classes.footerSong}>
              <SongItem data={this.state.song} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(mainStyle)(Main);
