import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import TodoAdd from "./TodoAdd";
import { deleteItem } from "../modules/todoReducer";

const TodoList = () => {
    const todos = useSelector( state => state );
    const dispatch = useDispatch();

    const onClickDelete = (id) => {
        dispatch(deleteItem(id));
    }
    

    return (
        <div>
        <TodoAdd />
        {
          todos.map( (item) => <TodoItem key={item.id} text={item.text}  id={item.id} onClickDelete={() => onClickDelete(item.id)}/> )
        }
        </div>
    )
}

export default TodoList;