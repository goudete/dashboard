import React, { useEffect, useRef, useState } from 'react'
import logoSol from '../../assets/solana.svg';
import logoEth from '../../assets/eth.svg';
import logoBtc from '../../assets/bitcoin.svg';
import {SVGLoader} from 'three/examples/jsm/loaders/SVGLoader'
import { Box3, ExtrudeGeometry, Group, Mesh, MeshNormalMaterial, UniformsGroup, Vector2, Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';
import { Center } from '@react-three/drei';
import { gsap } from "gsap";
import { useControls } from 'leva';

export const CryptoLogos = () => {
  const [init, setInit] = useState(false);
  const ethRef = useRef<any>();
  const solRef = useRef<any>();
  const btcRef = useRef<any>();
  const svgGroupRef = useRef<any & Group>();
  const btcSvgGroup = new Group();
  const solSvgGroup = new Group();
  const ethSvgGroup = new Group();
  
  const {groupPos} = useControls({
    groupPos: {
      value: {x: 0, y: 0, z: 0},
      step: 1
    }
  })

  const loader = new SVGLoader();
  const bitcoinLogo = loader.loadAsync(logoBtc);
  const ethLogo = loader.loadAsync(logoEth);
  const solLogo = loader.loadAsync(logoSol);
  const logoMaterial = new MeshNormalMaterial({
    transparent: true,
    // normalScale: new Vector2(-10, 10)
  });

  useEffect(() => {
    Promise.all([bitcoinLogo, ethLogo, solLogo])
      .then(([btcPaths, ethPaths, solPatghs]) => {
        convertAndAddTogroup(btcPaths, logoMaterial, btcSvgGroup, 'btc');
        convertAndAddTogroup(ethPaths, logoMaterial, ethSvgGroup, 'eth');
        convertAndAddTogroup(solPatghs, logoMaterial, solSvgGroup, 'sol');
      });
      // gsap.to(ethSvgGroup.position, {y: 20, ease: 'easeInOut'})
      // .duration(.8)
      // gsap.to(logoMaterial, {opacity: 0})
      // .duration(4)
      
  }, [])

  useFrame((state, delta) => {
    const elTime = state.clock.getElapsedTime();
    const ethGroup = state.scene.children.filter((g: any) => g.name === 'eth')[0];
    const solGroup = state.scene.children.filter((g: any) => g.name === 'sol')[0];
    const btcGroup = state.scene.children.filter((g: any) => g.name === 'btc')[0];
    if (!solGroup) {
      return state.scene.add(solSvgGroup)
    }
    // ethGroup.rotation.y = Math.PI * elTime * .4;
    const curPosYSol = solGroup.position.y;
    // const curPosYBtc = btcGroup.position.y;
    // const curPosYEth = ethGroup.position.y;
    // logoMaterial.opacity = Math.sin(elTime * .2) * 4
    
    solGroup.rotation.y = -Math.PI * elTime * .4;
    solGroup.position.y = curPosYSol < 12 ? curPosYSol + (elTime * .22) : 12;

    // ethGroup.rotation.y = Math.PI * elTime * .4;
    // ethGroup.position.y = curPosYEth < 12 ? curPosYEth + (elTime * .28) : 12;

    // btcGroup.rotation.y = -Math.PI * elTime * .4;
    // btcGroup.position.y = Math.sin(elTime * .8) * 16 //curPosYBtc < 16 ? curPosYBtc + (elTime * .28) : 16;
  })

  return (
    <>
      <Center>
        {/* <group ref={svgGroupRef}/> */}
      </Center>
    </>
  )
}

const convertAndAddTogroup = (path: any, material: any, group:any, groupName: string) => {

  return path.paths.forEach((p: any, i: number) => {
    const shapes = p.toShapes(true);
  
    // Each path has array of shapes
    shapes.forEach((shape: any, j: number) => {
      // Finally we can take each shape and extrude it
      const geometry = new ExtrudeGeometry(shape, {
        depth: 45,
        bevelEnabled: false,
      });
  
      // Create a mesh and add it to the group
      // const mesh = new Mesh(geometry, logoMaterial);
      const mesh = new Mesh(geometry, material);
      mesh.castShadow = true;
      mesh.rotation.z = Math.PI;
      mesh.scale.set(.032,.032,.032);
      mesh.position.x = groupName === 'btc' ? 2.6 : 6
      // mesh.lookAt(new Vector3(0,1,0))
      group.add(mesh);
    });

    // group.scale.set(1, 1, 1);
    group.position.x = groupName === 'btc' ? -58 : 22
    group.position.y = 0
    group.position.z = groupName === 'btc' ? 2 : -12
    
    group.name = groupName;
  })
}