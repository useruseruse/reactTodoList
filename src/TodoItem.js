import React,{useState} from "react";

const TodoItem = (props) => {
    const [text, setText] = useState(props.text);
    const [editing, setEditing] = useState(false);


    const onClickEditing = () =>{
         setEditing(!editing)
    }

    const onChangeText = (e) => setText(e.target.value);

    const onClickDelete = () => {
        props.deleteItem(text)
    }
    return (
        <div>
            <div>
            { editing? (
            <div>
            <input type="checkbox"></input>
            <input onChange={onChangeText} ></input>
            <button onClick={onClickEditing}>수정 끝내기</button>
            </div>
            )
            :(
            <div>
            <div>{text}</div>
            <button onClick={onClickEditing}>수정하기</button>
            <button onClick={onClickDelete}>삭제하기</button>
            </div>
            )
            }
            </div>
        </div>
    );
}

export default TodoItem;