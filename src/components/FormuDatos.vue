<template>
  <div>
    <validation-observer
        ref="observer"
        v-slot="{ invalid }"
    >
        <form @submit.prevent="submit">
        <validation-provider
            v-slot="{ errors }"
            name="Name"
            :rules="{
                required:true,
                regex:'^[A-Za-z]+([\ A-Za-z])',
                max:20
            }"
        >
            <v-text-field
            v-model="name"
            :counter="20"
            :error-messages="errors"
            label="Nombre"
            required
            ></v-text-field>
        </validation-provider>
        <validation-provider
            v-slot="{ errors }"
            name="phoneNumber"
            :rules="{
            required: true,
            digits: 10,
            regex: '^(11)\\d{8}$'
            }"
        >
            <v-text-field
            v-model="phoneNumber"
            :counter="10"
            :error-messages="errors"
            label="Celular de Buenos Aires"
            required
            ></v-text-field>
        </validation-provider>
        <validation-provider
            v-slot="{ errors }"
            name="email"
            rules="required|email"
        >
            <v-text-field
            v-model="email"
            :error-messages="errors"
            label="E-mail"
            required
            ></v-text-field>
        </validation-provider>
        
        <validation-provider
            v-slot="{ errors }"
            name="checkbox"
        >
            <v-checkbox
            v-model="checkbox"
            :error-messages="errors"
            value="1"
            label="Recibir nuestro Newsletter"
            type="checkbox"
            ></v-checkbox>
        </validation-provider>

        <v-btn
            @click="armarObjeto"
            class="mr-4"
            type="submit"
            :disabled="invalid"
        >
            submit
        </v-btn>
        <v-btn @click="clear">
            clear
        </v-btn>
        </form>
    </validation-observer>
    <p></p>
    <v-alert
      v-model="alert"
      border="left"
      close-text="Close Alert"
      color="deep-purple accent-4"
      dark
      dismissible
    >
      Usuario posteado con exito
    </v-alert>
  <tabla-datos :lista="listaUsu"/>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapActions} from 'vuex'
  import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
  import TablaDatos from './TablaDatos.vue';

  setInteractionMode('eager')

  extend('digits', {
    ...digits,
    message: '{_field_} needs to be {length} digits. ({_value_})',
  })

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })

  extend('regex', {
    ...regex,
    message: '{_field_} {_value_} does not match {regex}',
  })

  extend('email', {
    ...email,
    message: 'Email must be valid',
  })

  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
      TablaDatos
    },
    data: () => ({
      name: '',
      phoneNumber: '',
      email: '',
      checkbox: null,
      listaUsu:JSON.parse(localStorage.getItem("usuarios"))||[],
      alert:false
    }),

    methods: {
      ...mapMutations([
        'recibirRespuestaPost'
      ]),
      ...mapActions([
        'postearUser'
      ]),
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.name = ''
        this.phoneNumber = ''
        this.email = ''
        this.checkbox = null
        this.$refs.observer.reset()
      },
      armarObjeto(){
          const nuevoUsu={
              nombre:this.name,
              celular:this.phoneNumber,
              email:this.email,
              suscripto:this.checkbox=="1"
          };
        this.listaUsu.push(nuevoUsu);
        localStorage.setItem("usuarios",JSON.stringify(this.listaUsu));
        this.postearUser(nuevoUsu);
        this.alert=true;
      }
    },
    computed:{
      ...mapState([
        'respuesta'
      ])
    }
  }
</script>

