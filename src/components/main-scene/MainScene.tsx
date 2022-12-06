import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import styles from "./main-scene.module.scss";
import { Leva, useControls } from "leva";
import { ParticlesBG } from "./ParticlesBG";
import { MainGroup } from "./MainGroup";
import { MainButton } from "../MainButton/MainButton";
import { EmailFormHome } from "../EmaiFormHome/EmailFormHome";
import { Navigate, useNavigate } from "react-router-dom";


type MainSceneProps = {};

export const MainScene = ({ }: MainSceneProps) => {
  const [isAuth, setIsAuth] = useState(false);
  const pointRef = useRef();
  let navigate = useNavigate();

  const { position, color } = useControls({
    position: {
      value: { x: 0, y: 20, z: 0 },
      min: -100,
      max: 100,
      step: 0.5,
    },
    color: {
      value: "#1f1f1f",
    },
  });

  return (
    <>
      <Leva collapsed hidden />
      <div className={styles.canvasHolder}>
        <div className={styles.uiHolder}>
          <div className={styles.textSection}>
            <h1 className={"animate__animated animate__fadeInDown"}>
              Fast, safe, social payments between the US and LatAm
            </h1>
            <p className={"animate__animated animate__fadeInUp"}>
              {/* We help international students in New York send and receive money between their 
              family and friends back home */}
              The friends and family borderless payment system that 
              works with you, not against you.
            </p>
            <EmailFormHome />
          </div>
        </div>

        <Canvas
          dpr={window.devicePixelRatio}
          // camera={{ position: [-12, 28, 62], fov: 45}}
          camera={{ position: [8, 52, 70], fov: 65 }}
          shadows={{
            enabled: true,
            needsUpdate: true,
          }}
        >
          {/* <axesHelper scale={12} /> */}
          <color attach="background" args={["#1e1e1e"]} />
          {/* <ambientLight intensity={.2}/> */}
          {/* <spotLight position={[10, 20, 10]} angle={0.25} penumbra={1.2} /> */}

          <MainGroup />

          <ParticlesBG />
        </Canvas>
      </div>
    </>
  );
};
