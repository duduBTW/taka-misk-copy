<template>
  <div class="lista_container">
    <h1 v-if="lista !== null">{{ lista.titulo }}</h1>
    <template v-if="valores !== null">
      <div v-for="campo in valores" :key="campo" class="item">{{ campo }}</div>
    </template>
    <template v-else>
      <div>
        Carregando...
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IListCompleta } from '~/types/lista'

export default Vue.extend({
  name: 'TelaLista',
  data() {
    return {
      lista: null as IListCompleta | null,
    }
  },
  async fetch() {
    this.lista = await this.$database.getItemLista(this.$route.params.id)
  },
  computed: {
    valores() {
      if (this.lista === null) return null

      const lista: Partial<IListCompleta> = {
        ...(this.$data.lista as IListCompleta),
      }
      delete lista.titulo
      delete lista.id

      const campos = [...Object.values(lista)]
      campos.shift()

      return campos
    },
  },
})
</script>
 
<style lang="scss" scoped>
.lista_container {
  padding: 120px 120px;

  display: grid;
  grid-column-gap: 100px;
  grid-row-gap: 100px;
  grid-template-columns: repeat(3, 1fr);

  & h1 {
    grid-area: 1 / span 3;
  }

  & .item {
    font-style: normal;
    font-weight: 900;
    font-size: 48px;
    line-height: 56px;

    color: var(--text-primary);
    cursor: pointer;
  }
}
</style>