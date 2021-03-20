<script>
  import { CoffeeCalc } from "./coffee.js";
  import Arrows16 from "carbon-icons-svelte/lib/Arrows16";

  const calc = new CoffeeCalc();
  let ccInput = 16;

  function focus(e) {
    e.focus();
  }

  function swapper() {
    const saveOut = calc.convert(ccInput);
    calc.swap();
    ccInput = saveOut;
  }
</script>

<div class="flex-grow grid grid-cols-2 content-start gap-2 mt-4 mx-8">
  <label for="water" class="text-right">
    <span class="words">{calc.inputTitle(ccInput)} in {calc.inputUnits(ccInput)}:</span>
  </label>
  <input
    name={calc.inputName(ccInput)}
    type="text"
    size="4"
    class="words"
    bind:value={ccInput}
    use:focus
  />

  <div class="col-span-2 place-self-center">
    <button class="words" on:click={swapper}><Arrows16 /></button>
  </div>

  <div class="text-right">
    <span class="words">{calc.outputTitle(ccInput)} in {calc.outputUnits(ccInput)}: </span>
  </div>
  <div>
    <span class="words"> {calc.convert(ccInput)} </span>
  </div>
</div>
