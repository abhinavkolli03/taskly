import { ListsAction, ListState } from "../types";

const initialState: ListState = {
    lists: {},
    listIdToDelete: '',
    listToEdit: null,
    listById: null,
    selectedList: null,
    taskToDelete: null,
    taskToEdit: null
}

export default (state, action: ListsAction): ListState => {
    switch(action.type) {
        default: return state;
    }
}