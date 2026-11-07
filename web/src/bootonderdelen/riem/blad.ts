import { Versie } from '../onderdeel.ts';
import type { RiemBase } from './base.ts';

// Blad: the band in the bakskleur near the tip of the blade, not at the handle. The model has no band there to
// colour, so it is worked out per pixel, from how far along the riem it is from the tip.

const VAN_TIP = 0.05;                  // m: from the tip of the blade to the band
const BREEDTE = 0.5;                   // the band as wide as this part of the one at the handle

export class Blad extends Versie<RiemBase> {
  readonly naam = 'Markering bij het blad';
  readonly #on = { value: 0 };
  #klaar = false;

  override aan(): void { this.#prepare(); this.#on.value = 1; this.onderdeel.zonderHandvatBand(true); }
  override uit(): void { this.#on.value = 0; this.onderdeel.zonderHandvatBand(false); }

  #prepare(): void {
    if (this.#klaar) return;
    this.#klaar = true;
    const on = this.#on;
    for (const r of this.onderdeel.riemen) {
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
  }
}
