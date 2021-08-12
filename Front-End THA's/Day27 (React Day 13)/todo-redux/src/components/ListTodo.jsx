import {useDispatch,useSelector} from "react-redux";
import {deleteItem} from "../actions"

function ListTodo() {
    const dispatch=useDispatch();
    const todos=useSelector((state)=>state.todo);
    return (

        <div>
            {todos.map((todo,index)=>
            (
                <div>
            <h4 style={{display:"inline-block"}}>{todo.title}</h4>
            <button
            onClick={()=>{
                dispatch(deleteItem(index));
            }}
            >Delete</button>
                </div>
            ))}


            
        </div>

    )
}

export default ListTodo;
