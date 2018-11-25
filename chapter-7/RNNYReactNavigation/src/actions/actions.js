import { LOAD_NEWS } from './actionTypes';
import mockData from '../mockData.json'

export const loadNews = () => {
    return {
        type: LOAD_NEWS,
        payload: mockData.news
    }
}