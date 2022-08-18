<template>
  <div>
    <div v-if="lista !== null" class="lista_container_resposta">
      <div class="titulo">{{ lista.titulo }}</div>
      <div v-for="(campo) in valores" :key="campo" class="item"> {{ campo }} </div>
    </div>
    <div v-else>
      Carregando...
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListaResult',
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

<style lang="scss" scoped>
.lista_container_resposta {
  padding: 0 120px;
  display: grid;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  grid-template-columns: repeat(3, 1fr);

  & .titulo {
    grid-area: 1 / span 3;
    color: black;
    font-size: 16px;
  }

  .item {
    color: black;
    font-size: 20px;
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