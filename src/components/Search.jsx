import React, { PureComponent } from "react";
import { TextField } from "@material-ui/core";

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
