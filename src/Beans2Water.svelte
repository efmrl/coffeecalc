<script>
    import { beans, gotWater } from "./coffee.js";

  function focus(e) {
    e.focus();
  }
</script>

<div class="grid grid-cols-2 content-start gap-2 mt-4 mx-8">
  <label for="beans" class="text-right">
    <span class="words">Beans in grams:</span>
  </label>
  <input
    name="beans"
    type="text"
    size="4"
    class="words"
    bind:value={$beans}
    use:focus
  />

  <div class="text-right">
    <span class="words"> Water in ounces: </span>
  </div>
  <div>
    <span class="words"> {$gotWater} </span>
  </div>
</div>
