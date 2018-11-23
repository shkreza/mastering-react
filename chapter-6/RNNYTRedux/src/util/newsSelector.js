import { createSelector } from 'reselect';
import { reshapeNewsData } from './dataTransformations';

const newsSelector = state => state.news;

export const reshapeNewsSelector = createSelector(
    [newsSelector],
    reshapeNewsData
)

export const allNewsSelector = createSelector(
    [reshapeNewsSelector],
    newsItem => newsItem
)