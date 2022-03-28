<template>
    <v-container class="primary">
        <h4>Lista de usuarios (puedes ordenar por nombre, suscripcion o buscar por palabra)</h4>
        <v-data-table
        class="accent"
        :headers="headers"
        :items="lista"
        item-key="nombre"
        :items-per-page="5"
        :search="busqueda"
        :custom-filter="filtro"
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
          { text: 'Celular', sortable: false, value: 'celular' },
          { text: 'Email', sortable: false, value: 'email' },
          { text: 'Suscripto', sortable:true, value: 'suscripto' }
        ],
        busqueda:''
        }
        
    },
    props:{
        lista: Array
    },
    methods: {
      filtro (value, busqueda) {
        return value != null &&
          busqueda != null &&
          typeof value === 'string' &&
          value.toString().toLowerCase().indexOf(busqueda) !== -1
      }
      },
      //se crea al inicializar vue
      beforeCreate(){
          console.log('before create');
      }
  }
</script>