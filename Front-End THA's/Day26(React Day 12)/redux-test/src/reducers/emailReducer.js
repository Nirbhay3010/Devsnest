const emailReducer = (state="" , action) => {
        if(action.type==="EMAIL_UPDATED"){
            return action.text;
        }
        return state;
};

export default emailReducer;
