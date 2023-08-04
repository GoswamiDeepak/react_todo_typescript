import{ FormEvent, useState } from 'react'
import { useTodos } from '../store/store';

const Addtodo = () => {
    const[todo, setTodo] = useState("");
    const {handleAddToDo} = useTodos();
    
    const handleForm = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        handleAddToDo(todo);
        setTodo("");
    }
     
  return (
    <form onSubmit={handleForm}>
        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} />
        <button type="submit">Add</button>
    </form>
  ) 
}

export default Addtodo