import React, { PureComponent } from "react";
import Search from "../components/Search";
import SongItem from "../components/SongItem/SongItem";
import { withStyles } from "@material-ui/styles";
import { Button, List, ListItem, ListItemText } from "@material-ui/core";

const style = {};
class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      song: null,
      searchResult: null,
      searchData: null
    };
  }

  async componentDidMount() {
    // fetch("https://api.example.com/items")
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       this.setState({
    //         isLoaded: true,
    //         items: result.items
    //       });
    //     },
    //     // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
    //     // чтобы не перехватывать исключения из ошибок в самих компонентах.
    //     (error) => {
    //       this.setState({
    //         isLoaded: true,
    //         error
    //       });
    //     }
    //   )

    fetch("https://deezerdevs-deezer.p.rapidapi.com/track/72695088", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "1008ad51f9msh2ad23c0d6733bebp1f0283jsn9f7cf7f5988b"
      }
    })
      .then(res => res.json())
      .then(response => {
        // console.log(response);
        this.setState({
          isLoaded: true,
          song: response
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

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
    const song = Object.values(this.state.searchData.data).find(item => item['id'] === id)
    this.setState({ song });
  }

  render() {
    const { classes } = this.props;
    const { searchData, searchResult } = this.state;
    const renderSearchList = (items, limit) => (
      <List component="nav" aria-label="secondary mailbox folders">
        {items.data.slice(0, limit).map((item, key) => (
          <ListItem key={item.id} button onClick={e => this.searchItemClick(item.id)}>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    );

    return (
      <>
        <Search
          getSearchValue={this.getSearchValue}
          visible
          text="Я видимый!"
        />
        {searchData != null &&
          searchData.total != null &&
          searchData.total > 0 &&
          searchResult != null &&
          searchResult !== "" &&
          renderSearchList(searchData, 5)}
        <SongItem data={this.state.song} />
        <Button color="primary" variant="contained">
          Кнопка
        </Button>
      </>
    );
  }
}

export default withStyles(style)(Main);
