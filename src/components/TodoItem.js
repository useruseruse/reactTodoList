import React,{useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateItem } from "../modules/todoReducer";

const TodoItem = (props) => {
    const [text, setText] = useState(props.text);
    const [editing, setEditing] = useState(false);
    
    const dispatch = useDispatch();

    const onClickEditing = () =>{
        if(editing){
            dispatch(updateItem(text, props.id));
        } setEditing(!editing);
    }
    
    return (
        
        <div>
            <input type="checkbox"></input>
            <div>
            { editing? (
            <div>
            <input onChange={e => setText(e.target.value)} ></input>
            <button onClick={onClickEditing}>수정 끝내기</button>
            </div>
            )
            :(
            <div>
            <div>{text}</div>
            <button onClick={onClickEditing}>수정하기</button>
            <button onClick={props.onClickDelete}>삭제하기</button>
            </div>
            )
            }
            </div>
        </div>)

}

export default TodoItem;