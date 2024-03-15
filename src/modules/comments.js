//액션 타입 정의하기
const FETCH_COMMENTS_REQUEST = 'comments/FETCH_COMMENTS_REQUEST';
const FETCH_COMMENTS_SUCCESS = 'comments/FETCH_COMMENTS_SUCCESS';
const FETCH_COMMENTS_FAILURE = 'comments/FETCH_COMMENTS_FAILURE';

//액션 생성 함수 만들기
export const fetchComments = () => (dispatch) => {
    //return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(comments => dispatch(fetchCommentsSuccess(comments)))
        .catch(error => dispatch(fetchCommentsFailure(error)));

    //}
}

const fetchCommentsRequest = () => {
    return {
        type: FETCH_COMMENTS_REQUEST
    }
}
const fetchCommentsSuccess = (items) => {
    return {
        type: FETCH_COMMENTS_SUCCESS, payload: items
    }
}
const fetchCommentsFailure = (error) => {
    return {
        type: FETCH_COMMENTS_FAILURE, payload: error
    }
}

const initialState = {
    items: [],
    loading: false,
    error: null

}
//Reducer 작성하기
const comments = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMMENTS_REQUEST: return {
            ...state, loading: true
        }
        case FETCH_COMMENTS_SUCCESS: return {
            ...state, items: action.payload, loading: false
        }
        case FETCH_COMMENTS_FAILURE: return {
            ...state, 
            error: action.payload,
            loading: false
        }
        default: 
            return state;
    }
}
export default comments;