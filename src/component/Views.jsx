import { addView } from '../modules/view'
import { connect } from 'react-redux'
import React, { useState } from 'react';

const Views = ({ count, addView }) => {
    const [number, setNumber] = useState(1)
    return (
        <div className="items">
            <h2>조회 수: {count}</h2>
            <input value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => addView(number)}>조회하기</button>
        </div>
    );
};
const mapStateToProps = ({ views }) => {
    return {
        count: views.count
    }
}
const mapDispatchToProps = {
    addView
}
export default connect(mapStateToProps, mapDispatchToProps)(Views);