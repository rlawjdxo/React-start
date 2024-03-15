import { combineReducers } from 'redux'
import subscribers from './subscribers'
import views from './view'
import comments from './comments'
import posts from './posts'

const rootReducer = combineReducers({
    subscribers,
    views,
    comments,
    posts
});
export default rootReducer;