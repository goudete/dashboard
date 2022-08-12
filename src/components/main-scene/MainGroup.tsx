import { AccumulativeShadows, Cylinder, RandomizedLight, softShadows, useHelper } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useControls } from "leva";
import React, { useRef } from "react";
import { BoxGeometry, BoxHelper, Color, CylinderGeometry, DirectionalLightHelper, DoubleSide, Line3, LineDashedMaterial, PerspectiveCamera, PointLightHelper, TextureLoader } from "three";
import { mainMaterial } from "../../materials/main-materials";
import { Coin } from "./Coin";
import { CryptoLogos } from "./CryptoLogos";
import { gsap } from "gsap";

export const Line = () => {
  const line = new Line3();

  // Build the material with good parameters to animate it.
  const material = new LineDashedMaterial({
    transparent: true,
    scale: 1,
    color: new Color('#ff0000'),
  });
  return (
    <></>
  )
}

export const FirstPlateLayer = () => {
  const [map] = useLoader(TextureLoader, ['matcaps/metall.png']);
  const cylRef = useRef<any>();
  const cylRef1 = useRef<any>();
  // const mat = mainMaterial;

  useFrame((state, delta) => {
    const elTime = state.clock.getElapsedTime();
    // cylRef.current.rotation.y = -Math.PI * elTime * .062
    // cylRef.current.position.y = Math.sin(elTime * 1.2) * 2

    cylRef1.current.rotation.y = Math.PI * elTime * .082
  })

  return (
    <>
    <axesHelper scale={10}/>
    {/* <mesh position={[0, 1, 0]} castShadow>
      <meshStandardMaterial/>
      <boxGeometry/>
    </mesh> */}
    <Cylinder 
      args={[12, 12, .3, 4, 4]}
      position={[0,-.7,0]}
      ref={cylRef1}
      rotation={[0,0,0]}
      receiveShadow
    >
      <meshStandardMaterial
        color={'#ffffff'}
        // toneMapped={false}
        // transparent
        metalness={0}
        roughness={0}
        // opacity={.4}
      />
    </Cylinder>

    {/* <Cylinder 
      args={[12, 12, .2, 4, 4]}
      position={[-50, 0, 10]}
      ref={cylRef}
      rotation={[0,0,0]}
      receiveShadow
    >
      <meshStandardMaterial
        color={'#ffffff'}
        metalness={0}
        roughness={0}
        toneMapped={false}
      />
    </Cylinder> */}
    </>

  )
}

export function MainGroup() {
  const mainGroupRef = useRef<any>();
  const pointRef = useRef<any>();
  const {position, plRot, plPos} = useControls({
    position: {
      value: {x: 0, y: 20, z: 10},
      min: -100, max: 100,
      step: .5
    },
    plRot: {
      value: {"x":0.25000000000000006,"y":-0.3,"z":0.12000000000000012},
      
      step: .01
    },
    plPos: {
      value: {"x":31,"y":18,"z":-36},
      // value: {x: 0, y: 0, z: 0},
      
      step: .5
    }
  })
  useHelper(pointRef, PointLightHelper);
  // useHelper(mainGroupRef, BoxHelper);

  useFrame(() => {
    // pointRef.current.shadow.radius = 3;
    // pointRef.current.shadow.mapSize.width = 512;
    // pointRef.current.shadow.mapSize.height = 512;
  })

          
  return(
    <>
      <pointLight ref={pointRef} castShadow
        color={'#fff'}
        intensity={.1}
        position={[plPos.x, plPos.y, plPos.z]}
        rotation={[plRot.x, plRot.y, plRot.z]}
      />
      {/* <pointLight ref={pointRef} castShadow
        color={'#fff'}
        intensity={.1}
        position={[-plPos.x, plPos.y, -plPos.z]}
        rotation={[plRot.x, plRot.y, plRot.z]}
      /> */}
      <group ref={mainGroupRef} scale={1.5} position={[22, 2, -10]} rotation={[0, 0, 0]}>
        <CryptoLogos/>
        <FirstPlateLayer />
        <Coin />
      </group>
    </>
  )
}