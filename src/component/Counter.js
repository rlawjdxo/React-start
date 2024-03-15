import React from 'react';
import { connect } from 'react-redux';
import { increaseAsync, decreaseAsync } from '../modules/counter';
const Counter = ({ number, increaseAsync, decreaseAsync }) => {
    return (
        <div className="items">
            <h2>{number}</h2>
            <button onClick={decreaseAsync}>-1</button>
            <button onClick={increaseAsync}>+1</button>
        </div>
    );
};
const mapStateToProps = ({ counter }) => {
    return {
        number: counter.number + 1
    }
}
const mapDispatchProps = {
    increaseAsync, decreaseAsync
}
export default connect(mapStateToProps, mapDispatchProps)(Counter);
