import React, {useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber';
import styles from './main-scene.module.scss';
import {Leva, useControls} from 'leva'
import { ParticlesBG } from './ParticlesBG';
import { MainGroup } from './MainGroup';



export const MainScene = () => {
  const [isAuth, setIsAuth] = useState(false);
  const pointRef = useRef();

  const {position, color} = useControls({
    position: {
      value: {x: 0, y: 20, z: 0},
      min: -100, max: 100,
      step: .5
    },
    color: {
      value: '#1f1f1f'
    }
  })


  return (
    <>
      <Leva collapsed />
      <div className={styles.canvasHolder}>
        <div className={styles.btn} onClick={() => setIsAuth(!isAuth)}>LOG IN {isAuth ? '1' : '0'}</div>
        
        <Canvas
          dpr={window.devicePixelRatio}
          // camera={{ position: [-12, 28, 62], fov: 45}}
          camera={{ position: [8, 52, 70], fov: 65}}
          shadows={{
            enabled: true,
            needsUpdate: true,
          }}
        >
          <axesHelper scale={12} />
          <color attach="background" args={['#1e1e1e']} />
          {/* <ambientLight intensity={.2}/> */}
          {/* <spotLight position={[10, 20, 10]} angle={0.25} penumbra={1.2} /> */}
          
          <MainGroup />
          
          <ParticlesBG/>
          
        </Canvas>
      </div>
    </>
  )
}
