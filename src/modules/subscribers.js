//액션타입 정의하기
const ADD_SUBSCRIBER = 'subscribers/ADD_SUBSCRIBER' //액션 이름 충돌을 피하기 위해 문자열 안에 모듈 이름을 넣는다. 
const REMOVE_SUBSCRIBER = 'subscribers/REMOVE_SUBSCRIBER'

//액션 생성 함수 만들기
export const addSubscriber = () => { //다른 파일에서 사용하기위해 export 키워드를 넣어준다. 
    return {
        type: ADD_SUBSCRIBER
    }
};
export const removeSubscriber = () => {
    return {
        type: REMOVE_SUBSCRIBER
    }
}

//Reducer 작성하기
const initialState = { //count 초기값을 설정해 준다. 
    count: 370
}

const subscribers = (state = initialState, acition) => {
    switch (acition.type) {
        case ADD_SUBSCRIBER: return {
            ...state, count: state.count + 1
        }
        case REMOVE_SUBSCRIBER: return {
            ...state, count: state.count - 1
        }
        default: return state
    }
}
export default subscribers; //export는 여러 개를 내보낼 수 있지만 export default는 단 한 개만 보낼 수 있다.