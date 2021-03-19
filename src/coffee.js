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

export const coffeeIn = writable(16);

function numOrZero(s) {
  const ns = parseFloat(s, 10);
  if (isNaN(ns)) {
    return 0;
  }
  return ns;
}

export const output = derived(
  [coffeeIn, waterUnits, beanUnits, ratio],
  ([$coffeeIn, $waterUnits, $beanUnits, $ratio]) => {
    let input = numOrZero($coffeeIn);
    if ($waterUnits == Ounces) {
      input *= gramsPerOunce;
    }
    let beans = input / $ratio;
    if (beanUnits == Ounces) {
      beans /= gramsPerOunce;
    }
    return roundIt(beans);
  }
);