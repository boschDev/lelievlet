import * as THREE from 'three';

// The band in the bakskleur on the riemen and the wrikriem at the blade instead of at the handle, as some groups mark
// them (Aanpassen › Bekend: groepen.js riemBandBlad). The model has the band cut in near the handle (pipeline/parts.py
// BANDS); here it goes VAN_TIP from the tip of the blade, half as wide as it is there, and the band at the handle takes
// the varnish of the rest of the riem.
//
// Worked out per pixel from how far it is from the tip of the blade, along the riem.

const RIEMEN = ['riem_bb', 'riem_sb', 'wrikriem'];
const VAN_TIP = 0.05;                  // m: from the tip of the blade to the band

/** The vertices of a mesh in the space of another mesh of the same part. */
function positionsIn(mesh, space) {
  const to = new THREE.Matrix4().copy(space.matrixWorld).invert().multiply(mesh.matrixWorld);
  const attr = mesh.geometry.getAttribute('position'); const v = new THREE.Vector3();
  return Array.from({ length: attr.count }, (_, i) => v.fromBufferAttribute(attr, i).applyMatrix4(to).clone());
}

/** set(blad): the band at the blade (true) or at the handle, as in the model (false). */
export function makeRiemBand(parts) {
  const riemen = RIEMEN.map((id) => parts.find((p) => p.extras.id === id)).filter(Boolean).map((part) => ({
    hout: part.meshes.find((m) => m.material.name === 'hout_gelakt'),
    band: part.meshes.find((m) => m.material.name === 'bakskleur'),
  })).filter((r) => r.hout && r.band);
  const on = { value: 0 };
  let ready = false;
  const prepare = () => {
    if (ready) return;
    ready = true;
    for (const r of riemen) {
      r.hout.updateWorldMatrix(true, false); r.band.updateWorldMatrix(true, false);
      const hout = positionsIn(r.hout, r.hout); const band = positionsIn(r.band, r.hout);
      // along the riem: from the middle of the band at the handle to the point of the riem furthest from it, the tip
      // of the blade
      const midden = band.reduce((s, p) => s.add(p), new THREE.Vector3()).divideScalar(band.length);
      const tip = hout.reduce((far, p) => (p.distanceToSquared(midden) > far.distanceToSquared(midden) ? p : far), hout[0]);
      const as = midden.clone().sub(tip).normalize();
      const along = (p) => p.clone().sub(tip).dot(as);
      const b = band.map(along);
      // half as wide as the band at the handle
      const breed = (Math.max(...b) - Math.min(...b)) / 2;
      const own = {
        uTip: { value: tip }, uAs: { value: as },
        uVan: { value: VAN_TIP }, uTot: { value: VAN_TIP + breed },
        uKleur: { value: r.band.material.color },         // the bakskleur as it is now, also while the early paint fades in
      };
      const material = r.hout.material;
      material.onBeforeCompile = (shader) => {
        Object.assign(shader.uniforms, own, { uBlad: on });
        shader.vertexShader = shader.vertexShader
          .replace('#include <common>', '#include <common>\nvarying vec3 vRiem;')
          .replace('#include <begin_vertex>', '#include <begin_vertex>\nvRiem = position;');
        shader.fragmentShader = shader.fragmentShader
          .replace('#include <common>', `#include <common>
            varying vec3 vRiem;
            uniform float uBlad;
            uniform vec3 uTip;
            uniform vec3 uAs;
            uniform float uVan;
            uniform float uTot;
            uniform vec3 uKleur;`)
          .replace('#include <color_fragment>', `#include <color_fragment>
            float langs = dot(vRiem - uTip, uAs);
            if (uBlad > 0.5 && langs >= uVan && langs <= uTot) diffuseColor.rgb = uKleur;`);
      };
      material.customProgramCacheKey = () => 'riemband';
      material.needsUpdate = true;
      r.eigen = r.band.material;
    }
  };
  return {
    set(blad) {
      if (blad) prepare();
      on.value = blad ? 1 : 0;
      // the band at the handle in the varnish of the riem, or in its own paint again
      for (const r of riemen) if (r.eigen) r.band.material = blad ? r.hout.material : r.eigen;
    },
  };
}
