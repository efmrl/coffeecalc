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
  <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="efmrl" data-color="#a96800" data-emoji=""  data-font="Cookie" data-text="Buy me some coffee beans" data-outline-color="#ffffff" data-font-color="#ffffff" data-coffee-color="#FFDD00" ></script>
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
