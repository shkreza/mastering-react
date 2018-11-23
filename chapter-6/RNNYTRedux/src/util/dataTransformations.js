export const reshapeNewsData = (news) => (
    news.map(({title, imageUrl, description, author, }) => ({title, imageUrl, description, author, date: new Date().toDateString(), location: 'here'}))
)