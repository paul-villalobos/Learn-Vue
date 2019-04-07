<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details for {{item.id}}</p>
        <p>Status: {{item.status}}</p>
        <button @click="arreglar">Arreglar</button>
    </div>
</template>

<script>
export default {
    props: ['item'],
    methods: {
        arreglar() {
            this.item.status = 'Arreglado';
        }
    }
}
</script>
