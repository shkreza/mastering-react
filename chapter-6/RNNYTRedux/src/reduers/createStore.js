import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import { newsFeedReducer } from './newsFeedReducer';
import { searchTermReducer } from './searchTermReducer';

const logger = createLogger();

export default (initState={}) => (
    createStore(combineReducers({
        news: newsFeedReducer,
        searchTerm: searchTermReducer
    }),
    initState,
    applyMiddleware(logger, promiseMiddleware))
)