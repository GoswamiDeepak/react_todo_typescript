import React from 'react'
import Addtodo from './component/Addtodo'
import Todos from './component/Todos'
import Navbar from './component/Navbar'
import "./app.css";
const App = () => {
  return (
    <main>
    <h1>Todo React + Typescript</h1>
    <Navbar />
    <Addtodo />
    <Todos/>
    </main>
  )
}

export default App