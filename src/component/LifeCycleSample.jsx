import React, { Component } from 'react'

class LifeCycleSample extends Component {
    state = { number: 0 };

    constructor(props) {
        super(props);
        console.log('1.constructor...');
    }

    //다른 자바스크립트 라이브러리 또는 프레임워크의 함수를 호출하거나 이벤트등록, 네트워크 요청은 비동기처리
    componentDidMount(){
        console.log('3.componentDidMount...');
    }

    //새로 설정될 props 또는 state를 nextprops와 nextState로 접근
    shouldComponentUpdate(nextProps, nextState){
        console.log('2-0,shouldComponentUpdate...', nextProps, nextState);
        return nextState.number % 3 !== 0; //숫자의 마지막 자리가 3이면 렌더링X
    }

    //이전 props 또 state를 prevProps 또는 prevState로 접근
    componentDidUpdate(preProps, prevState){
        console.log('2-2,componentDidUpdate...', preProps, prevState);
    }

    //componentDidMount에 등록한 이벤트.타이머 제거
    componentWillUnmount(){
        console.log('4.componentWillUnmount...');
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

  render() {
    console.log('2-1.render...');
    return (
      <div>
            <h1 style={{ color:this.props.color }}>{ this.state.number }</h1>
            <button onClick={ this.handleClick }>더하기</button>
      </div>
    )
  }
}

export default LifeCycleSample;
