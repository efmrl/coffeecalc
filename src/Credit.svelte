<script>
  import { fly } from "svelte/transition";
  import { media } from "./media.js";

  $: photo = $media.dark ? "Nathan Dumlao" : "Isaac Benhesed";
  $: photoURL = $media.dark
    ? "https://unsplash.com/@nate_dumlao"
    : "https://unsplash.com/@isaacbenhesed";
  let moreShow = false;
  let moreWord = "more";

  function toggleMore() {
    moreShow = !moreShow;
    moreWord = moreShow ? "less" : "more";
  }
</script>

{#if moreShow}
  <div
    in:fly={{ y: 128, duration: 500 }}
    out:fly={{ y: 128, duration: 300 }}
    class="words m-3"
  >
    <p>
      Powered by <a href="https://svelte.dev">Svelte</a>
    </p>
    <p>
      Hosted by <a href="https://efmrl.com">efmrl.com</a>
    </p>
    <p>
      Color inspiration by <a href="https://hexcolor.co">hexcolor.co</a>
    </p>
  </div>
{/if}

<div class="credrow flex flex-row text-sm mb-2 mx-3">
  <span class="words">
    photo by <a href={photoURL} class="underline">{photo}</a>
    <span on:click={toggleMore}>{moreWord}...</span>
  </span>
  <a href="https://www.buymeacoffee.com/efmrl" target="_blank" class="buy"
    ><img
      src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png"
      alt="Buy Me A Coffee"
      style="height: 60px !important;width: 217px !important;"
    /></a
  >
</div>

<style>
  .credrow {
    @apply items-end;
  }

  .buy {
    margin-left: auto;
  }
</style>