import {useSelector } from "react-redux";
import { TodoItem } from "./todoItem";

export const Todo = ()=>{
    const selector = useSelector(state => state.todos.todo )
    return (
        <ul className="todo__ul">
            {selector.map(el=>{
                return(
                    <TodoItem key={el.id} name={el.item} id={el.id} complete ={el.complete}/>)
            })}
        </ul>
    )
}