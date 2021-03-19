<script>
  import { mode, waterBeans, beansWater } from "./coffee.js";
  import Water2Beans from "./Water2Beans.svelte";
  import Beans2Water from "./Beans2Water.svelte";

</script>

<div class="flex-grow">
  {#if $mode == waterBeans}
    <Water2Beans />
  {:else}
    <Beans2Water />
  {/if}
</div>