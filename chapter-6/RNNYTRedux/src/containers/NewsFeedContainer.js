import { NewsFeed } from '../component/NewsFeed';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadNews, searchNews } from '../actions/actions'
import { reshapeNewsSelector, allNewsSelector } from '../util/newsSelector';

const mapStateToProps = (state) => (
    { news: reshapeNewsSelector(state) }
)

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({ loadNews, searchNews }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);