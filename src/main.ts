import Konva from 'konva';

// first we need to create a stage
const stage = new Konva.Stage({
  container: 'container',
  width: window.innerWidth,
  height: window.innerHeight
});

// then create layer
const layer = new Konva.Layer();

// create our shape
const circle = new Konva.Line({
  x: stage.width() / 2,
  y: stage.height() / 2,
  points: [-95, 0, -70, -20, 0, -55, 70, -20, 95, 0, 70, 20, 0, 55, -70, 20],
  closed: true,
  tension: 0.4,
  rotation: -30,
  fill: 'yellow',
  stroke: 'black',
  strokeWidth: 4,
  draggable: true // click and hold to move it around
});

// pointer cursor on hover
circle.on('mouseover', () => {
  stage.container().style.cursor = 'pointer';
});

// back to default when the mouse leaves
circle.on('mouseout', () => {
  stage.container().style.cursor = 'default';
});

// grow slightly while the mouse is held down
circle.on('mousedown', () => {
  circle.to({ scaleX: 1.1, scaleY: 1.1, duration: 0.1 });
});

// shrink back when released
circle.on('mouseup', () => {
  circle.to({ scaleX: 1, scaleY: 1, duration: 0.1 });
});

// add the shape to the layer
layer.add(circle);

// add the layer to the stage
stage.add(layer);