<template>
  <div v-if="lista !== null" class="card_list_container">
    <DesafioCard v-for="card in lista" :key="card.id" :card="card" />
  </div>
  <div v-else>
    <div>Carregando...</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IList } from '~/types/lista'

export default Vue.extend({
  name: 'CardList',
  data() {
    return {
      lista: null as IList[] | null,
    }
  },
  async fetch() {
    this.lista = await this.$database.getLista()
  },
  fetchOnServer: false,
})
</script>

<style scoped lang="scss">
.card_list_container {
  display: flex;
  flex-direction: column;
}
</style>