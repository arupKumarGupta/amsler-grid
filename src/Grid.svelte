<script>
    import Cell from "./Cell.svelte";
    export let grid = [];
    export let onCellClicked;
    const clicked = (event) => {
        onCellClicked(event);
    }
</script>
<div on:click={clicked} class="amsler-grid">
    {#each grid as row}
        <div class="amsler-row">
            {#each row as cell}
            <Cell id={cell.id} />
            {/each}
        </div>
    {/each}
</div>

<style>
    .amsler-row{
        display: flex;
        max-width: 10cm;
    }
</style>