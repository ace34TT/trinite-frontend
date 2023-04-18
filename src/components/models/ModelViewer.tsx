import React, { useEffect, useRef } from "react";
import * as BABYLON from "babylonjs";
import { SceneLoader } from "babylonjs";
import "babylonjs-loaders";
import "./style.css";
function ModelViewer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const engine = new BABYLON.Engine(canvas, true);
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.FreeCamera(
      "camera",
      new BABYLON.Vector3(0, 5, -10),
      scene
    );
    camera.setTarget(BABYLON.Vector3.Zero());

    SceneLoader.LoadAssetContainerAsync("/models/", "model.gltf", scene)
      .then((container) => {
        container.addAllToScene();
      })
      .catch((err) => {
        console.error("Error loading model:", err);
      });

    engine.runRenderLoop(() => {
      scene.render();
    });

    return () => {
      engine.dispose();
    };
  }, []);
  return <canvas ref={canvasRef} id="renderCanvas" width={700} height={400} />;
}

export default ModelViewer;
