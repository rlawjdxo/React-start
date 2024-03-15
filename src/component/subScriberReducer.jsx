import React from 'react'
import { addSubscriber } from '../modules/subscribers'
import { connect } from 'react-redux'
const Subscribers = ({ count, addSubscriber }) => {
    return (
        <div className="items">
            <h2>구독자 수: {count}</h2>
            <button onClick={addSubScriber}>구독하기</button>
        </div>
    );
};
const mapStateToProps = ({ subscribers }) => { //state를 파라미터로 받아 오며 이 값은 현재 스토어가 지니고 있는 상태를 의미한다. 
    return {
        count: subscribers.count
    }
}
const mapDispatchToProps = { //store의 내장 함수 dispatch를 파라미터로 받아 온다.
    addSubscriber
}
export default connect(mapStateToProps, mapDispatchToProps)(Subscribers);