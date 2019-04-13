<template>
    <div>
        <p>Nombre:
        <slot name="nombre"></slot></p>

        <p>Cargo: <slot name="cargo"></slot></p>
<hr>
        <slot name="comentario"></slot>

    </div>
</template>

<script>

</script>

<style scoped>
    div {
        border: 1px solid blue;
        background-color: lightblue;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>