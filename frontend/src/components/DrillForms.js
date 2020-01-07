import React from 'react';


export default class DrillForms extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

      };
    }
    saveStage = (event) => {
      this.setState({data: document.getElementsByClassName("konvajs-content")})
      console.log(this.state)
    }

    myTitleHandler = (event) => {
        this.setState({title: event.target.value})
        console.log(this.state)
    }

    myDescriptionHandler = (event) => {
      this.setState({description: event.target.value})
      console.log(this.state)
    }

    myTagHandler = (event) => {
      this.setState({tags: event.target.value})
      console.log(this.state)
    }

    render() {
      return (
        <form>
      
      
      Title
      <input
        type='text'
        onChange={this.myTitleHandler}
      />

      Description
      <input
        
        type='text'
        onChange={this.myDescriptionHandler}
      />

      Tags
      <input
        
        type='text'
        onChange={this.myTagHandler}
      />
      <button type="submit" onSubmit={this.saveStage} >Submit Drill</button>
      

      </form>
      );
    }
  }