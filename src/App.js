import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import LifeCycleSample from './component/LifeCycleSample';

import UseMemoExample from './component/UseMemoExample';

class App extends Component {
  render() {
    return <UseMemoExample/>
  }
}

export default App;
