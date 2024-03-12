import React, { Component } from 'react';

class ScrollBox extends Component {
    scrollToBottom = () => {
        const { scrollHeight, clientHeight } = this.box;
        this.box.scrollTop = scrollHeight - clientHeight;
    };
  render() {
    const style = {
        border: '1px solid black', height: '300px', width: '300px', overflow: 'auto', position: 'relative' }

    const innerStyle = {
        width: '100%', height: '650px', background: 'linear-gradient(white, black)' }
    return (
      <div style={ style } ref={ (ref) => { this.box=ref }}> //최상위 DOM에 ref를 달아 준다
        <div style={ innerStyle }></div>
      </div>
    )
  }
}

export default ScrollBox;