import React, { useRef } from "react";
import {
  BoxHelper,
  CylinderGeometry,
  HemisphereLightHelper,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PointLightHelper,
  RectAreaLight,
} from "three";
import { MeshProps, useFrame } from "@react-three/fiber";
import { useHelper } from "@react-three/drei";
import { Leva, useControls } from "leva";

export function Coin() {
  const coinRef = useRef<any>();
  const pointRef = useRef<any>();
  const recLightRef = useRef<any>();
  const recLightRef2 = useRef<any>();
  const coinGeometry = new CylinderGeometry(5, 5, 2, 10);
  const coinMaterial = new MeshStandardMaterial({
    // color: '#ffffff',
    roughness: 0.5,
    metalness: 0.8,
  });

  useFrame((state, delta) => {
    // coinRef.current.rotation.z += delta * 2
    // coinRef.current.rotation.y += delta * 2
    const elTime = state.clock.getElapsedTime();
    // coinRef.current.position.x =
    recLightRef2.current.position.x = Math.sin(elTime * 2) * 10;
    recLightRef.current.position.x = -Math.sin(elTime * 2) * 10;
  });

  const {
    recPos,
    recRot,
    recColor,
    recIntensity,
    recColor2,
    recIntensity2,
    recPos2,
    recRot2,
  } = useControls({
    recIntensity: {
      value: 2,
      step: 0.4,
      min: 0,
    },
    recPos: {
      value: { x: 0, y: 4.5, z: 14 },
      min: -100,
      max: 100,
      step: 0.5,
    },
    recRot: {
      value: { x: 0, y: 0, z: 0 },
      min: -Math.PI,
      max: Math.PI,
      step: 0.01,
    },
    recColor: {
      value: "#14f195",
    },
    recIntensity2: {
      value: 10.4,
      step: 0.4,
      min: 0,
    },
    recPos2: {
      value: { x: -12, y: 11, z: -14 },
      min: -100,
      max: 100,
      step: 0.5,
    },
    recRot2: {
      value: { x: 0, y: Math.PI, z: 0 },
      min: -Math.PI,
      max: Math.PI,
      step: 0.01,
    },
    recColor2: {
      value: "#ab66ff",
    },
  });

  useHelper(pointRef, PointLightHelper);

  return (
    <>
      {/* <pointLight ref={pointRef} position={[-6,12,-12]}/> */}
      {/* <mesh ref={coinRef}>
        <meshBasicMaterial />
        <boxGeometry />
      </mesh> */}
      <rectAreaLight
        visible
        ref={recLightRef2}
        color={recColor2}
        width={20}
        height={14}
        intensity={recIntensity2}
        position={[recPos2.x, recPos2.y, recPos2.z]}
        rotation={[recRot2.x, recRot2.y, recRot2.z]}
      />
      <rectAreaLight
        visible
        ref={recLightRef}
        color={recColor}
        width={20}
        height={14}
        intensity={recIntensity}
        position={[recPos.x, recPos.y, recPos.z]}
        rotation={[recRot.x, recRot.y, recRot.z]}
      />
      {/* <mesh geometry={coinGeometry}
        castShadow
        ref={coinRef}
        receiveShadow
        position={[0,3.6,0]}
        material={coinMaterial}/> */}
    </>
  );
}
