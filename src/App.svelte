<script>
  import WaterBeans from "./WaterBeans.svelte";
  import Credit from "./Credit.svelte";
  const world = 'postcss'; // edit world and save to see hmr update
</script>

<style>
  .world {
    @apply text-teal-500 italic; /*  here's some tailwind apply */
  }
</style>

<div class="flex flex-col h-full">
  <h1 class="text-center text-3xl"> coffeecalc </h1>

  <WaterBeans />

  <Credit />
</div>
