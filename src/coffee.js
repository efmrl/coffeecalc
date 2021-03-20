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

export const Grams = 0;
export const Ounces = 1;

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

  swap() {
    switch (this.mode) {
      case waterBeans:
        this.mode = beansWater;
        break;
      case beansWater:
        this.mode = waterBeans;
        break;
      default:
        this.mode = waterBeans;
        break;
    }
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
    return roundIt(water);
  }

  inputName() {
    if (this.mode == waterBeans) {
      return "water";
    }

    return "beans";
  }

  inputUnits() {
    if (this.mode == waterBeans) {
      return this.unitTitle(this.waterUnits);
    }
    return this.unitTitle(this.beanUnits);
  }

  outputUnits() {
    if (this.mode == waterBeans) {
      return this.unitTitle(this.beanUnits);
    }
    return this.unitTitle(this.waterUnits);
  }

  unitTitle(which) {
    switch (which) {
      case Ounces:
        return "ounces";
      case Grams:
        return "grams";
    }
    return "grams";
  }

  inputTitle() {
    if (this.mode == waterBeans) {
      return "Water";
    }

    return "Beans";
  }

  outputTitle() {
    if (this.mode == waterBeans) {
      return "Beans";
    }

    return "Water";
  }
}
