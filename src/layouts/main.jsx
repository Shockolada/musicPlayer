import React, { PureComponent } from "react";
import Search from "../components/Search";
import SongItem from "../components/SongItem/SongItem";
import { withStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";

const style = {};
class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      song: null
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
        console.log(response);
        this.setState({
          isLoaded: true,
          song: response
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { classes } = this.props;

    return (
      <>
        <Search visible text="Я видимый!" />
        <SongItem data={this.state.song} />
        <Button color="primary" variant="contained">Кнопка</Button>
      </>
    );
  }
}

export default withStyles(style)(Main);
