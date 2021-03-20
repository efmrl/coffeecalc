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

  inputType(x) {
    switch (this.mode) {
      case waterBeans:
        return this.switchWaterType(x);
      case beansWater:
        return this.switchBeanType(x);
    }
  }

  outputType() {
    switch (this.mode) {
      case waterBeans:
        this.switchBeanType();
        break;
      case beansWater:
        this.switchWaterType();
    }
  }

  switchWaterType(x) {
    x = sanitize(x);
    switch (this.waterUnits) {
      case Ounces:
        this.waterUnits = Grams;
        return roundIt(x * gramsPerOunce);
      case Grams:
        this.waterUnits = Ounces;
        return roundIt(x / gramsPerOunce);
    }
  }

  switchBeanType(x) {
    switch (this.beanUnits) {
      case Ounces:
        this.beanUnits = Grams;
        return roundIt(x * gramsPerOunce);
      case Grams:
        this.beanUnits = Ounces;
        return roundIt(x / gramsPerOunce);
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
