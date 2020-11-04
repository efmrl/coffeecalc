<script>
    import { wbSchema } from "./coffee.js";

    let water = 16;
    $: realWater = numOrZero(water);
    $: fullBeans = realWater * 28.3495 / 17;
    $: beans = Math.round((fullBeans + Number.EPSILON) * 100) / 100;

    function numOrZero(s) {
        const ns = parseInt(s, 10);
        if (isNaN(ns)) {
            return 0;
        }
        return ns;
    }
</script>

<div class="flex-grow grid grid-cols-2 content-start gap-2 mt-4 mx-8">
        <label for="water" class="text-right">Water in ounces:</label>
        <input name="water" type="text" class="bg-transparent" bind:value={water}>

        <div class="text-right">
        Beans in grams:
        </div>
        <div>
            {beans}
        </div>
</div>
