import * as THREE from 'three';
import { MeshBVH, acceleratedRaycast } from 'three-mesh-bvh';

/** What we keep on a tree: the geometry as it was when the tree was built or last refitted. */
interface Eigen { version: number; index: THREE.BufferAttribute | null; position: THREE.BufferAttribute }
type Boom = MeshBVH & { lelievlet?: Eigen };

// Raycasts through a bounding volume hierarchy instead of every triangle: picking what is under the
// pointer, the search for a view of a part (flyTo) and the probes that lay gear on the hull go
// through hundreds of thousands of triangles otherwise. A tree is built once per geometry. Where the
// geometry is rewritten later (a sail bellying, a decal on it) the tree is refitted to it before it
// answers - the same triangles, moved - and anything whose triangles themselves changed takes the
// plain way, triangle by triangle, as before.

const MIN_TRIANGLES = 256;            // below this the plain way is as quick
let patched = false;
const plain = THREE.Mesh.prototype.raycast;

/** Mesh.raycast goes through the tree where there is a current one. Once per page; nothing at import. */
export function useTrees(): void {
  if (patched) return;
  patched = true;
  THREE.Mesh.prototype.raycast = function raycast(this: THREE.Mesh, raycaster: THREE.Raycaster, intersects: THREE.Intersection[]) {
    const g = this.geometry; const tree = g?.boundsTree as Boom | undefined;
    if (tree?.lelievlet && !(this as THREE.Mesh & { isInstancedMesh?: boolean }).isInstancedMesh && !(this as THREE.Mesh & { isSkinnedMesh?: boolean }).isSkinnedMesh) {
      const pos = g.attributes.position as THREE.BufferAttribute; const own = tree.lelievlet;  // what we keep on the tree, under a key of our own
      if (own.version !== pos.version && g.index === own.index && pos === own.position) {
        tree.refit(); own.version = pos.version;                    // moved, not remade: the tree follows
      }
      if (own.version === pos.version) return acceleratedRaycast.call(this, raycaster, intersects);
    }
    return plain.call(this, raycaster, intersects);
  };
}

/** A tree for every geometry under `root` that is big enough to be worth one; returns how many. */
export function buildTrees(root: THREE.Object3D): number {
  const done = new Set<THREE.BufferGeometry>(); let n = 0;
  root.traverse((m) => {
    const g = m instanceof THREE.Mesh ? m.geometry as THREE.BufferGeometry : null;
    if (!g || done.has(g) || g.boundsTree || !g.attributes.position) return;
    done.add(g);
    const triangles = (g.index ? g.index.count : g.attributes.position.count) / 3;
    if (triangles < MIN_TRIANGLES || g.morphAttributes?.position?.length) return;
    const tree: Boom = new MeshBVH(g, { indirect: true });           // indirect: the geometry's own index stays as it is
    g.boundsTree = tree;
    tree.lelievlet = { version: (g.attributes.position as THREE.BufferAttribute).version, index: g.index, position: g.attributes.position as THREE.BufferAttribute };
    n++;
  });
  return n;
}
