<template>
  <div>
    <NuxtLink to="/">Voltar</NuxtLink>
    <div class="lista_container">
      <h1 v-if="lista !== null">{{ lista.titulo }}</h1>
      <template v-if="valores !== null">
        <TextoEscondido v-for="(campo, index) in valores" :key="campo + index" :texto="campo" :mostrar="mostrar.includes(index)" class="item" @onClick="mostrar.push(index)" />
      </template>
      <template v-else>
        <div>
          Carregando...
        </div>
      </template>
    </div>
    <ListaResult />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IListCompleta } from '~/types/lista'
import ListaResult from '~/components/ListaResult.vue'

export default Vue.extend({
  name: 'TelaLista',
  components: { ListaResult },
  data() {
    return {
      lista: null as IListCompleta | null,
      mostrar: [],
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
      return Object.values(lista)
    },
  },
})
</script>
 
<style lang="scss" scoped>
.lista_container {
  padding: 120px;

  display: grid;
  grid-column-gap: 100px;
  grid-row-gap: 100px;
  grid-template-columns: repeat(3, 1fr);

  & h1 {
    grid-area: 1 / span 3;
  }
}
</style>