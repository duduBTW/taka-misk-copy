<template>
  <FormulateForm v-model="perguntas" class="container_criar_tabela" @submit="criar">
    <TituloComVoltar>Criar Tabela</TituloComVoltar>
    <FormulateInput :repeatable="true" type="group" name="perguntas" add-label="Adicionar Pergunta" validation="required">
      <div class="group">
        <FormulateInput label="Titulo" name="titulo" class="titulo" type="textarea" />
        <FormulateInput :repeatable="true" type="group" name="respostas" add-label="Adicionar Resposta">
          <div class="input_row">
            <FormulateInput label="Pontos" class="pontos" type="text" name="pontos" />
            <FormulateInput label="Resposta" class="valor" type="text" name="valor" />
          </div>
        </FormulateInput>
      </div>
    </FormulateInput>
    <TBotao class="btn" type="submit">Criar</TBotao>
  </FormulateForm>
</template>

<script lang="ts">
import Vue from 'vue'
import { ITabela } from '~/types/tabela'

export default Vue.extend({
  name: 'CriarTabelaPagina',
  data() {
    return {
      dados: {
        perguntas: [],
      },
    }
  },
  methods: {
    async criar(data: ITabela) {
      await this.$database.adicionarTabela(data)
      this.$router.push('/')
    },
  },
})
</script>

<style scoped lang="scss">
.container_criar_tabela {
  max-width: 1000px;
  margin: 60px auto;
  display: flex;
  flex-direction: column;

  .btn {
    margin-top: 30px;
    align-self: flex-end;
  }

  & .group {
    & .titulo {
      grid-column: 1 / -1;
      margin-bottom: 24px;
    }
  }

  & .input_row {
    display: flex;
    gap: 12px;

    & .pontos {
      width: 90px;
    }

    & .valor {
      flex: 1;
      flex-grow: 1;
    }
  }
}
</style>