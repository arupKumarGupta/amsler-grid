<script>
import FocalPoint from "./FocalPoint.svelte";

	import Grid from "./Grid.svelte";

	const grid = [];
	let activateInteractiveMode = false;
	for (let c = 0; c < 20; c++) {
        const row = [];
        for (let r = 0; r < 20; r++) {
            row.push({id:`${c},${r}`});
        }
		grid.push(row)
    }

	const onCellClicked = ({target}) => {
		if(!activateInteractiveMode) {return};
        target.classList.toggle('highlight')
		
	}
	const onFocalPointClicked = () => {
		activateInteractiveMode = !activateInteractiveMode
	}

</script>

<h1>Amsler Grid</h1>
<main class="amsler-grid-container">
	<Grid {grid} {onCellClicked}/>
	<FocalPoint {onFocalPointClicked} />
</main>
<style>
	h1{
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top:40px;
		color: rgb(191, 12, 12);
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	}
	.amsler-grid-container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
</style>