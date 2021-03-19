<script>
  import { mode, coffeeIn, waterBeans, beansWater, output } from "./coffee.js";
</script>

<div class="flex-grow grid grid-cols-2 content-start gap-2 mt-4 mx-8">
  <label for="water" class="text-right">
    <span class="words">Water in ounces:</span>
  </label>
  <input
    name="water"
    type="text"
    size="4"
    class="words"
    bind:value={$coffeeIn}
    use:focus
  />

  <div class="text-right">
    <span class="words"> Beans in grams: </span>
  </div>
  <div>
    <span class="words"> {$output} </span>
  </div>
</div>
