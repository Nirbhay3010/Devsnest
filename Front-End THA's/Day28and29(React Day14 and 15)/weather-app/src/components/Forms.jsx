import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import {updateLocation,updateLocationData} from "../actions"
function Forms() {
    const location=useSelector((state)=>state.place);
    const dispatch = useDispatch();
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 form">
                <input type="text"
                value={location}
                onChange={(e)=>{
                
                dispatch(updateLocation(e.target.value))
                }}   
                />
                <button className="btn btn-primary"
                onClick={
                    dispatch(updateLocationData(location))
                }
                >
                    Submit</button>
                </div>
          </div>
        </div>
    )
}

export default Forms


