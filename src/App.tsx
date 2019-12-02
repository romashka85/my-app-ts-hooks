import React, { Fragment, useState } from 'react';
import './App.css';

type FormElm = React.FormEvent<HTMLFormElement>;

interface ITodo {
  text: string;
  complete: boolean;
}

const App: React.FC = () => {
const [value, setValue] = useState<string>('');
const [todos, setTodos] = useState<ITodo[]>([]);

const handleSubmit = (event: FormElm): void => {
 event.preventDefault();
 addTodo(value);
 setValue('');
}

const addTodo = (text: string):void => {
  const newTodos = [...todos, {text, complete: false}];
  setTodos(newTodos);
  
}

const completeTodo = (index: number):void => {
  const newTodos = [...todos];
  newTodos[index].complete = !newTodos[index].complete;
  setTodos(newTodos)
  
}

const deleteTodo = (index: number):void => {
  const newTodos = [...todos];
  newTodos.splice(index, 1);
  setTodos(newTodos)
 }
  
  return (
    <Fragment>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={event => setValue(event.target.value)} required/>
        <button type='submit'>Add Todo</button>
      </form>
      <section>
        {todos.map((todo: ITodo, index: number) =>  
        (<Fragment  key={index}>
          <div style={{ textDecoration: todo.complete ? 'line-through' : ''}}>{todo.text}</div>
          <button onClick={() => completeTodo(index)}>{todo.complete ? 'Incomplete' : 'Complete'}</button>
          <button onClick={() => deleteTodo(index)}>&times;</button>
        </Fragment>
        
        ))}
      </section>
    </Fragment>
  );
}

export default App;
