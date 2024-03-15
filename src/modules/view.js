const ADD_VIEW = 'views/ADD_VIEW' //액션 타입 정의하기

export const addView = (number) => { //액션 생성 함수 만들기
    return {
        type: ADD_VIEW,
        number: parseInt(number) //숫자 타입으로 변환
    }
}
const initialState = { //Reducer 작성하기
    count: 0
}
const views = (state = initialState, action) => {
    switch (action.type) {
        case ADD_VIEW: return {
            ...state, count: state.count + 1,
            count: state.count + action.number
        }
        default: return state;
    }
}
export default views;