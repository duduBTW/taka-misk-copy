<template>
  <div>
    <div v-if="lista !== null" class="lista_container">
      <h1>{{ lista.titulo }}</h1>
      <h2 v-for="(campo) in valores" :key="campo" class="item"> {{ campo }} </h2>
    </div>
    <div v-else>
      Carregando...
    </div>
  </div>
</template>

<script>
export default {
  name: 'TelaListaResult',
  data() {
    return {
      lista: null,
      mostrar: [],
    }
  },
  async fetch() {
    this.lista = await this.$database.getItemLista(this.$route.params.id)
  },
  computed: {
    valores() {
      if (this.lista === null) return null

      const lista = {
        ...this.$data.lista,
      }
      delete lista.titulo
      delete lista.id

      return Object.values(lista)
    },
  },
}
</script>

<style lang="scss">
.lista_container {
  padding: 120px;

  display: grid;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  grid-template-columns: repeat(3, 1fr);

  & h1 {
    grid-area: 1 / span 3;
  }

  h2 {
    font-style: normal;
    font-weight: 900;
    font-size: 48px;
    line-height: 56px;
    color: var(--text-primary);

    letter-spacing: -2px;
  }
}
</style>