import React, { Component } from "react";
import { Stage, Layer, Arrow } from "react-konva";

function CustomArrow(props) {
  const { startPos, endPos } = props;
  return (
    <Arrow
      points={[startPos.x, startPos.y, endPos.x, endPos.y]}
      pointerLength={20}
      pointerWidth={20}
      fill="black"
      stroke="black"
      strokeWidth={4}
    />
  );
}

export default class CreateArrow extends Component {
  constructor(props) {
    super(props);

    // To draw multiple shapes, store their positions in an array in state
    // then in render, map over the array and render the <CustomArrow />
    // component for each pair of coordinates
    this.state = {
      isDrawing: false,
      arrowStartPos: { x: 0, y: 0 },
      arrowEndPos: { x: 0, y: 0 }
    };
  }

  handleMouseDown = ({ evt }) => {
    // evt is the React Konva envent
    console.log("MOUSE DOWN", evt);
    const { offsetX, offsetY } = evt;

    this.setState({
      isDrawing: true,
      arrowStartPos: { x: offsetX, y: offsetY },
      arrowEndPos: { x: offsetX, y: offsetY }
    });
  };

  handleMouseUp = () => {
    const { isDrawing } = this.state;
    if (isDrawing) {
      this.setState({ isDrawing: false });
    }
  };

  handleMouseMove = ({ evt }) => {
    const { isDrawing } = this.state;
    const { offsetX, offsetY } = evt;

    if (isDrawing) {
      this.setState({
        arrowEndPos: { x: offsetX, y: offsetY }
      });
    }
  };

  render() {
    const { arrowEndPos, arrowStartPos } = this.state;
    return (
      <Stage
        width={900}
        height={700}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onMouseMove={this.handleMouseMove}
      >
        <Layer>
          <CustomArrow startPos={arrowStartPos} endPos={arrowEndPos} />
        </Layer>
      </Stage>
    );
  }
}