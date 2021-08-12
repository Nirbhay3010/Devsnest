const updateLocation = (place) =>{
    return{
        type:"UPDATE_LOCATION",
        payload:place,
    };
};

const updateLocationData = (place)=>{
    return (dispatch) =>{
        fetch(`https://api.weatherapi.com/v1/current.json?key=f60918e3372a41658ee132151211208&q=${place}`)
        .then(res=>res.json())
        .then((data)=>{
        dispatch({
            type:"UPDATE_LOCATION_DATA",
            payload:data,
        })
        });
    }
    
};

export {updateLocation,updateLocationData};
