import { STORE_TO_DO_LIST_DATA } from "../action_types/todolist.actiontypes";


let initialState = {
    toDoList: [],
};


const toDoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_TO_DO_LIST_DATA:
            return {
                toDoList: action.data,
            }
        default:
            return { ...state };
    }
};

export default toDoListReducer;