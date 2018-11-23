import { LOAD_NEWS } from '../actions/actionTypes';

export const newsFeedReducer = (state=[], action) => {
    switch(action.type) {
        case LOAD_NEWS:
            return action.payload || [];

        default:
            return state
    }
}