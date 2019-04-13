<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="componenteSeleccionado='app-blue'">Load Blue Template</button>
                <button class="btn btn-success" @click="componenteSeleccionado='app-green'">Load Green Template</button>
                <button class="btn btn-danger" @click="componenteSeleccionado='app-red'">Load Red Template</button>
                <hr>

                <component :is="componenteSeleccionado">
                    <span slot="nombre">Elvia Gavidia</span>
                    <span slot="cargo">Mi Esposita</span>

                    <span slot="comentario">Te amo puerquita :)</span>
                </component>

                <!-- <app-blue>
                    <span slot="nombre">Elvia Gavidia</span>
                    <span slot="cargo">Mi Esposita</span>

                    <span slot="comentario">Te amo puerquita :)</span>
                </app-blue>
                <app-green>
                    <span slot="nombre">Wilver Villalobos</span>
                    <span slot="cargo">Papito</span>

                    <span slot="comentario">Viejo</span>
                </app-green>
                <app-red>
                    <span slot="nombre">Eliana Castañeda</span>
                    <span slot="cargo">Mamota</span>

                    <span slot="comentario">Renegona</span>
                </app-red> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function() {
            return {
                componenteSeleccionado: 'app-blue'
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
