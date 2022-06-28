import React, { useState,useEffect, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ListGroup, ListGroupItem, Badge} from 'reactstrap'
import Form from './components/Form';
import axios from 'axios'
import './App.css';
const initialState = {
  loading: true,
  error: "",
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        loading: false,
        error: "",
        todos: action.payload,
      }

    case 'SET_ERROR':
      return {
        loading: false,
        error: "There are some errors",
        todos: [],
      }


    default:
      return state;

  }
}

function App() {
  const [count, setCount] = useState(0)
const [count2, setCount2] = useState(0)

const increment = () => {
  setCount(count+1)
}
const increment2 = () => {
  setCount2(count2 +1)
}
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(res => {
        console.log(res.data)
        dispatch({ type: 'SET_DATA', payload: res.data })
      })
      .catch(err => {
        dispatch({ type: 'SET_ERROR' })
      })
  }, [])
  const listmarkup = (
    <ListGroup>
      {state.todos.map(todo => <ListGroupItem key={todo.id}>{todo.title} {todo.completed?(<Badge color='success'>completed</Badge>):(<Badge color='danger'>uncompleted</Badge>)}</ListGroupItem>)}
    </ListGroup>
  )
  return (
    <div className="App">
      {state.loading ? 'Loading' : (state.error ? state.error : listmarkup)}
      <h1>{count}</h1>
      <h2>{count2}</h2>
      <button color='warning' onClick={increment}>increment1</button>
      <p></p>
      <button color='success' onClick={increment2}>increment2</button>
      <Form />
    </div>
  );
}

export default App;
