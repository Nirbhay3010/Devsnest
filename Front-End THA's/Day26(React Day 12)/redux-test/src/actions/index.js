const emailUpdated = (data)=>{
    return {
        type: "EMAIL_UPDATED",
        text:data,
    };
};

const nameUpdated = (data)=>{
    return {
        type: "NAME_UPDATED",
        text:data,
    };
};

export {emailUpdated,nameUpdated};