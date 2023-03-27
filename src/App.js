import './App.css';
import TodoItem from './TodoItem';
import TodoAdd from "./TodoAdd";
import React, {useState} from 'react';
function App() {
  const [todos, setTodos] = useState(["p","start hw"])


  const deleteItem = (t) => {
    const newTodos = todos.filter(item => item !== t);
    setTodos(newTodos);
  }

  const addItem = (t) =>{
    const idx = todos.findIndex( i => i == t)
    if( idx == -1 ){
      const newTodo = t;
      setTodos([...todos, newTodo]);
    }
    else{
      console.log("already exists")
    }
  }



  return (
    <div className="App">
      <header className="App-header">
        <TodoAdd addItem={addItem} />
        {
          todos.map( item => <TodoItem text={item} deleteItem={deleteItem}/>)
        }
      </header>
    </div>
  );
}

export default App;
