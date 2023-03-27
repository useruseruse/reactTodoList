import React, { useState } from "react";

const TodoAdd = (props) => {
    const [text, setText] = useState("");
    const onClickAdd = () =>{
        props.addItem(text);
    }
    return(
        <div>
        <input value={text} onChange={e => setText(e.target.value)}></input>
        <button onClick={onClickAdd}>추가하기</button>
        </div>
    );

}
export default TodoAdd;