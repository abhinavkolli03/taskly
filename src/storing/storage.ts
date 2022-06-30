import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import listReducer from './react-reducers/listReducer';
import notificationReducer from './react-reducers/notificationReducer';

const rootReducer = combineReducers({
    list: listReducer,
    notification: notificationReducer
});

const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof rootReducer>;

export default store;