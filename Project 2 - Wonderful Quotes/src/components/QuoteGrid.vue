<template>

    <div class="row">
        <app-quote 
        v-for="(q, index) in quotes"
        @click.native="eliminarQuote(index)">{{q}}</app-quote>
    </div>
    

</template>

<script>

    import AppQuote from './Quote.vue';

    export default {
        components: {
            AppQuote
        },
        props: ['quotes'],
        methods: {
            eliminarQuote(index) {
                this.$emit('quoteEliminado', index);
            }
        }
    }
</script>

<style scoped>
    div {
        border: green 2px;
    }
</style>
