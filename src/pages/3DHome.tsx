import React from 'react';
import { HeadFC } from 'gatsby';
import SceneComponent from '../Components/3D/SceneComponent';
import {
  Scene,
  FreeCamera,
  Vector3,
  HemisphericLight,
  MeshBuilder,
} from 'babylonjs';
import Layout from '../Components/Layout';

// Just a template @TODO: create a 3D version of portfolio website.

let box: any;

const onSceneReady = (scene: Scene) => {
  // This creates and positions a free camera (non-mesh)
  var camera = new FreeCamera('camera1', new Vector3(0, 5, -10), scene);

  // This targets the camera to scene origin
  camera.setTarget(Vector3.Zero());

  const canvas = scene.getEngine().getRenderingCanvas();

  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  var light = new HemisphericLight('light', new Vector3(0, 1, 0), scene);

  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 0.7;

  // Our built-in 'box' shape.
  box = MeshBuilder.CreateBox('box', { size: 2 }, scene);

  // Move the box upward 1/2 its height
  box.position.y = 1;

  // Our built-in 'ground' shape.
  MeshBuilder.CreateGround('ground', { width: 6, height: 6 }, scene);
};

const onRender = (scene: Scene) => {
  if (box !== undefined) {
    var deltaTimeInMillis = scene.getEngine().getDeltaTime();

    const rpm = 10;
    box.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
  }
};

const ThreeDHomePage = () => {
  return (
    <Layout>
      <SceneComponent
        adaptToDeviceRatio={true}
        antialias={true}
        onSceneReady={onSceneReady}
        onRender={onRender}
      ></SceneComponent>
    </Layout>
  );
};

export default ThreeDHomePage;

export const Head: HeadFC = () => <title>Home</title>;
