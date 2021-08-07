const nameReducer = (state="",action)=>{
        if(action.type==="NAME_UPDATED"){
            return action.text;
        }
        return state;
};

export default nameReducer;