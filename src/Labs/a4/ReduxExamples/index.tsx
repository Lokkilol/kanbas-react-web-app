import React from "react";
import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";
import TodoForm from "./todos/TodoForm";
import { useSelector } from "react-redux";
import { LabState, TodoType } from "../../store";
import TodoItem from "./todos/TodoItem";

const ReduxExamples = () => {
  const { todos } = useSelector((state: LabState) => state.todosReducer);

  return(
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux/>
      <CounterRedux/>
      <AddRedux/>
      <div>
      <h2>Todo List</h2>
      <ul className="list-group">
        <TodoForm />
        {todos.map((todo: TodoType) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    </div>

      
    </div>
  );
};

export default ReduxExamples;