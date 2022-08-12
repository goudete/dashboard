import React, { useRef } from "react";
import { Center, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import {
  BufferGeometry,
  Euler,
  Float32BufferAttribute,
  PointsMaterial,
  Vector3,
} from "three";

const COUNT = 5000,
  SEPARATION = .040,
  AMOUNTX = 180,
  AMOUNTY = 180;

export const angleVector = (angle: number, distance: number) => {
  const angleRadians = (angle * Math.PI) / 180 + (90 * Math.PI) / 180;
  return {
    x: distance * Math.cos(angleRadians),
    y: distance * Math.sin(angleRadians),
  };
};

export const ParticlesBG = () => {
  const light = useRef<any>();

  const particlesGeometry = new BufferGeometry();
  const particlesMaterial = new PointsMaterial({
    // color: "white",
    // colorWrite: true,
    size: 0.09,
    sizeAttenuation: true,
    transparent: true,
  });

  const particlesPositions: any[] = [];
  const particleOptions: any[] = [];
  const particlesScales: any[] = [];

  for (let ix = 0; ix < AMOUNTX; ix++) {
    for (let iy = 0; iy < AMOUNTY; iy++) {
      const x = ix * ix * SEPARATION - (AMOUNTX * SEPARATION) / 6;
      const z = iy * iy * SEPARATION - (AMOUNTY * SEPARATION) / 6;
      particlesPositions.push(z, 0, x);
      particlesScales.push(0);
      particleOptions.push({
        speed: 0.2 + (0.2 - Math.random() * 10) / 10000,
      });
    }
  }

  particlesGeometry.setAttribute(
    "position",
    new Float32BufferAttribute(particlesPositions, 3)
  );
  particlesGeometry.setAttribute(
    "scale",
    new Float32BufferAttribute(particlesScales, 1)
  );

  const { rot } = useControls({
    rot: {
      value: {
        x: -.12,
        y: 2.38,
        z: 0,
      },
      min: -Math.PI,
      max: Math.PI,
      step: 0.01,
    },
    lightPos: {
      value: {
        x: 0,
        y: 1.87,
        z: 0,
      },
      min: -100,
      max: 100,
      step: 0.01,
    },
  });

  useFrame((state, delta) => {
    let i = 0,
      j = 0;
    if (!particlesGeometry) {
      return;
    }
    const particles: any = particlesGeometry.attributes.position.array;
    const scales: any = particlesGeometry.attributes.scale.array;
    const elapsedTime: any = state.clock.getElapsedTime();

    for (var ix = 0; ix < AMOUNTX; ix++) {
      for (var iy = 0; iy < AMOUNTY; iy++) {
        particles[i + 1] =
          (Math.sin((iy + elapsedTime) * 0.3) * 3.2) +
          (Math.sin((ix + elapsedTime) * 0.5) * 3.2);

        // scales[j] =
        //   (Math.sin((ix + elapsedTime) * 0.3) + 5) * 20 +
        //   (Math.sin((ix + elapsedTime) * 0.5) + 5) * 20;
        i += 3;
        j++;
      }
    }

    particlesGeometry.attributes.position.needsUpdate = true;
    particlesGeometry.attributes.scale.needsUpdate = true;
  });

  // useHelper(light, PointLightHelper);

  return (
    <>
      <Center>
        {/* <pointLight ref={light}
          intensity={2}
          position={[0, 10, 20]}
          color={'red'}
        /> */}
        <points
          args={[particlesGeometry, particlesMaterial]}
          rotation={new Euler(rot.x, rot.y, rot.z)}
        />
        <OrbitControls enableZoom={false} enableRotate={false} />
      </Center>
    </>
  );
};
