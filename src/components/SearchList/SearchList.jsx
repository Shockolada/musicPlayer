import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/styles";
import {
  List,
  ListItem,
  ListItemText,
  Typography
} from "@material-ui/core";

const style = {}
class SearchList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    // const { classes } = this.props;
    const { searchData } = this.state;
    const renderSearchList = (items, limit) => (
      <List component="nav">
        {items.data.slice(0, limit).map((item, key) => (
          <ListItem
            key={item.id}
            button
            onClick={e => this.props.searchItemClick(item.id)}
          >
            <ListItemText
              primary={
                <>
                  <Typography component="span" variant="body1">
                    {item.artist.name}
                    {" - "}
                  </Typography>
                  <Typography
                    component="span"
                    variant="body1"
                    color="textSecondary"
                  >
                    {item.title}
                  </Typography>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    );

    return (
      renderSearchList(this.props.searchData, 5)
    );
  }
}

export default withStyles(style)(SearchList);
