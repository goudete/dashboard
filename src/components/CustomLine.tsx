import React, { useState } from 'react'
import { Color, LineBasicMaterial, LineDashedMaterial } from 'three';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry';

const w = 12;
const h = 12;

const points = [
  // horizontal
  { start: [-w, 0, -h], end: [w, 0, -h] },
  { start: [-(w - 2), 0, 0], end: [w - 2, 0, 0] },
  { start: [-w, 0, h * 0.66], end: [w, 0, h * 0.66] },
  { start: [-(w - 14), 0, -h * 0.5], end: [w - 2, 0, -h * 0.5] },
  // vertical
  { start: [-(w - 2), 0, -h], end: [-(w - 2), 0, h] },
  { start: [-(w - 4), 0, 0], end: [-(w - 4), 0, h] },
  { start: [-(w - 6), 0, -h], end: [-(w - 6), 0, h] },
  { start: [-(w - 8), 0, -h], end: [-(w - 8), 0, h] },
  { start: [-(w - 10), 0, -h], end: [-(w - 10), 0, 0] },
  { start: [0, 0, -h], end: [0, 0, 0] },
  { start: [-(w - 14), 0, -h], end: [-(w - 14), 0, 0] },
  { start: [-(w - 16), 0, -h * 0.5], end: [-(w - 16), 0, h] },
  { start: [-(w - 18), 0, -h * 0.5], end: [-(w - 18), 0, 0] },
  { start: [-(w - 20), 0, -h * 0.5], end: [-(w - 20), 0, h] },
  { start: [-(w - 22), 0, -h], end: [-(w - 22), 0, h] }
];

const delays = [...Object.keys(points)].sort((a, b) => 0.5 - Math.random());

export const CustomLine = () => {
  const [shouldDraw, setShouldDraw] = useState(false);
  
  const lineGeometery = new LineGeometry();
  const lineMaterial = new LineBasicMaterial();

  // Build the material with good parameters to animate it.
  const material = new LineDashedMaterial({
    transparent: true,
    scale: 1,
    color: new Color('#ff0000'),
  });
  return (
    <group>
      {points.map((point, i) => (null
        // <Gridline
        //   key={i}
        //   points={[point.start, point.end]}
        //   shouldDraw={shouldDraw}
        //   delay={delays[i]}
        // />
      ))}
    </group>
  )
}
