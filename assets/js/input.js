const input = {
  mouseDown: false,
  lastPoints: {},
  lines: [],

  moveToCoordinates(map) {
    for (var identifier in map) {
      if (map.hasOwnProperty(identifier)) {
        var point = map[identifier];
        input.lastPoints[identifier] = point;
      }
    }
  },

  lineToCoordinates(map, color) {
    let lineColor = color;

    for (var identifier in map) {
      if (!map.hasOwnProperty(identifier)) {
        continue;
      }

      var point = map[identifier];
      if (input.lastPoints[identifier]) {
        input.lines.push({
          from:input.lastPoints[identifier],
          to: point, color: lineColor
        });
      }

      input.lastPoints[identifier] = point;
    }
  },

  haltEventBefore(handler) {
    return function(event) {
      event.stopPropagation();
      event.preventDefault();
      handler(event);
    };
  }

}

export default input;
