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
  event.preventDefault()
  addTodo(value)
  setValue('')
}

const addTodo = (text: string) => {
  const newTodos: ITodo[] = [...todos, {text, complete: false}]
  setTodos(newTodos)
}

console.log(todos);
console.log(value);
  return (
    <Fragment>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={event => setValue(event.target.value)} required/>
        <button type='submit'>Add Todo</button>
      </form>
    </Fragment>
  );
}

export default App;
