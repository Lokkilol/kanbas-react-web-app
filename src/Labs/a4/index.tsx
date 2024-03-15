import React from "react";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariables";
import ArrayStateVariable from "./ArrayStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
import { LabState } from "../store";
import { useSelector } from "react-redux";

const Assignment4 = () => {
    function sayHello() {
        alert("hello!")
    }
      const { todos } = useSelector((state: LabState) => state.todosReducer);

  return(
      <>
      
        <h1>Assignment 4</h1>
        <ClickEvent/>
        <PassingDataOnEvent/>
        <PassingFunctions theFunction={sayHello}/>
        <EventObject/>
        <Counter/>
        <BooleanStateVariables/>
        <StringStateVariables/>
        <DateStateVariable/>
        <ArrayStateVariable/>
        <ObjectStateVariable/>
        <ParentStateComponent/> <br />
        <ReduxExamples/>
        <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>

        
      </>
  );
};
export default Assignment4;