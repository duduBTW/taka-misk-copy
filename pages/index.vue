<template>
  <div class="inicio_container">
    <TBotao class="criar" @onClick="criar">Criar card</TBotao>
    <CardList />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TelaInicio',
  data() {
    return {
      cards: [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, nobis.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, nobis.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, nobis.',
      ],
    }
  },
  methods: {
    criar() {
      this.$router.push('/lista/criar')
    },
  },
})
</script>

<style lang="scss" scoped>
.inicio_container {
  max-width: 800px;
  margin: 100px auto;
  display: grid;
  grid-template-rows: auto auto;
  gap: 60px;

  & button {
    &.criar {
      justify-self: flex-end;
    }
  }
}
</style>