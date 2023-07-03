import { createSlice} from "@reduxjs/toolkit";
const initialState =  {
    todo: []
 };
const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers :{
        addTodo : (state, action)=>{
          state.todo.push({
            item: action.payload,
            complete : false, 
            id: Math.floor(Math.random()*1000)
          })
        },
        removeTodo : (state, action)=>{
         const findindex = state.todo.findIndex( el=>el.id == action.payload );
         state.todo.splice(findindex, 1)
        },
        completeAction : (state, action)=>{
           state.todo.forEach(el=> el.id === action.payload ?   el.complete = !el.complete   :  el.complete )
        },
        edit : (state, action)=>{        
                state.todo.forEach(el=> el.id == action.payload.id ? el.item = action.payload.name : el.item)
        }
    }
})

export const {addTodo, removeTodo, completeAction, edit} = todoSlice.actions;

export default todoSlice.reducer;