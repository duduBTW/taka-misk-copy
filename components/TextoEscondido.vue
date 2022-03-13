<template>
  <div class="text_escondido_container" @click="$emit('onClick')">{{ textoMostrar }}</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TextoEscondido',
  props: {
    texto: {
      type: String,
      required: true,
    },
    mostrar: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    textoMostrar() {
      if (!this.mostrar) {
        const texto = this.texto as string

        const tamanho = texto.length
        let novoTexto = texto.split('')[0].toUpperCase()

        for (let i = 0; i < tamanho - 1; i++) {
          novoTexto += '_'
        }

        return novoTexto
      }

      return this.texto.toUpperCase()
    },
  },
})
</script>

<style>
.text_escondido_container {
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  line-height: 56px;

  color: var(--text-primary);
  cursor: pointer;

  letter-spacing: -2px;
}
</style>