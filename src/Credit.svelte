<script>
  import { fly } from "svelte/transition";
  import { media } from "./media.js";

  export let wordsBG;

  $: photo = ($media.dark) ? "Nathan Dumlao" : "Isaac Benhesed";
  $: photoURL = ($media.dark) ? "https://unsplash.com/@nate_dumlao" : "https://unsplash.com/@isaacbenhesed";
  let moreShow = false;
  let moreWord = "more";

  function toggleMore() {
    moreShow = !moreShow;
    moreWord = (moreShow) ? "less" : "more";
  }
</script>

{#if moreShow}
  <div
    in:fly={{ y: 128, duration: 500 }}
    out:fly={{ y: 128, duration: 300 }}
    class="words {wordsBG} m-3"
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

<div class="text-right text-sm mb-2 mr-3">
  <span class="words {wordsBG}">
    photo by <a href={photoURL} class="underline">{photo}</a>
    <span on:click={toggleMore}>{moreWord}...</span>
  </span>
</div>
