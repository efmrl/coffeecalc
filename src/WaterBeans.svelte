<script>
  import { CoffeeCalc } from "./coffee.js";
  import Arrows16 from "carbon-icons-svelte/lib/Arrows16";

  const calc = new CoffeeCalc();
  let ccInput = 16;

  let editRatio = false;
  let ratioText = "drip / pour-over:";

  function focus(e) {
    e.focus();
  }

  function swapper() {
    const saveOut = calc.convert(ccInput);
    calc.swap();
    ccInput = saveOut;
  }

  function inputType() {
    ccInput = calc.inputType(ccInput);
  }
  function outputType() {
    calc.outputType();
    const orig = ccInput;
    ccInput = 7;
    ccInput = orig;
  }
</script>

<div class="flex-grow grid grid-cols-2 content-start gap-2 mt-4 mx-8">
  <section class="words place-self-center col-span-2">
    {#if editRatio}
      <span class="picker">
        <button
          on:mousedown={() => {
            calc.ratio = 17;
            ratioText = "drip / pour-over:";
          }}
        >
          drip / pour-over
        </button>
        <button
          on:mousedown={() => {
            calc.ratio = 12;
            ratioText = "french press:";
          }}
        >
          french press
        </button>
        <button
          on:mousedown={() => {
            calc.ratio = 7;
            ratioText = "moka pot:";
          }}
        >
          moka pot
        </button>
        <input
          type="text"
          size="3"
          class="words text-right"
          on:blur={() => {
            editRatio = false;
          }}
          on:change={() => {
            ratioText = "";
          }}
          on:keypress={(e) => {
            if (e.key == "Enter") {
              e.target.blur();
            }
          }}
          bind:value={calc.ratio}
          use:focus
        />:1
      </span>
    {:else}
      <span
        on:click={() => {
          editRatio = true;
        }}
        class="words clicky"
      >
        {ratioText}
        {calc.ratio}:1
      </span>
    {/if}
  </section>

  <label for="water" class="text-right">
    <span class="words" on:click={inputType}
      >{calc.inputTitle(ccInput)} in
      <span class="clicky">{calc.inputUnits(ccInput)}</span>:</span
    >
  </label>
  <input
    name={calc.inputName(ccInput)}
    type="text"
    size="4"
    class="words w-16"
    bind:value={ccInput}
    use:focus
  />

  <div class="col-span-2 place-self-center">
    <button class="words" on:click={swapper}><Arrows16 /></button>
  </div>

  <div class="text-right">
    <span class="words" on:click={outputType}
      >{calc.outputTitle(ccInput)} in
      <span class="clicky">{calc.outputUnits(ccInput)}</span>:
    </span>
  </div>
  <div>
    <span class="words"> {calc.convert(ccInput)} </span>
  </div>
</div>

<style>
  .clicky {
    @apply underline cursor-pointer;
  }

  .picker button {
    @apply bg-coffee-adept text-white p-1 rounded;
  }
</style>
