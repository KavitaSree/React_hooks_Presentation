import "./styles.css";

import * as React from "react";
import { memo, ReactNode, Component } from 'react';
import ReactDOM from "react-dom";

import { useInputValue, useTodos } from './custom-hooks';

import Layout from "./components/Layout";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

interface Props {
  type?: string;
  children?: ReactNode;
}

//const TodoApp: = memo(props => {
const TodoApp: React.SFC<Props> = props => {
  const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
  const { todos, addTodo, checkTodo, removeTodo } = useTodos();

  const clearInputAndAddTodo = _ => {
    clearInput();
    addTodo(inputValue);
  };

  return (
    <Layout>
      <AddTodo
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputAndAddTodo}
        onInputKeyPress={event => keyInput(event, clearInputAndAddTodo)}
      />
      <TodoList
        items={todos}
        onItemCheck={idx => checkTodo(idx)}
        onItemRemove={idx => removeTodo(idx)}
      />
    </Layout>
  );
};
const MemoedTodoApp = memo(TodoApp);

const rootElement = document.getElementById("root");
ReactDOM.render(<MemoedTodoApp />, rootElement);
