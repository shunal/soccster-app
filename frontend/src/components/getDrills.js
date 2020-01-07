import React from 'react'
import Konva from 'konva';


export default class GetDrills extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        drills: []
      };
    }
    
    componentDidMount() {
      fetch("http://localhost:3001/drills")
      .then(res => res.json())
      .then(
        (result) => {
   
          this.setState({
            drills: result
          }) 
        })
          
    }
    
    

    render() {
      return(
        <div>
          {this.state.drills.map(drill => <Drill key={drill.id} {...drill} />)}
        </div>
         
        )
    }
  }


  export class Drill extends React.Component {

    componentDidMount(){
     Konva.Node.create(this.props.drawing,`container${this.props.id}`)

    }

    render(){
      return(
      <div>
        {this.props.title}
        <div id={`container${this.props.id}`}></div>
        
        <div></div>
        {this.props.description}
      </div>
      )
    }
  }