<template>
      <v-container class="primary">
        <h4>Lista de usuarios (puedes ordenar por nombre o buscar por palabra)</h4>
        <v-data-table
        class="accent"
        :headers="headers"
        :items="usuarios"
        item-key="nombre"
        :items-per-page="5"
        :search="busqueda"
        >
        <template v-slot:top>
        <v-text-field
          v-model="busqueda"
          label="Buscar"
          class="mx-4"
        ></v-text-field>
      </template>
        </v-data-table>
    </v-container>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
        data () {
            return {
                headers: [
                {
                    text: 'Nombre',
                    align: 'start',
                    sortable: true,
                    value: 'nombre',
                },
                { text: 'Email', sortable: false, value: 'email' },
                ],
                busqueda:''
                }  
    },
    computed:{
        ...mapState([
        'usuarios'
        ])
    },
    methods: {
        ...mapActions([
            'obtenerUsers'
        ])
    },
    created(){
       this.obtenerUsers();
    }
}
</script>

<style>

</style>