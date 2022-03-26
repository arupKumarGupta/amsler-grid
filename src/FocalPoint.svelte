<script>
    export let onFocalPointClicked;
</script>
<div on:click={onFocalPointClicked} class="amsler-focal-point"/>
<style>
    .amsler-focal-point {
    cursor: pointer;

        position: absolute;
        border-radius: 50%;
        width: .4cm;
        height: .4cm;
        background: black;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
</style>