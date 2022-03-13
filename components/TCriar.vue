<template>
  <TDropDown class="criar_container">
    <template slot="toggler">
      <TBotao @onClick="abrir">Criar card</TBotao>
    </template>
    <TDropDownContent>
      <TDropDownItem to="/lista/criar">Criar lista</TDropDownItem>
      <TDropDownItem to="/tabela/criar">Criar tabela</TDropDownItem>
    </TDropDownContent>
  </TDropDown>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'TCriar',
  methods: {
    criar() {
      this.$router.push('/lista/criar')
    },
    abrir() {},
  },
})
</script>

<style scoped lang="scss">
.criar_container {
  justify-self: flex-end;
}
</style>