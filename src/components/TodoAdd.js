import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createItem } from "../modules/todoReducer";

const TodoAdd = (props) => {
    const [text, setText] = useState("");
    const todos = useSelector(state => state);
    const dispatch = useDispatch();
    

    const onClickAdd = () =>{
        dispatch(createItem(text));
        setText("");
    }

    return(
        <div>
            <input  value={text} onChange={e =>setText(e.target.value)}></input>
            <button onClick={onClickAdd}>추가하기</button>
        </div>
    );
};

export default TodoAdd;