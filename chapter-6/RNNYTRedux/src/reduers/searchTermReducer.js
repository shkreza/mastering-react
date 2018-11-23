import { SEARCH_NEWS } from '../actions/actionTypes';

export const searchTermReducer = (state='', action) => {
    switch(action.type) {
        case SEARCH_NEWS:
            return action.payload;
        default:
            return state;
    }
}