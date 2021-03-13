<script>
  import "./TailwindStyles.svelte";

  import WaterBeans from "./WaterBeans.svelte";
  import Credit from "./Credit.svelte";
</script>

<main class="pictured container h-screen w-full">
  <h1 class="text-center text-3xl m-3">
    <span class="words">coffeecalc</span>
  </h1>

  <WaterBeans />

  <Credit />
</main>

<style>
  .container {
    @apply flex flex-col h-full min-h-screen mx-auto max-w-5xl text-coffee-burnt;
  }
  :global(.words) {
    @apply bg-coffee-diva bg-opacity-75 p-1 rounded;
  }
  .pictured {
    @apply bg-coffee-light dark:bg-coffee-dark bg-center bg-fixed bg-no-repeat bg-cover;
  }
</style>
