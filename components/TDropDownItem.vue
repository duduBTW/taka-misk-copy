<template>
  <NuxtLink :to="to" class="dropdown_item_container">
    <slot />
  </NuxtLink>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'TDropDownItem',
  props: {
    to: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.dropdown_item_container {
  text-decoration: none;
  color: var(--text-color);
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 152.69%;
  letter-spacing: 0.02em;

  cursor: pointer;

  &:hover {
    opacity: 0.82;
  }
}
</style>