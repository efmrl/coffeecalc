<script>
    import { wbSchema } from "./coffee.js";

    export let wordsBG;

    let water = 16;
    $: realWater = numOrZero(water);
    $: fullBeans = realWater * 28.3495 / 17;
    $: beans = Math.round((fullBeans + Number.EPSILON) * 100) / 100;

    function numOrZero(s) {
        const ns = parseFloat(s, 10);
        if (isNaN(ns)) {
            return 0;
        }
        return ns;
    }

    function focus(e) {
        e.focus();
    }
</script>

<div class="flex-grow grid grid-cols-2 content-start gap-2 mt-4 mx-8">
    <label for="water" class="text-right">
        <span class="words {wordsBG}">Water in ounces:</span>
    </label>
        <input
            name="water"
            type="text"
            size="4"
            class="words {wordsBG} inline leading-tight m-0 p-0 w-20"
            bind:value={water}
            use:focus
        />

    <div class="text-right">
        <span class="words {wordsBG}"> Beans in grams: </span>
    </div>
    <div>
        <span class="words {wordsBG}"> {beans} </span>
    </div>
</div>
