<template>
  <transition name="dropdown_content">
    <div v-if="ativo" class="dropdown_content_container">
      <slot />
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TDropDownContent',
  inject: ['estadoCompartilhado'],
  computed: {
    ativo() {
      return this.estadoCompartilhado.ativo
    },
  },
})
</script>


<style scoped lang="scss">
.dropdown_content_container {
  position: absolute;
  left: 0px;
  right: 0px;
  z-index: 2;

  top: 60px;

  background: #000000;
  border: 1px solid #292929;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 16px;
}

.dropdown_content-enter-active,
.dropdown_content-leave-active {
  transition: all 0.2s ease;
}
.dropdown_content-enter,
.dropdown_content-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>