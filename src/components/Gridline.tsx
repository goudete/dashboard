import React, { useRef } from "react";
import { extend, useThree } from "@react-three/fiber";
import { a, useSpring } from "@react-spring/three";
import { Vector3 } from "three";

export const Gridline = ({ points, shouldDraw, delay }: any) => {
  const line = useRef<any>();
  const material = useRef<any>();
  const start = new Vector3(points[0][0], 0, points[0][2]);
  const end = new Vector3(points[1][0], 0, points[1][2]);
  const {
    viewport: { factor }
  } = useThree();

  useSpring({
    dashOffset: shouldDraw ? -0.6 : 0.001,
    delay: delay * 100,
    config: {
      duration: 3000,
    },
    onChange: (spring) => {
      material.current.uniforms.dashOffset.value = spring.value.dashOffset;
    }
  });

  return (
    <mesh ref={line}>

    </mesh>
  );
};
