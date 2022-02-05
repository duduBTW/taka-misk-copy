<template>
  <button :type="type" class="t_botao" @click="$emit('onClick', $event)">
    <slot />
  </button>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'DesafioBotao',
  props: {
    type: {
      type: String,
      required: false,
      default: 'button',
    },
  },
  emits: ['onClick'],
})
</script>

<style  scoped lang="scss">
.t_botao {
  cursor: pointer;

  width: 176px;
  padding: 8px 0px;

  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 152.69%;

  text-align: center;
  letter-spacing: 0.12em;

  color: var(--text-primary);
  background: var(--background-color);
  background-image: url('/button-bg.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  border: none;

  transition: background-image 0.15s ease;
  &:hover {
    transition: background-image 0.05s ease;
    background-image: url('/button-bg-hover.svg');
  }

  &:active {
    transition: background-image 0.25s ease;
    background-image: url('/button-bg-active.svg');
  }
}
</style>