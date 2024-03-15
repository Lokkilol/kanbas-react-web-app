import { useSelector } from "react-redux";
import Add from "./Add";
import Classes from "./Classes";
import ConditionalOutput from "./ConditonalOutput";
import Highlight from "./Highlight";
import JavaScript from "./JavaScript";
import Styles from "./Styles";
import Routing from "./routing";
import TodoList from "./todos/ToDoList";
import { LabState, TodoType } from "../store";
import TodoForm from "../a4/ReduxExamples/todos/TodoForm";
import TodoItem from "../a4/ReduxExamples/todos/TodoItem";


function Assignment3() {
  const { todos } = useSelector((state: LabState) => state.todosReducer);

 return (
   <div className="container">
     <h1>Assignment 3</h1>
     <div>
      <h2>Todo List</h2>
      <ul className="list-group">
        <TodoForm />
        {todos.map((todo: TodoType) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    </div>


     <ConditionalOutput/>
     <Styles/>
     <Classes/>
     <JavaScript/>
     <Routing/>
     <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
     </Highlight>
     <Add a={3} b={4} />
     <TodoList/>
     
   </div>
 );
}


export default Assignment3