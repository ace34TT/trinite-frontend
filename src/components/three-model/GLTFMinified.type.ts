import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

export type GLTFResultSM1 = GLTF & {
  nodes: {
    Circle001: THREE.Mesh;
    Circle001_1: THREE.Mesh;
    Circle001_2: THREE.Mesh;
  };
  materials: {
    ["Scratched Gold"]: THREE.MeshStandardMaterial;
  };
};
export type GLTFResultSM2 = GLTF & {
  nodes: {
    Circle001: THREE.Mesh;
    Circle001_1: THREE.Mesh;
    Circle001_2: THREE.Mesh;
  };
  materials: {
    ["Scratched Gold"]: THREE.MeshStandardMaterial;
    ["Scratched Gold.001"]: THREE.MeshStandardMaterial;
    ["Scratched Gold.002"]: THREE.MeshStandardMaterial;
  };
};
export type GLTFResultSM3 = GLTF & {
  nodes: {
    Circle001: THREE.Mesh;
    Circle001_1: THREE.Mesh;
    Circle001_2: THREE.Mesh;
    Circle016: THREE.Mesh;
  };
  materials: {
    ["Scratched Gold"]: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
  };
};
