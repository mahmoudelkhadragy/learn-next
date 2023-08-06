"use client"

import { useEffect, useState } from "react"

export default function Todo(){
  const [todo, setTodo] = useState({});
  useEffect(()=>{
    async function getTodo(){
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      let result = await response.json();
      setTodo(result);
    }
    getTodo()
  }, []);

  return(
    <div className="page_card">
      <h2><span>Title: </span>{todo.title}</h2>
      <span className="status" style={{backgroundColor: todo.completed? 'green': 'yellow'}}></span>
    </div>
  )
}