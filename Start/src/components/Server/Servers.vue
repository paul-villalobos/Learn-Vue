<template>
<div class="col-xs-12 col-sm-6">

<ul class="list-group">
    <server-item
        v-for="i in servers"
        :item="i"
        @serverSelected="serverSelected($event)">
    </server-item>                    
                </ul>                
</div>    
</template>

<script>

import ServerItem from './ServerItem.vue';

export default {
    components: {
        ServerItem
    },
    data: function() {
        return {
            servers: [
                { id: 1, status: 'Normal'},
                { id: 2, status: 'Critical'},
                { id: 3, status: 'Unknown'},
                { id: 4, status: 'Normal'}
            ]
        };
    },
    methods: {
        serverSelected(data) {
            console.log('Servers.vue');
            console.log(data);
            this.$emit('serverSelected', data);
        }
    }
}
</script>
