<template>
  <div>
    <NuxtLink to="/">Voltar</NuxtLink>
    <div v-if="tabela" class="tabela_container">
      <div v-for="(pergunta, index) in tabela.perguntas" :key="pergunta.titulo" class="item">
        <p>{{pergunta.titulo}}</p>
        <div class="perguntas">
          <h2 v-if="resu[index]" class="pontos">
            {{ resu[index] }}
          </h2>
          <input name="resposta" type="text" @keyup.ctrl.enter="(e) => mostrarResposta(index, e)" />
        </div>
      </div>
      <h1 v-if="total">Total {{ total }}</h1>
    </div>
    <div v-else>
      Carregando...
    </div>
    <TableResult />

  </div>
</template>

<script >
import TableResult from '~/components/TableResult.vue'

export default {
  name: 'TelaTabela',
  components: { TableResult },
  data() {
    return {
      tabela: null,
      resu: [],
    }
  },
  async fetch() {
    this.tabela = await this.$database.getItemTabela(this.$route.params.id)
  },
  computed: {
    total() {
      return this.resu.reduce(
        (previus, current) => Number(previus) + Number(current),
        0
      )
    },
  },
  methods: {
    mostrarResposta(index, e) {
      const tabela = this.tabela
      const resu = [...this.resu]

      if (tabela) {
        for (let i = 0; i < tabela.perguntas[index].respostas.length; i++) {
          const resposta = tabela.perguntas[index].respostas[i]

          if (resposta.valor === e.target.value) resu[index] = resposta.pontos
        }

        this.resu = resu
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.tabela_container {
  padding: 120px;
  display: grid;
  grid-column-gap: 100px;
  grid-row-gap: 100px;
  grid-template-columns: repeat(2, 1fr);

  .item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;
  }

  h1 {
    grid-column: 1 / -1;
    justify-self: flex-end;
    align-self: flex-end;
  }

  h2 {
    margin: 0;
    padding: 0;
  }

  p {
    padding: 0;
    margin: 0;
    font-size: 16px;
    line-height: 24px;
  }

  .perguntas {
    display: flex;
    align-items: center;
    gap: 32px;

    input[type='text'] {
      background: var(--background-color);
      border: none;
      outline: none;
      color: var(--text-color);
      border: 2px solid var(--text-primary);
      padding: 12px 18px;
      box-sizing: border-box;
      border-radius: 4px;
      font-size: 18px;
    }

    [name='resposta'] {
      flex: 1;
      flex-grow: 1;
    }
  }
}
</style>