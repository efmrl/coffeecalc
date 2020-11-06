<script>
  import { media } from "./media.js";

  import WaterBeans from "./WaterBeans.svelte";
  import Credit from "./Credit.svelte";

  $: coffeeBG = $media.dark ? "bg-coffee-dark" : "bg-coffee-light";
  $: wordsBG = $media.dark ? "bg-coffee-diva" : "bg-nearwhite";
</script>

<style>
  .container {
    @apply flex flex-col h-full mx-auto max-w-5xl text-coffee-burnt;
  }
  :global(.words) {
    @apply bg-coffee-diva bg-opacity-75 p-1 rounded;
  }
  .pictured {
    @apply bg-center bg-fixed bg-no-repeat bg-cover;
  }
</style>

<div class="container pictured {coffeeBG}">
  <h1 class="text-center text-3xl m-3">
    <span class="words {wordsBG}"> coffeecalc </span>
  </h1>

  <WaterBeans bind:wordsBG />

  <Credit bind:wordsBG />
</div>
