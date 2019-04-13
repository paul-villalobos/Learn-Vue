


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

        <button @click="selectedComponent='app-footer'">Footer</button>
        <button @click="selectedComponent='AppAuthor'">Author</button>
        <button @click="selectedComponent='AppNew'">New</button>
        <hr>
        <p>{{selectedComponent}}</p>
        <keep-alive> <!-- Asegura que el componente no se destruya 
        cuando cambiamos de un componente a otro -->
            <component :is="selectedComponent">
                <!-- Estos componentes tienen 2 lyfecicle hooks que podemos utilizar
                cuando entramos y cerramos el componente:
                1. deactivated: al salir del componente
                2. activated: Al entrar al componente
                    -->
            <h2 slot="title">{{quoteTitle}}</h2>
            <p slot="content">A wonderful quote!!!</p>
        </component>
        </keep-alive>
        <!--
        <app-footer>
            <h2 slot="title">{{quoteTitle}}</h2>
            <p slot="content">A wonderful quote</p>
        </app-footer>
        -->
    </div>
</template>

<script>

import AppServers from './components/Server/Servers.vue';
import ServerDetails from './components/Server/ServerDetail.vue';

import AppAuthor from './components/Shared/Author.vue';
import New from './components/Shared/New.vue';

export default {
    data: function() {
        return {
            server: {},
            quoteTitle: "All Servers are managed here??",
            selectedComponent: 'app-footer'
        }
    },
    components: {
        //'app-servers': Servers
        AppServers, //Vue lo convierte en app-servers
        ServerDetails,
        AppAuthor,
        AppNew: New
    }
}

</script>

<style>

</style>
