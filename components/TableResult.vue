<template>
  <div v-if="tabela" class="tabela_result_container">
    <div v-for="(pergunta) in tabela.perguntas" :key="pergunta.titulo" class="item">
      <p>{{pergunta.titulo}}</p>
      <div class="perguntas">
        <div v-for="resposta in pergunta.respostas" :key="resposta.valor" class="resposta">
          <div class="pontos">{{ resposta.pontos }}</div>
          <div>{{ resposta.valor }}</div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    Carregando...
  </div>
</template>

<script>
export default {
  name: 'TableResult',
  data() {
    return {
      tabela: null,
    }
  },
  async fetch() {
    this.tabela = await this.$database.getItemTabela(this.$route.params.id)
  },
}
</script>

<style lang="scss" scoped>
.tabela_result_container {
  padding: 0px 120px;
  display: grid;
  grid-column-gap: 100px;
  grid-row-gap: 60px;
  grid-template-columns: repeat(2, 1fr);
  color: black;
  font-size: 24px;

  .item {
    padding: 24px;
    border-radius: 12px;
    border: 1px solid black;

    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  p {
    margin: 0;
    padding: 0;
  }

  .pontos {
    font-weight: bold;
    letter-spacing: 2px;
  }

  .perguntas {
    display: flex;
    flex-direction: column;
    gap: 12px;

    .resposta {
      display: flex;
      gap: 20px;

      .pontos {
        width: 60px;
      }
    }
  }
}
</style>