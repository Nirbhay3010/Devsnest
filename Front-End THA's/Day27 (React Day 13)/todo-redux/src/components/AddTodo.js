import React,{useState} from 'react'
import {useDispatch} from "react-redux";
import {addItem} from "../actions";

function AddTodo() {
    const [item,setItem]=useState("")
    const dispatch=useDispatch();
    return (
        <div>
            <input 
            type="text" 
            placeholder="Add Todo" 
            value={item}
            onChange={(e)=> {
                setItem(e.target.value)}
                }/>
            <button
            onClick={()=>{
                dispatch(addItem({
                    title:item,
                    done:false,
                }));
                setItem("");
            }}
            >Add</button>
        </div>
    )
}

export default AddTodo
