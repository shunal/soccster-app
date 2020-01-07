import React, { Component } from 'react';
import { Stage, Layer, Circle, Rect, RegularPolygon, } from 'react-konva';
import Konva from 'konva';



export default class CreateDrill extends Component {
  state = {
    x: 0,
    y: 0,
    
  };

  handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3001/drills', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        title: this.state.title,
        description: this.state.description,
        tags: this.state.tags,
        drawing: this.state.drawing
        })
      }
     );
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

        <div>
      <Stage ref="bigStage" id="bigStage" width={1000} height={500}>
        <Layer ref="bigLayer">
        
            <Circle 
                x={100} 
                y={100} 
                radius={15} 
                fill="blue" 
                
            />

            <Circle 
                x={100} 
                y={150} 
                radius={15} 
                fill="green"    
            />


            <Rect
                x={90}
                y={200}
                width={50}
                height={20}
                fill="white"
                stroke="green"
            />

            <RegularPolygon 
                x={95}
                y={250}
                sides={3}
                radius={8}
                fill="orange" 
            />

            <Circle 
                x={95} 
                y={300} 
                radius={6} 
                fill="white" 
                stroke="black"     
            />

            <Circle 
                x={100} 
                y={50} 
                radius={15} 
                fill="red" 
                
            />
            

            <Circle 
                name= "draggableRedCircle"
                x={100} 
                y={50} 
                radius={15} 
                fill="red" 
                draggable
                onDragEnd = {() =>{
                    let layer = this.refs.bigLayer;
                    let stage = this.refs.bigStage;
                     
                    let circle = stage.findOne("." + "draggableRedCircle");
                    circle.position({x: 100, y: 50});
                    this.refs.bigStage.draw();
                    let lastPosition = circle._lastPos
                    let json = stage.toJSON();
                    this.setState({
                        drawing: json,
                        x: lastPosition.x,
                        y: lastPosition.y

                    })
                    
                    
                    console.log(this.state);
                    
                    let newCircle = new Konva.Circle({
                        x: this.state.x,
                        y: this.state.y,
                        radius: 15,
                        fill: 'red',
                        draggable: true

                        
                      });
                
                      // add the shape to the layer
                      this.refs.bigLayer.add(newCircle);
                      
                      // add the layer to the stage
                      this.refs.bigStage.add(layer);
                    }
                
                }
            />

            <Circle 
               name= "draggableBlueCircle"
                x={100} 
                y={100} 
                radius={15} 
                fill="blue" 
                draggable
                onDragEnd = {() =>{
                    let layer = this.refs.bigLayer;
                    let stage = this.refs.bigStage;
                     
                    let circle = stage.findOne("." + "draggableBlueCircle");
                    circle.position({x: 100, y: 100});
                    this.refs.bigStage.draw();
                    let lastPosition = circle._lastPos
                    let json = stage.toJSON();
                    this.setState({
                        drawing: json,
                        x: lastPosition.x,
                        y: lastPosition.y

                    })
                    console.log(this.state);
                    
                    let newCircle = new Konva.Circle({
                        x: this.state.x,
                        y: this.state.y,
                        radius: 15,
                        fill: 'blue',
                        draggable: true
                        
                      });
                
                      // add the shape to the layer
                      this.refs.bigLayer.add(newCircle);
                
                      // add the layer to the stage
                      this.refs.bigStage.add(layer);
                    }
                
                }
            />
            <Circle 
                
                x={100} 
                y={150} 
                radius={15} 
                fill="green" 
                draggable

                name= "draggableGreenCircle"
                onDragEnd = {() =>{
                    let layer = this.refs.bigLayer;
                    let stage = this.refs.bigStage;
                     
                    let circle = stage.findOne("." + "draggableGreenCircle");
                    circle.position({x: 100, y: 150});
                    this.refs.bigStage.draw();
                    let lastPosition = circle._lastPos
                    let json = stage.toJSON();
                    this.setState({
                        drawing: json,
                        x: lastPosition.x,
                        y: lastPosition.y

                    })
                    console.log(this.state);
                    
                    let newCircle = new Konva.Circle({
                        x: this.state.x,
                        y: this.state.y,
                        radius: 15,
                        fill: 'green',
                        draggable: true
                        
                      });
                
                      // add the shape to the layer
                      this.refs.bigLayer.add(newCircle);
                
                      // add the layer to the stage
                      this.refs.bigStage.add(layer);
                    }
                
                }
                
            />

            <Rect
                x={90}
                y={200}
                width={50}
                height={20}
                fill="white"
                stroke="green"
                draggable
                name= "draggableRect"
                
                onDragEnd = {() =>{
                    let layer = this.refs.bigLayer;
                    let stage = this.refs.bigStage;
                     
                    let circle = stage.findOne("." + "draggableRect");
                    circle.position({x: 90, y: 200});
                    this.refs.bigStage.draw();
                    let lastPosition = circle._lastPos
                    let json = stage.toJSON();
                    this.setState({
                        drawing: json,
                        x: lastPosition.x,
                        y: lastPosition.y

                    })
                    console.log(this.state);
                    
                    let newCircle = new Konva.Rect({
                        x: this.state.x,
                        y: this.state.y,
                        width: 50,
                        height: 20,
                        stroke: "green",
                        fill: 'white',
                        draggable: true
                        
                      });
                
                      // add the shape to the layer
                      this.refs.bigLayer.add(newCircle);
                
                      // add the layer to the stage
                      this.refs.bigStage.add(layer);
                    }
                
                }
            />

            <RegularPolygon 
                x={95}
                y={250}
                sides={3}
                radius={8}
                fill="orange"
                draggable
                name= "draggableTriangle"
                
                onDragEnd = {() =>{
                    let layer = this.refs.bigLayer;
                    let stage = this.refs.bigStage;
                     
                    let circle = stage.findOne("." + "draggableTriangle");
                    circle.position({x: 95, y: 250});
                    this.refs.bigStage.draw();
                    let lastPosition = circle._lastPos
                    let json = stage.toJSON();
                    this.setState({
                        drawing: json,
                        x: lastPosition.x,
                        y: lastPosition.y

                    })
                    console.log(this.state);
                    
                    let newCircle = new Konva.RegularPolygon({
                        x: this.state.x,
                        y: this.state.y,
                        sides: 3,
                        radius: 8,
                        fill: 'orange',
                        draggable: true
                        
                      });
                
                      // add the shape to the layer
                      this.refs.bigLayer.add(newCircle);
                
                      // add the layer to the stage
                      this.refs.bigStage.add(layer);
                    }
                
                }
                
            />

            <Circle 
                x={95} 
                y={300} 
                radius={6} 
                fill="white" 
                stroke="black"
                draggable 
                name= "draggableBall"
                onDragEnd = {() =>{
                    let layer = this.refs.bigLayer;
                    let stage = this.refs.bigStage;
                     
                    let circle = stage.findOne("." + "draggableBall");
                    circle.position({x: 95, y: 300});
                    this.refs.bigStage.draw();
                    let lastPosition = circle._lastPos
                    let json = stage.toJSON();
                    this.setState({
                        drawing: json,
                        x: lastPosition.x,
                        y: lastPosition.y

                    })
                    console.log(this.state);
                    
                    let newCircle = new Konva.Circle({
                        x: this.state.x,
                        y: this.state.y,
                        radius: 6,
                        fill: 'white',
                        stroke: "black",
                        draggable: true

                        
                      });
                
                      // add the shape to the layer
                      this.refs.bigLayer.add(newCircle);
                
                      // add the layer to the stage
                      this.refs.bigStage.add(layer);

                    }
                
                }
            />      
        </Layer>
      </Stage>
     

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
      <button onClick={this.handleSubmit} >Submit Drill</button>
      

      </form>
    </div>

    );
  }
}

