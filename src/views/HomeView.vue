<template>
  <div class="home">
    <formu-datos/>
  </div>
</template>

<script>
// @ is an alias to /src
import FormuDatos from '@/components/FormuDatos.vue'

export default {
  name: 'HomeView',
  components: {
    FormuDatos
  }
}
</script>
