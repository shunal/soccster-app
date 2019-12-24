import React from 'react';


export default class CreateUsers extends React.Component {
    constructor(props) {
      super(props);
      this.state = {username: '', password: ''};
    }

    myChangeHandler = (event) => {
        this.setState({username: event.target.value})
    }
    render() {
      return (
        <form>
      <h1>Hello {this.state.username}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />

      </form>
      );
    }
  }