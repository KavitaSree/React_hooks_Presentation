import React, { memo } from "react";

import {
  List,
  ListItem,
  Checkbox,
  IconButton,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

const TodoListItem = memo(props => (
  <ListItem divider={this.props.divider}>
    <Checkbox
      onClick={this.props.onCheckBoxToggle}
      checked={this.props.checked}
      disableRipple
    />
    <ListItemText primary={this.props.text} />
    <ListItemSecondaryAction>
      <IconButton aria-label="Delete Todo" onClick={this.props.onButtonClick}>
        <DeleteOutlined />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
));

export default TodoListItem;
