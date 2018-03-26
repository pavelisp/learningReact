import React, { Component } from 'react';
import Block from './components/block/block'
import './App.css';
import userdata from './content.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true
    }
  }

  componentDidMount(){
    this.setState({users: userdata, isLoading: false}); 
    console.log(this.state.isLoading);  
  }

  render() {
    console.log(this.state.isLoading);  
    const {users, isLoading} = this.state;
    return (
      <Block users={users} loading={isLoading}></Block>
    );
  }
}

export default App;
