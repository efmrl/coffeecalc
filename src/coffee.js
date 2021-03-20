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

export class CoffeeCalc {
  constructor() {
    this.ratio = 17;
    this.waterUnits = Ounces;
    this.beanUnits = Grams;
    this.mode = waterBeans;
  }

  convert(input) {
    input = sanitize(input);

    if (this.mode == waterBeans) {
      return this.water2Beans(input);
    }

    return this.beans2Water(input);
  }

  water2Beans(water) {
    if (this.waterUnits == Ounces) {
      water *= gramsPerOunce;
    }
    let beans = water / this.ratio;
    if (this.beanUnits == Ounces) {
      beans /= gramsPerOunce;
    }
    return roundIt(beans);
  }

  beans2Water(beans) {
    if (this.beanUnits == Ounces) {
      beans *= gramsPerOunce;
    }
    let water = beans * this.ratio;
    if (this.waterUnits == Ounces) {
      water /= gramsPerOunce;
    }
    return roundIt(beans);
  }

  inputName() {
    if (this.mode == waterBeans) {
      return "water";
    }

    return "beans";
  }
}