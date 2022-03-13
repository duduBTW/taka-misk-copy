<template>
  <div v-if="lista !== null" class="card_list_container">
    <DesafioCard v-for="card in lista" :key="card.data.id" :card="card" />
  </div>
  <div v-else>
    <div>Carregando...</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IGetTodos } from '~/utils/database'

export default Vue.extend({
  name: 'CardList',
  data() {
    return {
      lista: null as IGetTodos[] | null,
    }
  },
  async fetch() {
    this.lista = await this.$database.getTodos()
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