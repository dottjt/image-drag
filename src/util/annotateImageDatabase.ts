import moment from 'moment';
import uuidv4 from 'uuid/v4';

export function getMousePos(canvasDom: any, mouseEvent: MouseEvent) {
  var rect = canvasDom.getBoundingClientRect();
  return {
    x: mouseEvent.clientX - rect.left,
    y: mouseEvent.clientY - rect.top
  };
}
