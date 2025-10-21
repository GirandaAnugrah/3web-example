import type { GLTF } from "three-stdlib";
import { Group } from "three";
export interface GLTFResult extends GLTF {
  scene: Group;
}
