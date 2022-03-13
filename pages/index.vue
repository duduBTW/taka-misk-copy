<template>
  <div class="inicio_container">
    <TCriar />
    <CardList />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TelaInicio',
})
</script>

<style lang="scss" scoped>
.inicio_container {
  max-width: 800px;
  margin: 100px auto;
  display: grid;
  grid-template-rows: auto auto;
  gap: 60px;
}
</style>