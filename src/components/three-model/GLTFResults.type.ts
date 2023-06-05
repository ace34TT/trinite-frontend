import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

export type GLTFResultStandard = GLTF & {
  nodes: {
    Circle001: THREE.Mesh;
    Circle001_1: THREE.Mesh;
    Circle001_2: THREE.Mesh;
  };
  materials: {
    ["Scratched Gold"]: THREE.MeshStandardMaterial;
  };
};

export type GLTFResultDiamond = GLTF & {
  nodes: {
    Diamond: THREE.Mesh;
    Circle009_1: THREE.Mesh;
    Circle009_2: THREE.Mesh;
    Circle009_3: THREE.Mesh;
    Circle009_4: THREE.Mesh;
  };
  materials: {
    ["Dispersive diamond"]: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
    ["Scratched Gold"]: THREE.MeshStandardMaterial;
  };
};

export type GLTFResultTricolor = GLTF & {
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
