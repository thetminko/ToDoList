import { LIST_TO_DO_BEGIN, LIST_TO_DO_SUCCESS } from '../action_types/todolist.actiontypes';

export const fetchToDoListBegin = () => ({
   type: LIST_TO_DO_BEGIN
});

export const fetchToDoListSuccess = (data) => ({
    type: LIST_TO_DO_SUCCESS,
    data
});
