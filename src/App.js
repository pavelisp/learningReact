import React, { Component } from 'react';
import Block from './components/block/block'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frosty: "Learning passing state with props",
      mosty: "Giants"
    }
  }
  render() {
    const {frosty, mosty} = this.state;
    return (
      <Block frosty={frosty} mosty={mosty}></Block>
    );
  }
}

export default App;
