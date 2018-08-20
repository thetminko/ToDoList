import { LIST_TO_DO_BEGIN, LIST_TO_DO_SUCCESS, LIST_TO_DO_FAIL } from '../action_types/todolist.actiontypes';

export const fetchToDoListBegin = () => ({
   type: LIST_TO_DO_BEGIN
});

export const fetchToDoListSuccess = (data) => ({
    type: LIST_TO_DO_SUCCESS,
    data
});

export const fetchToDoListFail = () => ({
    type: LIST_TO_DO_FAIL
});

