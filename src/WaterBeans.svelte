<script>
  import { mode, water, waterBeans, beansWater, gotBeans } from "./coffee.js";

  let input = 16;

  $: $water = input;
  $: output = $gotBeans;
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
    bind:value={input}
    use:focus
  />

  <div class="text-right">
    <span class="words"> Beans in grams: </span>
  </div>
  <div>
    <span class="words"> {output} </span>
  </div>
</div>
