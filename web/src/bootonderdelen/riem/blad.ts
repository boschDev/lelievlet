import type { Versie } from '../onderdeel.ts';
import { type Riem, zonderHandvatBand } from './base.ts';

// Blad: the band in the bakskleur near the tip of the blade, not at the handle. The model has no band there to
// colour, so it is worked out per pixel, from how far along the riem it is from the tip.

const VAN_TIP = 0.05;                  // m: from the tip of the blade to the band
const BREEDTE = 0.5;                   // the band as wide as this part of the one at the handle

export default function blad(rs: Riem[]): Versie {
  const on = { value: 0 };
  let klaar = false;
  const prepare = (): void => {
    if (klaar) return;
    klaar = true;
    for (const r of rs) {
      const own = {
        uTip: { value: r.tip }, uAs: { value: r.as },
        uVan: { value: VAN_TIP }, uTot: { value: VAN_TIP + BREEDTE * r.breedte },
        uKleur: { value: r.eigen.color },        // the bakskleur as it is now, also while the early paint fades in
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
      material.customProgramCacheKey = () => 'riem-blad';
      material.needsUpdate = true;
    }
  };
  return {
    naam: 'Markering bij het blad',
    aan: () => { prepare(); on.value = 1; zonderHandvatBand(rs, true); },
    uit: () => { on.value = 0; zonderHandvatBand(rs, false); },
  };
}
