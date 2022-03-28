<template>
  <div class="listado">
    <listado-api/>
  </div>
</template>

<script>
import ListadoApi from '@/components/ListadoApi.vue'


export default {
  name: 'ListadoView',
  components: {
    ListadoApi
  }
}
</script>