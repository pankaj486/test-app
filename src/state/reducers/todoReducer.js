

export const todoReducer = (state=[], action) => {
    switch (action.type) {
        case "ADD_TODO": 
            return {data:action.payload}
            
        default: return state;
    }
}