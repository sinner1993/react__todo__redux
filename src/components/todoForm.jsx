 import { useState } from "react"
 import { useDispatch } from "react-redux";
 import { addTodo } from "../redux/sliceCreate";
 export const TodoForm = ()=>{
 const [value , setValue] = useState("");
 const dispatch = useDispatch();

 const setItem = (e)=>{
  setValue(e.target.value);
 }
 const addItem = ()=>{
    dispatch(addTodo(value));
    setValue("");
 }
    return (
        <div className="todo__wrapper">
            <input type="text" className="todo__input"  value ={value} onChange={(e)=>setItem(e)}/>
            <button className="todo__button" onClick={addItem}>AddTodo</button>
        </div>
    )
 }