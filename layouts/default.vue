<template>
  <div>
    <div v-if="carregando">Carregando...</div>
    <Nuxt v-else />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

import Database from '~/utils/database'

export interface Type<T> extends Function {
  new (...args: any[]): T
}

declare module 'vue/types/vue' {
  interface Vue {
    $database: Database
  }
}

export default Vue.extend({
  name: 'DefaultLayout',
  computed: {
    ...mapState(['carregando']),
  },
  mounted() {
    this.$database.onCreated((type, data) => {
      if (type === 'success') {
        this.$store.commit('SET_CARREGANDO', false)
      } else {
        this.$store.commit('SET_ERRO', data)
      }
    })
  },
})
</script>

<style lang="scss">
body {
  width: 100%;
  height: 100%;

  padding: 0px;
  margin: 0px;

  background: var(--background-color);
  color: var(--text-color);

  font-family: 'Roboto', sans-serif;
}
</style>
