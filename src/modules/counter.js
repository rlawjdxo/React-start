const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
export const increase = () => {
    return {
        type: INCREASE
    }
};
export const descrease = () => {
    return {
        type: DECREASE
    }
}
export const increaseAsync = () => (dispatch) => {
    setTimeout(() => {
        dispatch(increase());
    }, 1000);
}
export const descreaseAsync = () => (dispatch) => {
    setTimeout(() => {
        dispatch(descrease());
    }, 1000);
}
const initialState = {
    number: 0
}
export default counter;