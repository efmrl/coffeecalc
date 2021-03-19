import { derived, writable } from "svelte/store";

const gramsPerOunce = 28.3495;
function roundIt(x) {
  return Math.round((x + Number.EPSILON) * 100) / 100;
}
function sanitize(s) {
  const ns = parseFloat(s, 10);
  if (isNaN(ns)) {
    return 0;
  }
  return ns;
}

export const waterBeans = 0;
export const beansWater = 1;
export const mode = writable(beansWater);

export const Grams = 0;
export const Ounces = 1;
export const beanUnits = writable(Grams);
export const waterUnits = writable(Ounces);

export const ratio = writable(17);

export const water = writable(16);
export const beans = writable(10);

function numOrZero(s) {
  const ns = parseFloat(s, 10);
  if (isNaN(ns)) {
    return 0;
  }
  return ns;
}

export const gotBeans = derived(
  [water, waterUnits, beanUnits, ratio],
  ([$water, $waterUnits, $beanUnits, $ratio]) => {
    let water = numOrZero($water);
    if ($waterUnits == Ounces) {
      water *= gramsPerOunce;
    }
    let beans = water / $ratio;
    if (beanUnits == Ounces) {
      beans /= gramsPerOunce;
    }
    return roundIt(beans);
  }
);

export const gotWater = derived(
  [beans, beanUnits, waterUnits, ratio],
  ([$beans, $beanUnits, $waterUnits, $ratio]) => {
    let beans = numOrZero($beans);
    if ($beanUnits == Ounces) {
      beans *= gramsPerOunce;
    }
    let water = beans * $ratio;
    if ($waterUnits == Ounces) {
      water /= gramsPerOunce;
    }
    return roundIt(water);
  }
);
