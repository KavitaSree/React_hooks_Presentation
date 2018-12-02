import * as React from "react";
import { memo, ReactNode, Component } from "react";
import { List, Paper, Grid } from "@material-ui/core";

import TodoListItem from "./TodoListItem";

interface Props {
  items;
  onItemRemove;
  onItemCheck;

  type?: string;
  children?: ReactNode;
}

const TodoList: React.SFC<Props> = props => (
  <>
    {props.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List style={{ overflow: "scroll" }}>
          {props.items.map((todo, idx) => (
            <TodoListItem
              {...todo}
              key={`TodoItem.${idx}`}
              divider={idx !== props.items.length - 1}
              onButtonClick={() => props.onItemRemove(idx)}
              onCheckBoxToggle={() => props.onItemCheck(idx)}
            />
          ))}
        </List>
      </Paper>
    )}
  </>
);

const MemeoedTodoList = memo(TodoList);
export default MemeoedTodoList;
