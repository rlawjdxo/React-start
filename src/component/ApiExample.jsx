import React, { Component } from 'react'

class ApiExample extends Component {
    constructor(props){
        super(props);
            this.state = {
                data:''
            };
    }

    callAPI = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/2')
        .then(res => res.json())
        .then(json => {
            this.setState({
                data: json.title
            }); 
        });
    }

    componentDidMount() {
        this.callAPI(); 
    }

  render() {
    return (
      <div>
        <h3>Title:{ this.state.data ? this.state.data : '데이터를 불러오는 중입니다.' }</h3>
      </div>
    )
  }
}

export default ApiExample;