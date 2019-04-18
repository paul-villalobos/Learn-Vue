<template>
    <div class="container">

        <app-header
            :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>

        <h1>Quotes added</h1>
        <p>{{ quotes.length}} / 10</p>

        <h4>Quote</h4>
        <app-new-quote @quoteAdded="crearQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteEliminado="quoteEliminado"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: Click on quote to delete it</div>
            </div>
        </div>
    </div>

    

</template>

<script>
    import AppQuoteGrid from './components/QuoteGrid.vue';
    import AppNewQuote from './components/NewQuote.vue';
    import AppHeader from './components/Header.vue';

    export default {
        components: {
            AppQuoteGrid,
            AppNewQuote,
            AppHeader
        },
        data: function() {
            return {
                maxQuotes: 10,
                quotes: ['Primer Quote'],
                newQuote: ''
            }
        },
        methods: {
            crearQuote(quote) {
                if (this.quotes.length >= this.maxQuotes) {
                    return alert('Eliminar quotes');
                }
                this.quotes.push(quote);
            },
            quoteEliminado(index) {
                this.quotes.splice(index,1);
            }
        }
    }
</script>

<style>
</style>
