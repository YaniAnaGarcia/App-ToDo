import Header from './components/Header';
import './App.css';
import Form from './components/Form';
import { useEffect, useState } from 'react';
import TodoList from './components/TodoList';

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
   //creo estados locales para los input / todos
  const [input, setInput]= useState("");
  const [todos, setTodos]= useState(initialState); //[]porque puede contener varias tareas
  const [editTodo, setEditTodo]= useState(null);

   useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]);  

  return (
    <div className="container">
      <div className='app-wrapper'>
        <div>
          <Header/>
        </div>
        <div>
            <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
            />
        </div>
        <div>
          <TodoList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
