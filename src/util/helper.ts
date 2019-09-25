export const generateOptionType = (value: string, label: string) => ({
  value,
  label,
});

export const generateInputAnnotations = (annotations: Util.Annotation[]) => (
  annotations.map((annotation: Util.Annotation) => {
    const pokemon_id = annotation.pokemon && annotation.pokemon.id;
    const human_id = annotation.human && annotation.human.id;

    return {
      pokemon_id: pokemon_id || undefined,
      human_id: human_id || undefined,

      name: annotation.name,
      type: annotation.type,
      stroke: annotation.stroke,
      key: annotation.key,
      coordinates: annotation.coordinates,
    }
  })
);

export const adjustCoordinates = (c: Util.Coordinate[]) => {
  const x0 = c[0].x;
  const x1 = c[1].x;
  const x2 = c[2].x;
  const x3 = c[3].x;

  const y1 = c[1].y;
  const y2 = c[2].y;

  // bottomRightTopLeft
  if (x0 > x1 && x3 > x2 && y1 < y2) {
    return [c[1], c[0], c[3], c[2]] 
  }

  // bottomLeftTopRight
  if (x1 > x0 && x2 > x3 && y1 < y2) {
    return [c[3], c[2], c[1], c[0]];
  }

  // topRightBottomLeft
  if (x0 > x1 && x3 > x2 && y1 > y2) {
    return [c[1], c[0], c[3], c[2]]
  }

  // topLeftBottomRight
  return c;
}

// topRightBottomLeft
// coordinates: [x[1], x[0], x[3], x[2]]
// [
//   {
//     "x": 133.921875,
//     "y": 66
//   },
//   {
//     "x": 30.5,
//     "y": 66
//   },
//   {
//     "x": 30.5,
//     "y": 9
//   },
//   {
//     "x": 133.921875,
//     "y": 9
//   }
// ]


// topLeftBottomRight // NA
// [
//   {
//     "x": 41.921875,
//     "y": 69
//   },
//   {
//     "x": 163.921875,
//     "y": 69
//   },
//   {
//     "x": 163.921875,
//     "y": 10
//   },
//   {
//     "x": 41.921875,
//     "y": 10
//   }
// ]



// bottomRightTopLeft // NA
// coordinates = [x[1], x[0], x[3], x[2]]
// [
//   {
//     "x": 97.921875,
//     "y": 128
//   },
//   {
//     "x": 0.5,
//     "y": 128
//   },
//   {
//     "x": 0.5,
//     "y": 189
//   },
//   {
//     "x": 97.921875,
//     "y": 189
//   }
// ]

// bottomLeftTopRight
// coordinates = [x[1], x[0], x[2], x[3]]
// [
//   {
//     "x": 1.921875,
//     "y": 119
//   },
//   {
//     "x": 108.5,
//     "y": 119
//   },
//   {
//     "x": 108.5,
//     "y": 178
//   },
//   {
//     "x": 1.921875,
//     "y": 178
//   }
// ]
