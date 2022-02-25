import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../state/action-creator/todoAction";






export const TodoList = () => {

    const dispatch = useDispatch();
    const shows = useSelector(state => state.data)
    console.log(shows);

    const [text, setText] = useState('');

    const onChangeHandler = (event) => {       
        setText(event.target.value);
    }

    console.log(text);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        dispatch(addTodo(text));
    }




    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <input  type="text" value={text} onChange={onChangeHandler} />
                <button>Click Me</button>
                <br />
                <br />
                <div>
                    {shows.data}
                </div>
            </form>
            
        </div>
    );
}


