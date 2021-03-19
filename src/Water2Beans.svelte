<script>
  import { water, gotBeans } from "./coffee.js";
</script>

<div class="grid grid-cols-2 content-start gap-2 mt-4 mx-8">
  <label for="water" class="text-right">
    <span class="words">Water in ounces:</span>
  </label>
  <input
    name="water"
    type="text"
    size="4"
    class="words"
    bind:value={$water}
    use:focus
  />

  <div class="text-right">
    <span class="words"> Beans in grams: </span>
  </div>
  <div>
    <span class="words"> {$gotBeans} </span>
  </div>
</div>
