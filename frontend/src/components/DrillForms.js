import React from 'react';


export default class DrillForms extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

      };
    }

    myChangeHandler = (event) => {
        this.setState({username: event.target.value})
    }
    render() {
      return (
        <form>
      
      
      <input
        
        type='text'
        onChange={this.myChangeHandler}
      />

      </form>
      );
    }
  }