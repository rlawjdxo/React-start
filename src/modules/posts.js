import axios from "axios";
const GET_POST_REQUEST = 'posts/GET_POST_REQUEST'
const GET_POST_SUCCESS = 'posts/GET_POST_SUCCESS'
const GET_POST_FAILURE = 'posts/GET_POST_FAILURE'

export const getPost = (id) =>  async(dispatch)=>{
    dispatch(GET_POST_REQUEST);
    try{
        const result = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id); 
        dispatch(getPostSuccess(result));
    } catch(error) {
        dispatch(getPostFailure(error));
    }
}

const getPostSuccess = (post) => {
    return {
        type: GET_POST_SUCCESS,
        payload: post.data
    }
}

const getPostFailure = (error) => {
    return {
        type: GET_POST_FAILURE,
        payload: error
    }
}

const initialState = {
    post:'',
    loading: false,
    error: null
}

const posts = (state=initialState, action) => {
    switch(action.type) {
        case GET_POST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_POST_SUCCESS:
            return {
                ...state,
                post: action.payload,
                loading: false
            }
        case GET_POST_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default posts;
