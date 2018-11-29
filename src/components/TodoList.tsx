import React, { memo } from "react";
import { List, Paper, Grid } from "@material-ui/core";

import TodoListItem from "./TodoListItem";

const TodoList = memo(props => (
  <>
    {this.props.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List style={{ overflow: "scroll" }}>
          {this.props.items.map((todo, idx) => (
            <TodoListItem
              {...todo}
              key={`TodoItem.${idx}`}
              divider={idx !== this.props.items.length - 1}
              onButtonClick={() => this.props.onItemRemove(idx)}
              onCheckBoxToggle={() => this.props.onItemCheck(idx)}
            />
          ))}
        </List>
      </Paper>
    )}
  </>
));

export default TodoList;
