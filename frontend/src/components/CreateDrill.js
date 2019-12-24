import React, { Component } from 'react';
import { Stage, Layer, Circle, Rect, RegularPolygon, Arrow } from 'react-konva';
import DrillForms from './DrillForms';
import Konva from 'konva';




export default class CreateDrill extends Component {
  state = {
    x: 0,
    y: 0,
  };

  
  

  
  

  render() {
    return (
        <div>
      <Stage ref="bigStage" width={window.innerWidth} height={window.innerHeight}>
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
            {/* <Arrow 
                         x={100} 
                         y={350} 
                         points={[]}
                         pointerLength={10}
                         pointerWidth={10}
                         fill="black" 
                
            /> */}
            

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
                    
                    this.setState({
                        x: lastPosition.x,
                        y: lastPosition.y
                    })
                    console.log(this.state);
                    
                    var newCircle = new Konva.Circle({
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
                    
                    this.setState({
                        x: lastPosition.x,
                        y: lastPosition.y
                    })
                    console.log(this.state);
                    
                    var newCircle = new Konva.Circle({
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
                    
                    this.setState({
                        x: lastPosition.x,
                        y: lastPosition.y
                    })
                    console.log(this.state);
                    
                    var newCircle = new Konva.Circle({
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
                    
                    this.setState({
                        x: lastPosition.x,
                        y: lastPosition.y
                    })
                    console.log(this.state);
                    
                    var newCircle = new Konva.Rect({
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
                    
                    this.setState({
                        x: lastPosition.x,
                        y: lastPosition.y
                    })
                    console.log(this.state);
                    
                    var newCircle = new Konva.RegularPolygon({
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
                    
                    this.setState({
                        x: lastPosition.x,
                        y: lastPosition.y
                    })
                    console.log(this.state);
                    
                    var newCircle = new Konva.Circle({
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
    <DrillForms></DrillForms>
    </div>
    );
  }
}

