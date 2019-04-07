


<template>
    <div class="container">
        <app-header></app-header>
        {{server}}
        <hr >
        <div class="row">            
            <app-servers
                @serverSelected="server = $event"
            ></app-servers>
            <server-details
                :item="server"></server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>

import AppServers from './components/Server/Servers.vue';
import ServerDetails from './components/Server/ServerDetail.vue';

export default {
    data: function() {
        return {
            server: {}
        }
    },
    components: {
        //'app-servers': Servers
        AppServers, //Vue lo convierte en app-servers
        ServerDetails
    }
}

</script>

<style>

</style>
