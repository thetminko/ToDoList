import { STORE_TO_DO_LIST_DATA } from '../action_types/todolist.actiontypes';

export const storeToDoListData = (data) => ({
    type: STORE_TO_DO_LIST_DATA,
    data
});

