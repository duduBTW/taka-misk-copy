<template>
  <NuxtLink :to="`/lista/${card.id}`" class="desafio_card">
    {{ card.titulo }}
  </NuxtLink>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { IList } from '~/types/lista'

export default Vue.extend({
  name: 'TBotao',
  props: {
    card: {
      type: Object,
      required: true,
    } as PropOptions<IList>,
  },
})
</script>

<style scoped lang="scss">
.desafio_card {
  padding: 20px;
  cursor: pointer;
  color: var(--text-color);
  text-decoration: none;

  &:hover {
    background: #171717de;
  }

  transition: transform 0.1s ease;
  &:active {
    transition: transform 0.05s ease;
    transform: scale(0.98);
  }
}
</style>