import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './components/model';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo){
      setTodos([...todos, {id: Date.now(), todo, isDone:false}]);
      setTodo("")
    }

  };

  console.log(todo);

  return (
    <div className="App">
      <span className = "heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;


// == TICTACTOE CODE ==
// import { useState } from 'react';

// // type SquareProps = {
// //   value: string;
// // }

// function Square(){
//   const[value, setValue] = useState(null)
  
//   function handleClick(){
//     // setValue("X");
//   }

//   return( 
//     <button className="square" onClick={handleClick}>
//       {value}
//     </button>
//   );
// }

// export default function Board(){
//   return (
//     <>
//     <div className="board-row">
//       <Square />
//       <Square />
//       <Square />
//     </div>
//     <div className="board-row">
//       <Square />
//       <Square />
//       <Square />
//     </div>
//     <div className="board-row">
//       <Square />
//       <Square />
//       <Square />
//     </div>
//     </>
//   );
// }