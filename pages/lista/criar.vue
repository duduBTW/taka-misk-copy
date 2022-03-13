<template>
  <FormulateForm v-model="formulario" class="criar_container" @submit="criar">
    <div>
      <NuxtLink to="/">Voltar</NuxtLink>
      <h1>Criar</h1>
    </div>
    <FormulateInput label="Titulo" name="titulo" type="textarea" class="input" />
    <FormulateInput v-for="input in inputs" :key="input" :label="`Valor ${input}`" :name="`valor-${input}`" type="text" class="input" />

    <TBotao type="submit" class="criar">Criar card</TBotao>
  </FormulateForm>
</template>

<script lang="ts">
import Vue from 'vue'

// types
import { IList } from '~/types/lista'

export default Vue.extend({
  name: 'TelaCriarLista',
  data() {
    return {
      formulario: {},
      inputs: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    }
  },
  methods: {
    async criar(data: IList) {
      await this.$database.adicionarLista(data)

      this.$router.push('/')
    },
  },
})
</script>

<style lang="scss" scoped>
.criar_container {
  max-width: 1000px;
  margin: 60px auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;

  & .input {
    margin-bottom: 24px;
  }

  & .formulate-input[data-classification='textarea'] {
    grid-column: 1 / span 3;
  }

  & .criar {
    grid-column: 1 / span 3;
    justify-self: flex-end;

    margin-top: 20px;
  }

  & h1 {
    padding: 0px;
    margin: 0px;
    margin-bottom: 40px;

    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 152.69%;
    letter-spacing: 0.12em;

    color: var(--text-primary);
  }

  & a {
    color: var(--text-color);
    margin-bottom: 6px;

    font-size: 12px;
  }
}
</style>