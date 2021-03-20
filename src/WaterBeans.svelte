<script>
  import { CoffeeCalc } from "./coffee.js";

  const calc = new CoffeeCalc();
  let ccInput = 16;

  function focus(e) {
    e.focus();
  }
</script>

<div class="flex-grow grid grid-cols-2 content-start gap-2 mt-4 mx-8">
  <label for="water" class="text-right">
    <span class="words">{calc.inputTitle()} in ounces:</span>
  </label>
  <input
    name={calc.inputName()}
    type="text"
    size="4"
    class="words"
    bind:value={ccInput}
    use:focus
  />

  <div class="text-right">
    <span class="words">{calc.outputTitle()} in grams: </span>
  </div>
  <div>
    <span class="words"> {calc.convert(ccInput)} </span>
  </div>
</div>
