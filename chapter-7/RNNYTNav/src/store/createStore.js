import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import { NewsFeedReducer } from '../reducers/NewsFeedReducer';

const logger = createLogger();

export default (initialState={}) => (
    createStore(
        combineReducers({
            news: NewsFeedReducer
        }),
        initialState,
        applyMiddleware(logger, promiseMiddleware))
)