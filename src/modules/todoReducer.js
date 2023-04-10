//1 초기상태 정의 
const initialState = [
    {
        id:0,
        text: "늘어지게 잠자기"
    },
    {
        id:1,
        text: "끝내주게 숨쉬기"
    }
]

//2. 액션 타입, 액션 생성함수  정의하기 
const TODO_ADD = 'TODO_ADD';
const TODO_UPDATE = 'TODO_UPDATE';
const TODO_DELETE  = 'TODO_DELETE';

let currId = 2;
export const createItem = text =>({   
            type: TODO_ADD, 
                todoItem:{
                    id: currId++,
                    text
                }
            });

export const updateItem = (text, id) => ({
        type: TODO_UPDATE,
        text: text,
        id: id
    });
export const deleteItem = id => ({type: TODO_DELETE, id});


//3. 리듀서 정의  
const todoReducer =  (state = initialState, action) => {
    switch(action.type){
        case TODO_ADD:
            return state.concat(action.todoItem);
        case TODO_DELETE:
            return state.filter(item => item.id != action.id);
        case TODO_UPDATE:
            const matched_item = state.find(item => (item.id === action.id))         
            matched_item.text = action.text;
            return state;
        default:
            return state;           
    }
};


export default todoReducer;
