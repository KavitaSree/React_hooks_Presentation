import * as React from "react";
import { memo, ReactNode, Component } from "react";

import {
  List,
  ListItem,
  Checkbox,
  IconButton,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

interface Props {
  type?: string;
  children?: ReactNode;
  divider;
  onCheckBoxToggle;
  checked;
  text;
  onButtonClick;
}

const TodoListItem: React.SFC<Props> = props => (
  <ListItem divider={props.divider}>
    <Checkbox
      onClick={props.onCheckBoxToggle}
      checked={props.checked}
      disableRipple
    />
    <ListItemText primary={props.text} />
    <ListItemSecondaryAction>
      <IconButton aria-label="Delete Todo" onClick={props.onButtonClick}>
        <DeleteOutlined />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

const MemoedTodoListItem = memo(TodoListItem);
export default MemoedTodoListItem;
