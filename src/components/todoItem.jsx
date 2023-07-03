import { useDispatch, useSelector } from "react-redux";
import { removeTodo, completeAction, edit } from "../redux/sliceCreate";
import { useState } from "react";


export const TodoItem = ({ name, id, complete }) => {
    const dispatch = useDispatch();
    const [toggle, setToggle] = useState(false);
    const [valueEditedItem, setSvalue] = useState("");
    const dispatchEditedValue = () => {
        valueEditedItem === "" ? dispatch(edit({name:name, id})) : dispatch(edit({name:valueEditedItem, id}));
        setToggle(!toggle);
    }
    return (
        <div className="li__todo__wrapper" >
            <li className="todo_li" style={complete ? { textDecoration: "line-through" } : { textDecoration: "none" }} onClick={() => dispatch(completeAction(id))}>{name}</li>
            <div style={toggle ? { display: "block" } : { display: "none" }}>
                <input type="text" defaultValue={name} onChange={(e) => setSvalue(e.target.value)} />
                <button onClick={dispatchEditedValue}>ok</button>
            </div>
            <button onClick={() => setToggle(!toggle)}>Edit</button>
            <span className="remove__button__todo" onClick={() => dispatch(removeTodo(id))}>&otimes;</span>
        </div>
    )
}