import { LIST_TO_DO_BEGIN, LIST_TO_DO_SUCCESS, LIST_TO_DO_FAIL } from "../action_types/todolist.actiontypes";


let initialState = {
    toDoList: [],
    loading: false
};


const toDoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_TO_DO_BEGIN:
            return { toDoList: initialState.toDoList, loading: true };
        case LIST_TO_DO_SUCCESS:
            return {
                toDoList: action.data,
                loading: false
            }
        case LIST_TO_DO_FAIL:
            return {
                toDoList: initialState.toDoList, 
                loading: false
            }

        default:
            return { ...state };
    }
};

export default toDoListReducer;