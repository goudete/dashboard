

import {RGBELoader} from 'three/examples/jsm/loaders/RGBELoader';
import { EquirectangularReflectionMapping, MeshPhysicalMaterial, RepeatWrapping, TextureLoader, Vector2 } from 'three';

const hdrEquirect = new RGBELoader().load(
  "models/empty_warehouse_01_2k.hdr",
  () => {
    hdrEquirect.mapping = EquirectangularReflectionMapping;
  }
);

const textureLoader = new TextureLoader();

const options = {
  enableSwoopingCamera: false,
  enableRotation: true,
  transmission: .92,
  thickness: 1.2,
  roughness: .8,
  envMapIntensity: .9,
  clearcoat: 1,
  clearcoatRoughness: 0.1,
  normalScale: 1,
  clearcoatNormalScale: 0.3,
  normalRepeat: 1,
  bloomThreshold: 0.85,
  bloomStrength: 0.5,
  bloomRadius: 0.33,
};

const normalMapTexture = textureLoader.load("/models/normal.jpg");
normalMapTexture.wrapS = RepeatWrapping;
normalMapTexture.wrapT = RepeatWrapping;
normalMapTexture.repeat.set(options.normalRepeat, options.normalRepeat);

export const mainMaterial = new MeshPhysicalMaterial({
  color: '#14f195',
  transmission: options.transmission,
  roughness: options.roughness,
  envMap: hdrEquirect,
  envMapIntensity: options.envMapIntensity,
  clearcoat: options.clearcoat,
  clearcoatRoughness: options.clearcoatRoughness,
  normalScale: new Vector2(options.normalScale),
  // normalMap: normalMapTexture,
  // clearcoatNormalMap: normalMapTexture,
  clearcoatNormalScale: new Vector2(options.clearcoatNormalScale),
});