import React, { Component } from 'react';

class App extends Component {
  constructor(props){
 super(props);
  this.state={
    flag:false
  }
  } 
  change=()=>{
    this.setState({
   flag:true
    })
  }
  render() {
    return (
      <div id="main">
        <button id="click" onClick={this.change}>Click</button> 
       { this.state.flag?<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>:<></>}
      </div>
    )
  } 
}

export default App;
