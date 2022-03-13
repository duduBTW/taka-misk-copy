<template>
  <div class="dropdown_container">
    <!-- Toggle -->
    <div @click="toggle">
      <slot name="toggler">
        <button>Abrir</button>
      </slot>
    </div>

    <!-- Content -->
    <slot />

    <!-- Backdrop -->
    <div v-if="estadoCompartilhado.ativo" class="back" @click="toggle" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IEstadoCompartilhado } from '~/types'

declare module 'vue/types/vue' {
  interface Vue {
    estadoCompartilhado: IEstadoCompartilhado
  }
}

export default Vue.extend({
  name: 'TDropDown',
  provide() {
    return {
      estadoCompartilhado: (this as any).estadoCompartilhado,
    }
  },
  data() {
    const estadoCompartilhado: IEstadoCompartilhado = {
      ativo: false,
    }

    return {
      estadoCompartilhado,
    }
  },
  methods: {
    toggle() {
      this.estadoCompartilhado.ativo = !this.estadoCompartilhado.ativo
    },
  },
})
</script>

<style lang="scss" scoped>
.dropdown_container {
  position: relative;

  & .back {
    position: fixed;
    inset: 0;
  }
}
</style>