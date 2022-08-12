
import { Extrude } from "@react-three/drei";
import React, { ComponentProps } from "react";
import { Shape } from "three";


const extrudeSettings = { steps: 2, depth: 10, bevelEnabled: false };
const SIDE = 10;

export const Block:React.FC<any> = (props) => {
  const shape = React.useMemo(() => {
    const _shape = new Shape();

    _shape.moveTo(0, 0);
    _shape.lineTo(SIDE, 0);
    _shape.lineTo(SIDE, SIDE * 2);
    _shape.lineTo(0, SIDE * 2);
    _shape.lineTo(0, SIDE * 3);
    _shape.lineTo(-SIDE, SIDE * 3);
    _shape.lineTo(-SIDE, SIDE);
    _shape.lineTo(0, SIDE);

    return _shape;
  }, []);

  return (
    <>
      <Extrude args={[shape, extrudeSettings]} {...props}>
        <meshPhysicalMaterial
          flatShading
          color="#3E64FF"
          thickness={SIDE}
          roughness={0.4}
          clearcoat={1}
          clearcoatRoughness={1}
          transmission={0.8}
          ior={1.25}
          attenuationDistance={0}
        />
      </Extrude>
    </>
  );
}