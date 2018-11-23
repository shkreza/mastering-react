import mockData from '../mockData.json';
import { LOAD_NEWS, SEARCH_NEWS } from './actionTypes';
import { NetInfo } from 'react-native';

const NYT_URL = 'http://localhost:8000/mockData.json';

export const loadNews = () => {
    NetInfo.isConnected
    const req = fetch(NYT_URL);
    return {
        type: LOAD_NEWS,
        payload: req.then(async response => {
            const json = response.json();
            return json.then(result => result.news);
        }).catch(
            (err) => {
                return mockData.news
            })
    }
}

export const searchNews = (searchTerm) => {
    return {
        type: SEARCH_NEWS,
        payload: searchTerm
    }
}