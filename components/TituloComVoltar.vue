<template>
  <div class="container_titulo">
    <NuxtLink to="/">Voltar</NuxtLink>
    <h1>
      <slot />
    </h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'TituloComVoltar',
})
</script>

<style scoped lang="scss">
.container_titulo {
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