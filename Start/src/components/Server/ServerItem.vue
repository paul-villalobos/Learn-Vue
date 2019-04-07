<template>
    <li class="list-group-item"
        @click="verDetalle()">
                        <p>Server {{item.id}}</p>
                        <p>Status: {{item.status}}</p>
                        
                    </li>
</template>

<script>
export default {
    props: ['item'],
    methods: {
        verDetalle () {
            console.log(this.item.status);
            this.$emit('serverSelected', this.item);
        }
    }
}
</script>
