<script>
  import WaterBeans from "./WaterBeans.svelte";
  import Credit from "./Credit.svelte";
  const world = 'postcss'; // edit world and save to see hmr update
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

<div class="container pictured bg-coffee-dark">
  <h1 class="text-center text-3xl m-3">
    <span class="words"> coffeecalc </span>
  </h1>

  <WaterBeans />

  <Credit />
</div>
